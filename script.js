(async () => {
    let DB = await(await fetch('pokemon-database.json')).json();
 
    console.log(DB);
})();