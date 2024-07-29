Cypress.Commands.add('logHeaders', (testName) => {
    const githubToken = Cypress.env('GITHUB_TOKEN');
    // const githubToken = "Hello";
  
    const headers = {
      'UNIQUE-IDENTIFER': `${githubToken} - ${testName}`,
    };
  
    // Log headers to the console and Cypress log
    console.log('Request Headers:', headers);
    cy.log(`Request Headers: ${JSON.stringify(headers)}`);
  });