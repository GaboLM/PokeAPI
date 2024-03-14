describe('Pruebas de Rendimiento y Carga en la PokeAPI', () => {
  it('Medir el rendimiento bajo diferentes condiciones de carga', () => {
    // Definir el número de solicitudes y la tasa de llegada para la carga
    const numRequests = 200; // Número total de solicitudes a realizar
    const arrivalRate = 10; // Tasa de llegada de solicitudes por segundo

    // Medir el tiempo de respuesta promedio de la PokeAPI bajo carga
    cy.wrap(
      Cypress.Promise.all(Array.from(Array(numRequests).keys()).map(() => {
        return cy.request('GET', 'https://pokeapi.co/api/v2/pokemon');
      }))
    ).then((responses) => {
      const totalDuration = responses.reduce((acc, response) => acc + response.duration, 0);
      const averageDuration = totalDuration / numRequests;
      cy.log(`Tiempo de respuesta promedio: ${averageDuration} ms`);
    });
  });
});
