document.addEventListener('DOMContentLoaded', function() {
    const pokemonList = document.getElementById('pokemon-list');

    // Conexión a la PokéAPI para obtener los primeros 151 Pokémon
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(data => {
            data.results.forEach(function(pokemon) {
                const card = document.createElement('div');
                card.className = 'col-md-4 mb-3';

                card.innerHTML = `
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${pokemon.name}</h5>
                            <button class="btn btn-primary btn-sm" data-pokemon="${pokemon.url}">Ver Información</button>
                            <div class="additional-info"></div>
                        </div>
                    </div>
                `;

                const button = card.querySelector('button');
                const additionalInfo = card.querySelector('.additional-info');

                button.addEventListener('click', function() {
                    const pokemonUrl = button.getAttribute('data-pokemon');
                    fetch(pokemonUrl)
                        .then(response => response.json())
                        .then(pokemonData => {
                            const types = pokemonData.types.map(type => type.type.name);
                            const abilities = pokemonData.abilities.map(ability => ability.ability.name);

                            additionalInfo.innerHTML = `Tipo: ${types.join(', ')}<br>Habilidades: ${abilities.join(', ')}`;
                        });
                });
                pokemonList.appendChild(card);
            });
        });
});

