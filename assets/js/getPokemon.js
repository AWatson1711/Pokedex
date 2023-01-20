async function getPokemon (){
    let promise = await fetch('https://pokebuildapi.fr/api/v1/pokemon/limit/151');
    
    if(promise.ok == true){
        let pokemons = await promise.json();
        return pokemons;
    }else{
        // Si error
    };
};

async function getPokemonType (){
    let promise = await fetch('https://pokebuildapi.fr/api/v1/types');
    
    if(promise.ok == true){
        let types = await promise.json();
        return types;
    }else{
        // Si error
    };
};

export {getPokemon, getPokemonType};