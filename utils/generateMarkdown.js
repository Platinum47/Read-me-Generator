
function renderLicenseBadge(license) {


}


function renderLicenseLink(license) {}


function renderLicenseSection(license) {}


function generateMarkdown(data) {
  return `# ${data.title}

## Description 

${data.description}

## Repo 

${data.repo}

## Username

${data.username}

## Installiation 

${data.install}

## usage

${data.usage}

## contributing

${data.contributing}

## tests

${data.tests}

## license

${data.license}
`;
}

module.exports = generateMarkdown;
