Cypress.Commands.add('logHeaders', (testName) => {
    
  console.log('All environment variables:', Cypress.env());
  const githubToken = Cypress.env('GITHUB_TOKEN');;
    // const githubToken = "Hello";
  
    // Check if GH run_id is defined
    if (!githubToken) {
      console.error('GITHUB_RUN_ID is undefined');
    } else {
      const headers = {
        'UNIQUE-IDENTIFIER': `${githubToken} - ${testName}`,
      };
  
    // Log headers to the console and Cypress log
    console.log('Request Headers:', headers);
    cy.log(`Request Headers: ${JSON.stringify(headers)}`);
    }
  });
