//import packages:import shape.js
const shape=require('./lib/shapes')
const Triangle= shape.Triangle
const Circle= shape.Circle
const Square= shape.Square
const inquirer = require('inquirer');
const fs = require('fs');
//alternative:
//const {Triangle,Square,Circle}=request ('./lib/shapes')
//create an array prompt the users for shape, text, shape color and text color 
// create the SVG
    
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
      validate: function (input) { 
        return input.length >= 3
      }
    },
    {
      type: 'checkbox',
      message: 'What languages do you know?',
      name: 'stack',
      choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'contact',
      choices: ['email', 'phone', 'telekinesis'],
    },
  ])
  .then((data) => {
    console.log(data);
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
    //Farley Wittles 
    //farleywittles.json
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
    //2.9 write the file