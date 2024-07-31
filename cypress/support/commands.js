Cypress.Commands.add('logHeaders', (testName) => {
    
  // console.log('All environment variables:', Cypress.env());
  const githubRunId = Cypress.env('GH_RUN_ID');;
    // const githubRunId = "Hello";
  
    // Check if GH run_id is defined
    if (!githubRunId) {
      console.error('GH_RUN_ID is undefined');
    } else {
      const headers = {
        'UNIQUE-IDENTIFIER': `${githubRunId} - ${testName}`,
      };
  
    // Log headers to the console and Cypress log
    console.log('Request Headers:', headers);
    cy.log(`Request Headers: ${JSON.stringify(headers)}`);
    }
  });