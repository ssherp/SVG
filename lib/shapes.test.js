//all the test for SVG
const { Triangle, Square, Circle } = require('./shapes');
//test suit
//contains multiple test
//each shape needs a test -triangle, circle, square
describe('shapes', () => {


  describe('triangle', () => {
    it('should be a triangle with a blue background and SVG text in black', () => {

      const shape = new Triangle('SVG', 'black', 'blue');

      expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="blue" />
        
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">SVG</text></svg>`)
    })
  })
  describe('square', () => {
    it('should be a square with a blue background and SVG text in black', () => {

      const shape = new Square('SVG', 'black', 'blue');

      expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        
        <rect x="50" y="20" width="200" height="200" fill="blue" /><text x="150" y="125" font-size="80" text-anchor="middle" fill="black">SVG</text>
      </svg>`)
    })
  })
  describe('circle', () => {
    it('should be a circle with a blue background and SVG text in black', () => {


      const shape = new Circle('SVG', 'black', 'blue');

      expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="100" fill="blue" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">SVG</text>
      
      </svg>`)
    })
  })
}) 