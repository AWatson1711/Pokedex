import { getPokemon } from "./getPokemon.js"

// Declaration d'element
const pokemonsContainer = document.getElementById('pokemonsContainer');
const modalContainer = document.querySelector('.modalContainer');
const mainElt = document.querySelector('main');

// Btn close modal
const btnClose = document.createElement('button');
btnClose.setAttribute('class', 'btn');



async function showPokemons(pokemons){
    // Declaration des th
    const thImg = document.createElement('th');
    const thName = document.createElement('th');
    const thType = document.createElement('th');
    const thNbr = document.createElement('th');
    const thPV = document.createElement('th');
    const thAtq = document.createElement('th');
    const thDef = document.createElement('th');
    const thSpeDef = document.createElement('th');
    const thSpeAtq = document.createElement('th');
    const thVit = document.createElement('th');

    // Creation des noeuds pour les th
    const textThImg = document.createTextNode('Image');
    const textThName = document.createTextNode('Nom');
    const textThType = document.createTextNode('Type');
    const textThNbr= document.createTextNode('Numéro');
    const textThPV = document.createTextNode('PV');
    const textThAtq = document.createTextNode('Attaque');
    const textThDef = document.createTextNode('Défense');
    const textThSpeDef = document.createTextNode('Défense Spécial');
    const textThSpeAtq = document.createTextNode('Attaque Spécial');
    const textThVit = document.createTextNode('Vitesse');

    // Affectation des noeud
    thImg.appendChild(textThImg);
    thName.appendChild(textThName);
    thType.appendChild(textThType);
    thNbr.appendChild(textThNbr);
    thPV.appendChild(textThPV);
    thAtq.appendChild(textThAtq);
    thDef.appendChild(textThDef);
    thSpeDef.appendChild(textThSpeDef);
    thSpeAtq.appendChild(textThSpeAtq);
    thVit.appendChild(textThVit);

    // Affectation au DOM
    pokemonsContainer.append(thImg,thName,thType,thNbr,thPV,thAtq,thDef,thSpeDef,thSpeAtq,thVit)

    for (const pokemon of pokemons) {
        const trElement = document.createElement('tr');
        const linkElement = document.createElement('a');

        // Pokemon Images
        const tdImg = document.createElement('td');
        const pokemonImg = document.createElement('img');
        pokemonImg.setAttribute('src', pokemon.image);
        tdImg.appendChild(pokemonImg);
        
        // POkemon Name
        const tdName = document.createElement('td');
        const pokemonName = document.createTextNode(pokemon.name);
        linkElement.appendChild(pokemonName);
        linkElement.setAttribute('href', '#')
        tdName.appendChild(linkElement);


        // Pokemon type
        const tdType = document.createElement('td');
        for (const type of pokemon.apiTypes) {
            const pokemonType = document.createElement('img');
            pokemonType.setAttribute('src', type.image);
            pokemonType.setAttribute('title', type.name);
            pokemonType.setAttribute('class', 'pokemonType')
            tdType.append(pokemonType);
        };

        // Pokemon Number
        const tdNbr = document.createElement('td');
        const pokemonNbr = document.createTextNode(pokemon.pokedexId);
        tdNbr.appendChild(pokemonNbr);

        // pokemon pv
        const tdPv = document.createElement('td');
        const pokemonPv = document.createTextNode(pokemon.stats.HP);
        tdPv.appendChild(pokemonPv);

        // Pokemon Attaque
        const tdAtq = document.createElement('td');
        const pokemonAtq = document.createTextNode(pokemon.stats.attack);
        tdAtq.appendChild(pokemonAtq);
        
        // Pokemon Defense
        const tdDef = document.createElement('td');
        const pokemonDef = document.createTextNode(pokemon.stats.defense);
        tdDef.appendChild(pokemonDef);

         // Pokemon Df Special
         const tdSpeDef = document.createElement('td');
         const pokemonSpeDef = document.createTextNode(pokemon.stats.special_defense);
         tdSpeDef.appendChild(pokemonSpeDef);

        // Pokemon Df Special
        const tdSpeAtq = document.createElement('td');
        const pokemonSpeAtq = document.createTextNode(pokemon.stats.special_attack);
        tdSpeAtq.appendChild(pokemonSpeAtq);

        // Pokemon Vitesse
        const tdVit = document.createElement('td');
        const pokemonVit = document.createTextNode(pokemon.stats.speed);
        tdVit.appendChild(pokemonVit);

        
        
        trElement.append(tdImg, tdName, tdType, tdNbr, tdPv,tdAtq, tdDef, tdSpeDef, tdSpeAtq, tdVit);
        pokemonsContainer.appendChild(trElement);

        linkElement.addEventListener('click', (e)=>{
            // Modal display
            const modal = document.createElement('div');
            modal.setAttribute('class', 'modal');
            // Modal img
            const modalPokemonImg = document.createElement('img');
            modalPokemonImg.setAttribute('class', 'modalImg');
            modalPokemonImg.setAttribute('src', pokemon.image);

            // Modal Description
            const modalPokemonDes = document.createElement('p');
            const textModal = document.createTextNode(`${pokemon.name} ipsum dolor sit amet, consectetur adipisicing elit. Delectus molestiae accusantium fugit? Molestiae, architecto ipsa tempora natus, cupiditate amet sit qui corrupti voluptatibus id voluptates, eaque vero delectus non facilis.ipsum dolor sit amet, consectetur adipisicing elit. Delectus molestiae accusantium fugit? Molestiae, architecto ipsa tempora natus, cupiditate amet sit qui corrupti voluptatibus id voluptates, eaque vero delectus non facilis.`);
            modalPokemonDes.appendChild(textModal);
            // Affectation du button close dans la modal
            modal.append(modalPokemonImg, btnClose, modalPokemonDes);

            
            modalContainer.appendChild(modal);
            modal.classList.add('modalDisplay');
            mainElt.classList.add('overlay');

            e.preventDefault();
            btnClose.addEventListener('click', ()=>{
                // Modal close
                modal.classList.remove('modalDisplay');
                mainElt.classList.remove('overlay');
                
            })
        });
      
    
};

};

getPokemon().then(pokemons => showPokemons(pokemons))