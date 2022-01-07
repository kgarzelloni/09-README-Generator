// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !=='none') {
    return `![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)`
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
   
    if(license !=='none'){
      return `[${license}](https://opensource.org/licenses/${license})`
    } else{
      return ""
    }
  }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
   if (license !== 'none'){
    return `[${license}]`
  } else{
    return ""
  }
}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
  // return `# ${ data.title }

    // console.log("this is from generate markdown")
    // console.log(data)
    // }
    function projectTitle(title) {
      const titleString = title
      const output = `# ${titleString}
  \n`
      return output
    };
    function projectDescription(description) {
      const descriptionString = description
      const output = `## Description:\n${descriptionString}
  \n`
      return output
    };
    function projectInstallation(installation) {
      const installationString = installation
      const output = `## Installation Instructions:\n${installationString}
  \n`
      return output
    };
    function projectLicense(license) {
      const licenseString = license
      const output = `## License:\n${licenseString}
  \n` 
      return output
    };
    function projectContributors(contributors) {
      const contributorString = contributors
      const output = `## Contributors:\n${contributorString}
  \n`
      return output
    };
    function projectEmail(email) {
      const emailString = email
      const output = `## Questions? \nEmail${emailString}
  \n`
      return output
    };
    function projectGithub(github) {
      const githubString = github
      const output = `## GitHub \nhttps://www.github.com/${githubString}
  \n`
      return output
    };
    module.exports = {
      projectTitle: projectTitle,
      projectDescription: projectDescription,
      projectInstallation: projectInstallation,
      projectLicense: projectLicense,
      projectContributors: projectContributors,
      projectEmail: projectEmail,
      projectGithub: projectGithub,
      renderLicenseBadge: renderLicenseBadge,
      renderLicenseLink: renderLicenseLink,
      renderLicenseSection: renderLicenseSection
    
    };
