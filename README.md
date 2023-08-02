# SVG Logo Maker
This is a simple Node.js application developed as part of my coding bootcamp project. With this Logo maker, you can create custom SVG logos using different shapes like Triangles, Squares, and Circles. You have the freedom to choose your logo's text, text color, shape color, and background color.

[visit the tutorial video](https://drive.google.com/file/d/1hA6A869OfGlSJAMNAcUuwMnuTo-EpAxW/view)

## Getting Started
* Prerequisites
To run this logo maker, you'll need to have Node.js and npm (Node Package Manager) installed on your machine. You can download and install them from the official website: https://nodejs.org/

## Installation
1.	Clone this repository to your local machine using Git:
git clone https://github.com/ssherp/SVG-Logo-Maker.git 
2.	Navigate to the project directory
3.	Install the required dependencies using npm:
npm install 

## Usage
1.	Run SVG application:
node logo-maker.js 
2.	The application will prompt you to enter text for your logo (up to 3 characters), choose a color for the text, a color for the background, and finally, select the shape for your logo (Triangle, Square, or Circle).
3.	After you provide all the necessary inputs, Logo Maker will generate an SVG logo based on your choices and save it as logo.svg in the examples folder.
  
## Dependencies
SVG relies on the following npm packages:
•	inquirer: For user input prompts and capturing responses.
•	fs: For writing the generated SVG logo to a file.

## Contributing
If you'd like to contribute to Logo Maker, feel free to fork this repository, make your changes, and submit a pull request. I welcome any improvements, bug fixes, or additional features that you can bring to this project.

## Challenge learning
Working on the Logo Maker project during my coding bootcamp was a fantastic learning experience. Here are some key takeaways:
1.	Application Structure: I learned how to structure a Node.js application with separate modules and classes. The use of require and module.exports allowed me to organize the code more effectively.
2.	Object-Oriented Programming: Implementing the Shape, Triangle, Circle, and Square classes helped me understand object-oriented principles and inheritance. It was fascinating to see how we can extend functionality and create specialized shapes from a base class.
3.	Inquirer Package: I got hands-on experience with the inquirer package, which made it easy to create interactive command-line applications. It was impressive to see how quickly I could gather user input and use it to generate unique logos.
4.	SVG Rendering: Generating SVG markup for different shapes was a valuable skill. I learned about the structure of SVG elements and how to dynamically insert user-specified data into the SVG template.
5.	Test-Driven Development: Writing test cases for the Shape classes using Jest helped me ensure the correctness of my code. It made debugging easier and boosted my confidence in the application's functionality.

Overall, SVG project challenged me to apply my programming skills, think critically, and learn new technologies. It gave me a sense of accomplishment to build a functional application from scratch and showcase my creativity through various logos. I look forward to utilizing the knowledge and experience gained from this challenge in future projects and assignments during my coding journey.

## Questions

* GitHub: https://github.com/ssherp/Note-Taker
* Email: ssherpa89@gmail.com