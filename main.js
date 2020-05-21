const url = "https://pokeapi.co/api/v2/pokemon/1/";
const urlNext = "";

const formulario = document.querySelector("#formulario");
const boton = document.querySelector("#boton");
const resultado = document.querySelector("#resultado");

let i;
for (i = 1; i < 100; i++) {
  fetch("https://pokeapi.co/api/v2/pokemon/" + i + "/")
    .then((data) => data.json())
    .then((data) => {
      pokemones.push(data);

      

      
    })
    .catch((err) => console.log(err));
}

const pokemones = [];

const filtrar = () => {
  

  resultado.innerHTML = "";

  const texto = formulario.value.toLowerCase();

  for (let pokemon of pokemones) {
    let nombre = pokemon.name.toLowerCase();
    if (nombre.indexOf(texto) !== -1) {
      resultado.innerHTML += `
                    <li><img src="${pokemon.sprites.front_default}"></li>
                `;
    }
  }
};

if (resultado.innerHTML === "") {

  resultado.innerHTML += `
                    <li>Pokemon no encontrado...</li>
                `;
}

boton.addEventListener("click", filtrar);
formulario.addEventListener("keyup", filtrar);


