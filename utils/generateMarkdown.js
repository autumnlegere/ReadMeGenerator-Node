// Function returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "GNU AGPLv3") {
    return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
  } else if (license === "GNU GPLv3") {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === "GNU LGPLv3") {
    return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
  } else if (license === "Mozilla Public License 2.0") {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  } else if (license === "Apache License 2.0") {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === "MIT License") {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === "Boost Software License 1.0") {
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
  } else if (license === "The Unlicense") {
    return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
  } else if (license === "ISC License") {
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
  } else if (license === "No License") {
    return ''
  }
}

// Function returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "GNU AGPLv3") {
    return 'This project is covered under the following license: [License: GNU AGPLv3](https://www.gnu.org/licenses/agpl-3.0)';
  } else if (license === "GNU GPLv3") {
    return 'This project is covered under the following license: [License: GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === "GNU LGPLv3") {
    return 'This project is covered under the following license: [License: GNU LGPLv3](https://www.gnu.org/licenses/lgpl-3.0)';
  } else if (license === "Mozilla Public License 2.0") {
    return 'This project is covered under the following license: [License: Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)';
  } else if (license === "Apache License 2.0") {
    return 'This project is covered under the following license: [License: Apache License 2.0](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === "MIT License") {
    return 'This project is covered under the following license: [License: MIT License](https://opensource.org/licenses/MIT)';
  } else if (license === "Boost Software License 1.0") {
    return 'This project is covered under the following license: [License: Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt)';
  } else if (license === "The Unlicense") {
    return 'This project is covered under the following license: [License: The Unlicense](http://unlicense.org/)';
  } else if (license === "ISC License") {
    return 'This project is covered under the following license: [License: ISC License](https://opensource.org/licenses/ISC)'
  } else if (license === "No License") {
    return '';
  }
}

function renderContributing(selection) {
  if (selection === 'Yes, Include the Contributor Covenant') {
    return '[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)';
  } else if (selection === 'No, I will write my own contributor guidelines') {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Installation

${data.installation}


## Usage

${data.usage}


## License

${renderLicenseLink(data.license)}


## Contributing

${renderContributing(data.contributing)}


## Tests

${data.tests}


## Questions

Link to my Github profile:
- [${data.github}](https://github.com/${data.github})

Please email me at the address below if you have any additional questions:
- [${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
