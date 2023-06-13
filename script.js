//complete this code
class Rectangle {
	constructor(width,height){
		this.width = width
		this.height = height
	}
	getWidth(){
		return this.width
	}
	getHeight(){
		return this.height
	}
	getArea(){
		return this.width * this.height
	}
}
	let rec = new Rectangle(4,4)
console.log(rec.getArea())
class Square extends Rectangle {
	getPerimeter(){
		return 4*rec.width
	}
}
let squa = new Square()
console.log(squa.getPerimeter())

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
