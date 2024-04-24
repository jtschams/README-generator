// Function that returns a license badge based on which license is passed in
// Function does not get called if there is no license
function renderLicenseBadge(license) {
  const link = renderLicenseLink(license);
  let badgeLicense;
  switch (license) {
    case 'MIT':
      badgeLicense = 'MIT-yellow.svg';
      break;
    case 'GNU':
      badgeLicense = 'GPLv3-blue.svg';
      break;
    default: console.error('Error creating license badge')
  }
  const badge = `[![License: ${license}](https://img.shields.io/badge/License-${badgeLicense})](${link})`;
  return badge;
}

// Function that returns the license link
// Function does not get called if there is no license
function renderLicenseLink(license) {
  let link;
  switch (license) {
    case 'MIT':
      link = 'https://opensource.org/licenses/MIT';
      break;
    case 'GNU':
      link = 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    default: console.error('Error creating license badge')
  }
  return link;
}

// Function that returns the license section of README
// If there is no license, skip calling other license functions return an empty string
function renderLicenseSection(license) {
  if (license) {
    const badge = renderLicenseBadge(license);
    const section = `## License
    
${badge}

The license used is ${license}, which can be viewed in the repository.`
    return {badge, section}
  } else {
    return '';
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {

  const license = renderLicenseSection(data.license)

  return `# ${data.title}

${license.badge}

## Description

${data.description}

## Table of Contents

- [Installation](#Installation)

- [Usage](#Usage)

- [Contribute](#Contributing)

- [Tests](#Tests)

- [Questions](#Questions)

## Installation

${data.install}

## Usage

${data.usage}

## Contributing

${data.contribute}

## Tests

${data.test}

## Questions

My Github account can be found at [${data.username}](https://github.com/${data.username}).

For any other questions, please contact me at ${data.email}.

${license.section}
`;
}

module.exports = generateMarkdown;
