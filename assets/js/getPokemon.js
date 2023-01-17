async function getPokemon (){
    let promise = await fetch('https://pokebuildapi.fr/api/v1/pokemon/limit/151');
    
    if(promise.ok == true){
        let pokemons = await promise.json();
        return pokemons;
    }else{
        // Si error
    };
};

export {getPokemon};