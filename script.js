//Pokemon-database connection
(async () => {
    let database = await(await fetch('pokemon-database.json')).json();
 
    console.log(database);

    let pokemonList = document.querySelector('.pokemons__row');

    for(let i=0; i<database.length; i++) {
        let pokemonsColumn = document.createElement('div');
        pokemonsColumn.classList.add('pokemons__column');
        pokemonList.appendChild('pokemonsColumn');
    }
})();

/*function showPokemons() {
    let pokemonList = document.querySelector('.pokemons__row');

    for(let i=0; i<database.length; i++) {
        let pokemonsColumn = document.createElement('div');
        pokemonsColumn.classList.add('pokemons__column');
        pokemonList.appendChild('pokemonsColumn');
    }
}

showPokemons();*/