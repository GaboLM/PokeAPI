describe('Monitorización de la PokeAPI', () => {
  it('Verificar disponibilidad y tiempo de respuesta de la PokeAPI', () => {
    // Realizar una solicitud GET al endpoint de la PokeAPI
    cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/1').then((response) => {
      // Verificar que la solicitud sea exitosa
      expect(response.status).to.eq(200);

      // Verificar el tiempo de respuesta
      expect(response.duration).to.be.lessThan(500); // Tiempo de respuesta esperado en milisegundos
    });
  });
});
