

console.log('teste');

const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`


function convertPokemonToHtml(pokemon){
	return `
	<ol class="pokemons">
	<li class="pokemon">
		<span class="number">#001 </span>
		<span class="name">${pokemon.name}</span>
		<div class="detail">
			<ol class="types">
				<li class="type">grass</li>
				<li class="type">poison</li>
			</ol>
			<img src="../Pokedex/img/Bulbasaur.png" alt="${pokemon.name}">
		</div>
	</li>
	`
}


fetch(url)

		.then ((response) => response.json())
		.then ((jsonBody) => jsonBody.results)
		.then ((pokemonList) => {
		for (let i = 0; i < pokemonList; i++) {
			const pokemon = pokemonList[i];
			console.log(convertPokemonToLi(pokemon));

			document.getElementsByClassName('pokemons')
		}
		})
		.catch((error) => console.error (error))