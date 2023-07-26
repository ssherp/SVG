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
    
const questions=[
    {
      type: 'input',
      name: 'text',
      message: 'enter text for your logo no more then 3 characters',
      validate: function (input) { 
        if (input.length > 3){
          console.log(`your input ${input} doesn't meet the requirements, try again`)
          return false;
        }else{
          return true;
        }
        }
      },
    {
      type: 'input',
       name: 'textColor',
        message: 'Choose a color for text',
    },
    {
      type: 'input',
       name: 'bgColor',
        message: 'Choose a background color',
    },
    {
      type: 'list',
      message: 'choose your shape',
      name: 'shape',
      choices: ['Triangle', 'Square', 'Circle'],
    },
  ]
  function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
    //create the svg file
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
      const logo=renderLogo(data)
      writeToFile("./examples/logo.svg",logo.render())   
    }).catch((error) => {
        console.log(error);
    });
}

function renderLogo({text,textColor,bgColor,shape}){
  let logo = ""
  switch (shape) {
    case "Circle":
      logo = new Circle(text,textColor,bgColor)      
      break;
    case "Square":
      logo = new Square(text,textColor,bgColor)
      break;
    case "Triangle":
      logo = new Triangle(text,textColor,bgColor)
      break;
  } 
  return logo
}

// Function call to initialize app
init();


