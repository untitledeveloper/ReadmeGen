function generate_md(answers) {
    return `
# ${answers.title}
  
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br>

## Description
${answers.description}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Credit](#credit)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br>
${answers.license} license. 

## Credit
${answers.credit}

## Tests
${answers.tests}

## Questions
${answers.questions}<br>

Github: [${answers.github}](https://github.com/${answers.github})<br>
Email: ${answers.email}<br>
    `;
  }
  
  module.exports = generate_md;