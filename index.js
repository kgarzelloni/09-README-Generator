// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require("util");
const appendFile = util.promisify(fs.appendFile);
// TODO: Create an array of questions for user input
const questions =
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Provide a description of your project:",
    },
    {
      type: "input",
      name: "installation",
      message: "Provide installation instructions:",
    },
    {
      type: "list",
      name: "license",
      message: "Which license did you use?",
      choices: ["MPL_2.0", "MIT", "Apache_2.0", "none"],
    },
    {
      type: "input",
      name: "contributors",
      message: "Who contributed to this project?",
    },
    {
      type: "input",
      name: "email",
      message: "Your email address:",
    },
    {
      type: "input",
      name: "github",
      message: "Your GitHub username:",
    },
  ])
  .then(function (answers) {
    
    function init(answers) {
      let answersArray = [];
      let _title = generateMarkdown.projectTitle(answers.title);
      let _description = generateMarkdown.projectDescription(answers.description);
      let _installation = generateMarkdown.projectInstallation(answers.installation);
      let _license = generateMarkdown.projectLicense(answers.license);
      let _contributors = generateMarkdown.projectContributors(answers.contributors);
      let _email = generateMarkdown.projectEmail(answers.email);
      let _github = generateMarkdown.projectGithub(answers.github);
      answersArray.push(_title,_description,_installation,_license,_contributors,_email,_github);

      answersArray.forEach(function (item) {
        appendFile("README.md", item);
      });
    }
    init(answers);
  })
  .catch(function (error) {
    console.log(error);
  });


