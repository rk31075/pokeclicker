var pokedollarcount = 0;
var autoPokedollar = 0;
const money = "$";
const money_title = " P$";
var click = 1;
var pps=0;
var totalowned=0;
var owned0=0;
var owned1=0;
var owned2=0;
var owned3=0;

setInterval(getPPS, 1000);
setInterval(update, 10);
setInterval( function() { updateStats(0); updateStats(1); updateStats(2); updateStats(3) }, 10 );

setInterval(function() {
    console.log("Pokemons owned :", totalowned);
    console.log("P$ produced per second:", click);
    if (totalowned === 50)
    {
        totalowned = 0;
        click = click * 2;
    }
}, 5000);

var pokemons = [
    { id: 0, name: "Bulbasaur", cost: 10, pps: 1, owned: 0 },
    { id: 1, name: "Squirtle", cost: 50, pps: 2, owned: 0 },
    { id: 2, name: "Charmander", cost: 100, pps: 3, owned: 0},
    { id: 3, name: "Pikachu", cost: 350, pps: 5, owned:  0}
];

function getPPS()
{
    pps=1;
    pokemons.forEach(function(pokemon)   {
        pps+= pokemon.pps * pokemon.owned;
    })                                                                          
    pokedollarcount = pokedollarcount + pps;
    update();
}

function buyPokemon(id)
{
    const PickedPokemon = pokemons.find(pokemon => pokemon.id === id);
    
    var YouNeed = PickedPokemon.cost - pokedollarcount;

    if (pokedollarcount >= PickedPokemon.cost)
    {
        pokedollarcount = pokedollarcount - PickedPokemon.cost;
        PickedPokemon.owned = PickedPokemon.owned + 1;
        pps += PickedPokemon.pps * PickedPokemon.owned;
        PickedPokemon.cost = PickedPokemon.cost * 1.15;
        totalowned = totalowned + 1;

        if (id == 0) 
        {
            owned0 = owned0 +1;
        }

        if (id == 1) 
        {
            owned1 = owned1 +1;
        }
        
        if (id == 2) 
        {
            owned2 = owned2 +1;
        }

        if (id == 3) 
        {
            owned3 = owned3 +1;
        }
    } 
    else
    {
        alert("You don't have enough P$");
    }

    update();

    
    
}


