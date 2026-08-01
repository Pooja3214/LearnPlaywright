// //Write a JavaScript program using a switch statement that takes
//  an environment name stored in a variable and prints the base URL
// , API key pattern, and timeout. Use const for fixed values and let for the assembled config.

// Environments: dev, staging, qa, production/prod. Each has different base URL, API key prefix, timeout, and description.


function questionName(input) {
  let message;
  let apiKey;
  let times;
  let desc;
    switch(input){
        case 'dev':
            message="https://dev-api.testingacademy.com";
            apiKey="dev_key_xxxx-xxxx";
            times="7000ms";
            desc="Development -mirror";
            break;

        case 'staging':
            message="https://staging-api.testingacademy.com";
            apiKey="stg_key_xxxx-xxxx";
            times="8000ms";
            desc="Staging - Pre-production mirror";
            break;

         case 'qa':
            message="https://qa-api.testingacademy.com";
            apiKey="qa_key_xxxx-xxxx";
            times="9000ms";
            desc="QA - Testing mirror";
            break;

         case 'prod':
            message="https://production-api.testingacademy.com";
            apiKey="prod_key_xxxx-xxxx";
            times="10000ms";
            desc="Production - Production mirror";
            break;
    }

let answer=`Environment: ${input.toUpperCase()} Base URL: ${message} API Key: ${apiKey} Timeout: ${times} Description: ${desc}`;
console.log(answer);

  return answer;
}

questionName("staging");