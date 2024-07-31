Cypress.Commands.add('logHeaders', (testName) => {
    const githubRunId = Cypress.env('GITHUB_RUN_ID');
    // const githubToken = "Hello";
  
    const headers = {
      'UNIQUE-IDENTIFIER': `${githubRunId} - ${testName}`,
    };
  
    // Log headers to the console and Cypress log
    console.log('Request Headers:', headers);
    cy.log(`Request Headers: ${JSON.stringify(headers)}`);
  });