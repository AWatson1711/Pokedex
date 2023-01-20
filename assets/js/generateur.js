const btnGenerate = document.getElementById('generate');
const sectionContainer = document.getElementById('sectionContainer');
let counter = 0;

async function getPokemonRandom (){
    let promise = await fetch('https://pokebuildapi.fr/api/v1/random/team');
    
    if(promise.ok == true){
        let pokemons = await promise.json();
        return pokemons;
    }else{
        // Si error
    };
};

async function showPokemonRandom(pokemons){
    
   const articleElt = document.getElementById('articleElt');
   const divContainer = document.getElementById('divContainer');
    

    btnGenerate.addEventListener('click', ()=>{
       if(!document.querySelector('.pokemonsContainer')){
        for (const pokemon of pokemons) {
            const pokemonsContainer = document.createElement('div');
            pokemonsContainer.setAttribute('class', 'pokemonsContainer');

            const pokemonImg = document.createElement('img');
            pokemonImg.setAttribute('src', pokemon.image);
    
            
    
            pokemonsContainer.append(pokemonImg);
            divContainer.appendChild(pokemonsContainer)
            
        }
        sectionContainer.appendChild(divContainer);
        

        const pokemonImg = document.createElement('img');
        pokemonImg.setAttribute('src', pokemons[counter].image);

        const pokemonName = document.createElement('h2');
        const textName = document.createTextNode(pokemons[counter].name);
        pokemonName.appendChild(textName);



        articleElt.append(pokemonImg, pokemonName);
        sectionContainer.appendChild(articleElt);
        counter++;
       }else if(counter < 6){
        
        
        articleElt.innerHTML = '';

        const pokemonImg = document.createElement('img');
        pokemonImg.setAttribute('src', pokemons[counter].image);

        const pokemonName = document.createElement('h2');
        const textName = document.createTextNode(pokemons[counter].name);
        pokemonName.appendChild(textName);



        articleElt.append(pokemonImg, pokemonName);
        sectionContainer.appendChild(articleElt);
        counter++;
       }
        
    });
};

getPokemonRandom().then(pokemons => showPokemonRandom(pokemons));