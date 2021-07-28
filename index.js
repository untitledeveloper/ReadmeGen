const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generate_md = require("./utils/generate_md");
const write_file = util.promisify(fs.writeFile);

function user_input(){
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of repo? "
        },
        {
            type: "input",
            name: "description",
            message: "Brief description of repo: "
        },
        {
            type: "input",
            name: "installation",
            message: "Relevant installation process "
        },
        {
            type: "input",
            name: "usage",
            message: "Usage of repo?"
        },
        {
            type: "list",
            name: "license",
            message: "The appropriate license for this project: ",
            choices: [
                "Apache",
                "ISC",
                "MIT"
            ]
        },
        {
            type: "input",
            name: "credit",
            message: "Credit to contributing parties? "
        },
        {
            type: "input",
            name: "tests",
            message: "Any included tests? "
        },
        {
            type: "input",
            name: "questions",
            message: "Frequently asked questions: "
        },
        {
            type: "input",
            name: "github",
            message: "Github username: "
        },
        {
            type: "input",
            name: "email",
            message: "Email: "
        }
    ]);
} 

  async function init() {
    try {
   
        const answers = await user_input();
        const generate_content = generate_md(answers);

        await write_file('./output/README.md', generate_content);
        console.log('README.md generated');
        
    }   catch(err) {
        console.log(err);
    }
  }
  
  init();  