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
                        let featuresRow = document.createElement('div');
                            let featuresItemType = document.createElement('div');
                                let typeRow = document.createElement('div');
                                    for(let j=0; j<database[i].types.length; j++) {
                                        let typeItem = document.createElement('div');
                                        typeItem.classList.add('type__item')
                                        typeRow.appendChild(typeItem);
                                            let imgType = document.createElement('img');
                                            imgType.src = 'img/types/type-' + database[i].types[j] + '.png';
                                            imgType.alt = database[i].types[j];
                                            imgType.title = database[i].types[j];
                                            typeItem.appendChild(imgType);
                                    }
                            let featuresItemLocation = document.createElement('div');
                                let imgLocation = document.createElement('img');



        titleItemName.textContent = database[i].name;
        titleItemRank.textContent = '0';
        imgPokemon.src = database[i].image;
        imgPokemon.alt = database[i].name;
        imgPokemon.title = database[i].name;
        imgLocation.src = 'img/locations/location-' + database[i].location + '.png';
        imgLocation.alt = database[i].location;
        imgLocation.title = database[i].location;



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
                        featuresRow.classList.add('features__row');
                            featuresItemType.classList.add('features__item');
                            featuresItemType.classList.add('type');
                                typeRow.classList.add('type__row');
                            featuresItemLocation.classList.add('features__item');
                            featuresItemLocation.classList.add('location');





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
                        cardItemFeatures.appendChild(featuresRow);
                            featuresRow.appendChild(featuresItemType);
                                featuresItemType.appendChild(typeRow);
                            featuresRow.appendChild(featuresItemLocation);
                                featuresItemLocation.appendChild(imgLocation);
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