function updateStats(id)
{
const PickedPokemon = pokemons.find(pokemon => pokemon.id === id);
// Bulasaur's stats
if (id == 0)
    {
        PickedPokemon.cost = Math.trunc(PickedPokemon.cost);
        PickedPokemon.pps = Math.trunc(PickedPokemon.pps);
        PickedPokemon.owned = Math.trunc(PickedPokemon.owned);


        document.getElementById("bulbasaur_cost").innerHTML=PickedPokemon.cost;
        document.getElementById("bulbasaur_pps").innerHTML=PickedPokemon.pps;
        document.getElementById("bulbasaur_owned").innerHTML=PickedPokemon.owned;

         if (owned0 === 24)
        {
            owned0 = 25;
            PickedPokemon.pps = PickedPokemon.pps * 2;
        }

        if (owned0 === 49)
        {
            owned0 = 50;
            PickedPokemon.pps = PickedPokemon.pps * 2;
        }

        if (owned0 === 99)
        {
            owned0 = 100;
            PickedPokemon.pps = PickedPokemon.pps * 2;
        }

        if (owned0 === 249)
        {
            owned0 = 250;
            PickedPokemon.pps = PickedPokemon.pps * 2;
        }

        if (owned0 === 999)
        {
            owned0 = 1000;
            PickedPokemon.pps = PickedPokemon.pps * 2;
        }
        
    }
//Squirtle's stats
else if(id == 1)
    {
        PickedPokemon.cost = Math.trunc(PickedPokemon.cost);
        PickedPokemon.pps = Math.trunc(PickedPokemon.pps);
        PickedPokemon.owned =Math.trunc(PickedPokemon.owned);


        document.getElementById("squirtle_cost").innerHTML=PickedPokemon.cost;
        document.getElementById("squirtle_pps").innerHTML=PickedPokemon.pps;
        document.getElementById("squirtle_owned").innerHTML=PickedPokemon.owned;

        if (owned1 === 24)
        {
            owned1 = 25;
            PickedPokemon.pps = PickedPokemon.pps * 2;
        }

        if (owned1 === 49)
        {
            owned1 = 50;
            PickedPokemon.pps = PickedPokemon.pps * 2;
        }

        if (owned1 === 99)
        {
            owned1 = 100;
            PickedPokemon.pps = PickedPokemon.pps * 2;
        }

        if (owned1 === 249)
        {
            owned1 = 250;
            PickedPokemon.pps = PickedPokemon.pps * 2;
        }

        if (owned1 === 999)
        {
            owned1 = 1000;
            PickedPokemon.pps = PickedPokemon.pps * 2;
        }
    }
//Charmander's stats
else if(id == 2)
    {
        PickedPokemon.cost = Math.trunc(PickedPokemon.cost);
        PickedPokemon.pps = Math.trunc(PickedPokemon.pps);
        PickedPokemon.owned =Math.trunc(PickedPokemon.owned);


        document.getElementById("charmander_cost").innerHTML=PickedPokemon.cost;
        document.getElementById("charmander_pps").innerHTML=PickedPokemon.pps;
        document.getElementById("charmander_owned").innerHTML=PickedPokemon.owned;

        if (owned2 === 24)
        {
            owned2 = 25;
            PickedPokemon.pps = PickedPokemon.pps * 2;
        }

        if (owned2 === 49)
        {
            owned2 = 50;
            PickedPokemon.pps = PickedPokemon.pps * 2;
        }

        if (owned2 === 99)
        {
            owned2 = 100;
            PickedPokemon.pps = PickedPokemon.pps * 2;
        }

        if (owned2 === 249)
        {
            owned2 = 250;
            PickedPokemon.pps = PickedPokemon.pps * 2;
        }

        if (owned2 === 999)
        {
            owned2 = 1000;
            PickedPokemon.pps = PickedPokemon.pps * 2;
        }
    }  
    
//Pikachu's stats
else if(id == 3)
    {   
        PickedPokemon.cost = Math.trunc(PickedPokemon.cost);
        PickedPokemon.pps = Math.trunc(PickedPokemon.pps);
        PickedPokemon.owned =Math.trunc(PickedPokemon.owned);


        document.getElementById("pikachu_cost").innerHTML=PickedPokemon.cost;
        document.getElementById("pikachu_pps").innerHTML=PickedPokemon.pps;
        document.getElementById("pikachu_owned").innerHTML=PickedPokemon.owned;
        
        if (owned3 === 24)
        {
            owned3 = 25;
            PickedPokemon.pps = PickedPokemon.pps * 2;
        }

        if (owned3 === 49)
        {
            owned3 = 50;
            PickedPokemon.pps = PickedPokemon.pps * 2;
        }

        if (owned3 === 99)
        {
            owned3 = 100;
            PickedPokemon.pps = PickedPokemon.pps * 2;
        }

        if (owned3 === 249)
        {
            owned3 = 250;
            PickedPokemon.pps = PickedPokemon.pps * 2;
        }

        if (owned3 === 999)
        {
            owned3 = 1000;
            PickedPokemon.pps = PickedPokemon.pps * 2;
        }
        
    }    


    
}
function update()
{
    Math.trunc(pokedollarcount);
    document.getElementById("pokedollarcount").innerHTML=pokedollarcount + money;
    document.title = pokedollarcount + money_title;
    document.getElementById("pps").innerHTML= pps;
    document.getElementById("clicks").innerHTML = click + money;

  
}
function addGold2()
{
    
    pokedollarcount = pokedollarcount + click;
}

function displayGolds()
{
    update();
}

function addGold(x)
{
    pokedollarcount = pokedollarcount + x;
    update();
}

function savePokedex() {
localStorage.setItem("pokedollarcount", pokedollarcount);
localStorage.setItem("pokemons", pokemons);
}

function loadPokedex() {
pokemons = localStorage.getItem("pokemons");
pokemons = parseInt(pokemons);
pokedollarcount = localStorage.getItem("pokedollarcount");
pokedollarcount = parseInt(pokedollarcount);
update();
}
