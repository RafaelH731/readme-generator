// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {


    //couldnt get switch to work so decided to use an if statement 
    // switch(license){
    //     case "Apache":
    //         return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    //     break;
    //     case "Boost":
    //         return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
    //     break;
    //     case "Eclipse":
    //         return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
    //     break;
    //     case "GNU":
    //         return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    //     break;
    //     default:
    //         return `No license was used in conjunction with this project`
    //     break;
    // }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    
    //couldnt get switch to work so decided to use an if statement 
    // switch(license){
    //     case "Apache":
    //         return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    //     break;
    //     case "Boost":
    //         return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
    //     break;
    //     case "Eclipse":
    //         return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
    //     break;
    //     case "GNU":
    //         return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    //     break;
    //     default:
    //         return `No license was used in conjunction with this project`
    //     break;
    // }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if(license == "None of the above") {
        return ""
    }else {
        return `## License
        This license was used for this application`

    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    //pass the answers into here
    //use to create a template
    console.log(data)
    
  return `## ${data.title}

  
  
 
  ## Table of Contents
-[Description](#description)
-[Installation](#nstallation)
-[Contributors](#contributors)
-[Usage](#usage)
-[Tests](#tests)
-[Questions](#questions)

  ## Description
  ${data.description}

  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}

  ## Installation
  ${data.install}
  ## Contributors
  ${data.contributors}
  ## Usage
  ${data.usage}
  ## Tests
  ${data.tests}
  ## Questions
  ${data.github}
  ${data.email}
 


  ## Screenshots
  ![Insert description here](Insert link to picture)
  ![Insert description here](Insert link to picture)

`;


//returns a string out of the function
}

module.exports = generateMarkdown;