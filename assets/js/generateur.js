import { randomMintoMax } from "./randomFunction.js";

const btnGenerate = document.getElementById('generate');
const sectionContainer = document.getElementById('sectionContainer')

async function getPokemonRandom (){
    let promise = await fetch('https://pokebuildapi.fr/api/v1/pokemon/limit/400');
    
    if(promise.ok == true){
        let pokemons = await promise.json();
        return pokemons;
    }else{
        // Si error
    };
};

async function showPokemonRandom(pokemons){

    const pokemonContainer = document.createElement('article');

    btnGenerate.addEventListener('click', ()=>{
        pokemonContainer.innerHTML = '';
        let random = randomMintoMax(0, pokemons.length ) - 1;
        const pokemonImg = document.createElement('img');
        const pokemonName = document.createElement('h2');
        const textName = document.createTextNode(pokemons[random].name);
        
        pokemonImg.setAttribute('src', pokemons[random].image);
        
        pokemonName.appendChild(textName);
       
        
        

        pokemonContainer.append(pokemonImg, pokemonName);
        sectionContainer.appendChild(pokemonContainer)
        
        

        
    });
};

getPokemonRandom().then(pokemons => showPokemonRandom(pokemons));