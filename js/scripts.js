let pokemonRepository = (function(){
  let pokemonList = [
    {
      name: "Charmander",
      height: 4.0,
      types: ["fire", "blaze"],
    },
    {
      name: "Sandshrew",
      height: 1.7,
      types: ["ground", "sand veil"],
    },
    {
      name: "Wigglytuff",
      height: 1.5,
      types: ["fairy", "cute charm", "competitive"],
    },
    {
      name: "Bayleef",
      height: 3.5,
      types: ["grass", "overgrow"],
    },
    {
      name: "Altaria",
      height: 7.0,
      types: ["dragon", "flying", "natural cure"],
    },
  ];
  function getAll (){
    return pokemonList
  }
  function add (pokemon){
    if(
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ){
      pokemonList.push(pokemon)
    }else {
      alert("Please enter valid pokemon")
    }
    
  }
  return {
    getAll:getAll,
    add:add,
  }
})()

console.log(pokemonRepository.getAll());
pokemonRepository.add({name:"Eve", height: 4.5, types: ["speed"]})
console.log(pokemonRepository.getAll());
// set up forEach loop on pokemonList
pokemonRepository.getAll().forEach(function(pokemon) {
  
    let color = "";
      pokemon.types.forEach(function(type){
        if (type === "grass") {
          color = '<span style="color:green;"> ';
        } else if (type === "fire") {
          color = '<span style="color:red;">';
        } else if (type === "ground") {
          color = '<span style="color:brown;">';
        } else if (type === "fairy") {
          color = '<span style="color:lightblue;">';
        } else if (type === "dragon") {
          color = '<span style="color:orange;">';
        } else if (type === "speed") {
          color = '<span style="color:blue;">';
        }
      })
      

    let size = "";
    if (pokemon.height > 6) {
      size = "Wow, what a big pokemon!";
    } else if (pokemon.height < 2) {
      size = "Aww, a little pokemon!";
    } else {
      size = "An average size pokemon";
    }

  document.write(
    '<div class = "box">' +
    pokemon.name + 
    " has height of " +
    pokemon.height +
    size +
    color +
    "<br>" + 
    "Types: " +
    pokemon.types + 
    "." +
    '</div>'
  );
});

// add color to different types



