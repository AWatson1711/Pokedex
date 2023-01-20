import { getPokemonType } from "./getPokemon.js";
const showPokemonCards = document.getElementById('showPokemonCards');
const cardsShowDown = document.getElementById('cardsShowDown');
const playerCards = document.querySelector('.player')
const computerCards = document.querySelector('.computer')
const btnShowDown = document.getElementById('btnShowDown');
let counter = 0;


async function showPokemon (types){
    const typeBtn = document.createElement('div');
    for (const type of types) {
        const typeContainer = document.createElement('article');
        typeContainer.setAttribute('class', 'typeContainer');
        const typeImg = document.createElement('img');
        typeImg.setAttribute('src', type.image);
        typeImg.setAttribute('class', 'typeImg')
        
        const typeName = document.createElement('h3');
        const typeNameText = document.createTextNode(type.name);
        typeName.appendChild(typeNameText);
        typeContainer.append(typeImg, typeName);
        typeBtn.appendChild(typeContainer)
        showPokemonCards.appendChild(typeBtn);

     
       
    }
    typeBtn.addEventListener('click', ()=>{
        
        playerCards.innerHTML = ' ';
        const typeContainer = document.createElement('article');
        const typeImg = document.createElement('img');
        const typeName = document.createElement('h3');
        
        typeImg.setAttribute('class', 'typeImg');
        typeImg.setAttribute('src', types[counter].image);
        
        
        const typeNameText = document.createTextNode(types[counter].name);
        typeName.appendChild(typeNameText);
        typeContainer.append(typeImg, typeName);
        playerCards.appendChild(typeContainer);
        counter++
        
    })
 
}



getPokemonType().then(types => showPokemon(types));