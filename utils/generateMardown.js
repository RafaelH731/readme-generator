// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

    switch(license){
        case "Apache":
            return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
        break;
        case "Boost":
            return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
        case "Term":
        break;
        case "owner":
            case "admin":
                case "moderator":
                    return `admin privileges`
        break;
        default:
            return `No license was used in conjunction with this project`
        break;
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    //pass the answers into here
    //use to create a template
  return `# ${data.title}

  ## Licenses
  ${renderLicenseBadge(data.license)}
 
  ## Table of Contents
-[Description](#description)
-[Installation](#nstallation)
-[Contributors](#contributors)
-[Usage](#usage)
-[Tests](#tests)
-[Questions](#questions)

  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Contributors
  ${data.contributors}
  ## Usage
  ${data.usage}
  ## Tests
  ${data.tests}
  ##Questions
  ${data.github}
  ${data.email}
 


  ##Screenshots
  ![Insert description here](Insert link to picture)
  ![Insert description here](Insert link to picture)
  
`;


//returns a string out of the function
}

module.exports = generateMarkdown;