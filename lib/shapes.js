//set up triangle 

class Shape{ 
    constructor(text,textColor,bgColor){
        this.text=text
        this.textColor=textColor
        this.bgColor=bgColor
    }
   render(){
    return ""
   }
}

class Triangle extends Shape{
    constructor(text,textColor,bgColor){
        super(text,textColor,bgColor)
    }
    render(){
        return`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${this.bgColor}" />
        
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

class Circle extends Shape{
    constructor(text,textColor,bgColor){
        super(text,textColor,bgColor)
    }
    render(){
        return`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="100" fill="${this.bgColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`
    }
}
class Square extends Shape{
    constructor(text,textColor,bgColor){
        super(text,textColor,bgColor)
    }
    render(){
        return`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        
        <rect x="50" y="20" width="200" height="200" fill="${this.bgColor}" /><text x="150" y="125" font-size="80" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`
    }
}
module.exports={Triangle, Circle, Square}