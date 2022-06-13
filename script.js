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
                        let titleRow = document.createElement('div');
                            let titleItemName = document.createElement('div');
                            let titleItemRank = document.createElement('div');
                    let cardItemImage = document.createElement('div');
                        let imgPokemon = document.createElement('img');
                    let cardItemFeatures = document.createElement('div');



        titleItemName.textContent = database[i].name;
        titleItemRank.textContent = '0';
        imgPokemon.src = database[i].image;
        imgPokemon.alt = database[i].name;
        imgPokemon.title = database[i].name;



        pokemonsColumn.classList.add('pokemons__column');
            pokemonsItemCard.classList.add('pokemons__item');
            pokemonsItemCard.classList.add('card');
                cardRow.classList.add('card__row');
                    cardItemTitle.classList.add('card__item');
                    cardItemTitle.classList.add('title');
                        titleRow.classList.add('title__row');
                        titleItemName.classList.add('title__item');
                        titleItemName.classList.add('name');
                        titleItemRank.classList.add('title__item');
                        titleItemRank.classList.add('rank');
                    cardItemImage.classList.add('card__item');
                    cardItemImage.classList.add('image');
                    cardItemFeatures.classList.add('card__item');
                    cardItemFeatures.classList.add('features');





        pokemonList.appendChild(pokemonsColumn);
            pokemonsColumn.appendChild(pokemonsItemCard);
                pokemonsItemCard.appendChild(cardRow);
                    cardRow.appendChild(cardItemTitle);
                        cardItemTitle.appendChild(titleRow);
                        titleRow.appendChild(titleItemName);
                        titleRow.appendChild(titleItemRank);
                    cardRow.appendChild(cardItemImage);
                        cardItemImage.appendChild(imgPokemon);
                    cardRow.appendChild(cardItemFeatures);
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