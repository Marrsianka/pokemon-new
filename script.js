(async () => {
    //Pokemon-database connection
    let database = await(await fetch('pokemon-database.json')).json();
    console.log(database);

    //search pokemon's list
    let pokemonList = document.querySelector('.pokemons__row');

    //add pokemon's cards to pokemon's list
    for(let i=0; i<database.length; i++) {
        let pokemonsColumn = document.createElement('div');
            let pokemonsItemCard = document.createElement('div');
                let cardRow = document.createElement('div');
                    let cardItemTitle = document.createElement('div');
                    let cardItemImage = document.createElement('div');
                    let cardItemFeatures = document.createElement('div');




        pokemonsColumn.classList.add('pokemons__column');
            pokemonsItemCard.classList.add('pokemons__item');
            pokemonsItemCard.classList.add('card');
                cardRow.classList.add('card__row');
                    cardItemTitle.classList.add('card__item');
                    cardItemTitle.classList.add('title');
                    cardItemImage.classList.add('card__item');
                    cardItemImage.classList.add('image');
                    cardItemFeatures.classList.add('card__item');
                    cardItemFeatures.classList.add('features');





        pokemonList.appendChild(pokemonsColumn);
            pokemonsItemCard.appendChild(pokemonsColumn);
                cardRow.appendChild(pokemonsItemCard);
                    cardItemTitle.appendChild(cardRow);
                    cardItemImage.appendChild(cardRow);
                    cardItemFeatures.appendChild(cardRow);
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