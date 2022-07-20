const inquirer = require('inquirer');
const { writeFile, copyFile } = require('../utils/generateHTML');
const generatePage = require('../src/page-template');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

function BuildTeam() {
  this.manager = [];
  this.engineer = [];
  this.intern = [];
  this.team = [];

  BuildTeam.prototype.initBuild = () => {
    inquirer
      .prompt([
        {
          // Get team manger's info
          type: 'text',
          name: 'managerName',
          message: 'Who is the team manager? (required)',
          validate: function (value) {
            if (value) {
              return true;
            }
            return 'Please enter a name';
          }
        },
        {
          type: 'number',
          name: 'employeeId',
          message: 'Enter your employee ID. (required)',
          validate: function (value) {
            if (value) {
              return true;
            }
            return 'Please enter your employee ID';
          }
        },
        {
          type: 'string',
          name: 'email',
          message: 'Enter your email. (required)',
          validate: function (value) {
            if (value) {
              return true;
            }
            return 'Please enter your email';
          }
        },
        {
          type: 'number',
          name: 'officeNumber',
          message: 'Enter your office number. (required)',
          validate: function (value) {
            if (value) {
              return true;
            }
            return 'Please enter your office number';
          }
        }
      ])
      .then(manager => {
        this.manager.push(
          new Manager(
            manager.managerName,
            manager.employeeId,
            manager.email,
            manager.officeNumber
          )
        );
        this.addTeamMember();
      });
  };

  BuildTeam.prototype.getEngineer = () => {
    inquirer
      .prompt([
        {
          // Get team engineer's info
          type: 'text',
          name: 'engineerName',
          message: 'Engineer name (required)',
          validate: function (value) {
            if (value) {
              return true;
            }
            return 'Please enter a name';
          }
        },
        {
          type: 'number',
          name: 'employeeId',
          message: 'Enter employee ID. (required)',
          validate: function (value) {
            if (value) {
              return true;
            }
            return 'Please enter employee ID';
          }
        },
        {
          type: 'string',
          name: 'email',
          message: 'Enter email. (required)',
          validate: function (value) {
            if (value) {
              return true;
            }
            return 'Please enter email';
          }
        },
        {
          type: 'string',
          name: 'github',
          message: 'Enter github username. (required)',
          validate: function (value) {
            if (value) {
              return true;
            }
            return 'Please enter github username';
          }
        }
      ])
      .then(engineer => {
        this.engineer.push(
          new Engineer(
            engineer.engineerName,
            engineer.employeeId,
            engineer.email,
            engineer.github
          )
        );
        this.addTeamMember();
      });
  };

  BuildTeam.prototype.getIntern = () => {
    inquirer
      .prompt([
        {
          // Get team intern's info
          type: 'text',
          name: 'internName',
          message: 'Intern name (required)',
          validate: function (value) {
            if (value) {
              return true;
            }
            return 'Please enter a name';
          }
        },
        {
          type: 'number',
          name: 'employeeId',
          message: 'Enter employee ID. (required)',
          validate: function (value) {
            if (value) {
              return true;
            }
            return 'Please enter employee ID';
          }
        },
        {
          type: 'string',
          name: 'email',
          message: 'Enter email. (required)',
          validate: function (value) {
            if (value) {
              return true;
            }
            return 'Please enter email';
          }
        },
        {
          type: 'string',
          name: 'school',
          message: 'Enter school name. (required)',
          validate: function (value) {
            if (value) {
              return true;
            }
            return 'Please enter school name';
          }
        }
      ])
      .then(intern => {
        this.intern.push(
          new Intern(
            intern.internName,
            intern.employeeId,
            intern.email,
            intern.school
          )
        );
        this.addTeamMember();
      });
  };

  BuildTeam.prototype.addTeamMember = () => {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'teamMember',
          message: 'What type of team member would you like to add?',
          choices: [
            'Engineer',
            'Intern',
            "I don't want to add any more team members"
          ]
        }
      ])
      .then(answers => {
        if (answers.teamMember === 'Engineer') {
          this.getEngineer();
        } else if (answers.teamMember === 'Intern') {
          this.getIntern();
        } else {
          console.log('No more team members to add.');
          this.team = [...this.manager, ...this.engineer, ...this.intern];
          writeFile(generatePage(this.team)).then(writeFileResponse => {
            console.log(writeFileResponse);
          });
        }
      });
  };
}

module.exports = BuildTeam;
