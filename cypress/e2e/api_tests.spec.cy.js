describe('Pruebas de API y servicios de la PokeAPI', () => {
  it('Verificar endpoint de obtener todos los Pokémon', () => {
    cy.request('GET', 'https://pokeapi.co/api/v2/pokemon').then((response) => {
      expect(response.status).to.eq(200); // Verificar que la solicitud sea exitosa
      expect(response.body.results).to.have.length.above(0); // Verificar que se devuelvan resultados
    });
  });

  it('Verificar endpoint de obtener detalles de un Pokémon específico', () => {
    const pokemonId = 1; // ID del Pokémon a consultar

    cy.request(`GET`, `https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then((response) => {
      expect(response.status).to.eq(200); // Verificar que la solicitud sea exitosa
      expect(response.body).to.have.property('name', 'bulbasaur'); // Verificar que el Pokémon devuelto sea Bulbasaur
    });
  });
});
