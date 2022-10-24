class Rectangle {
    width;
    height;
    constructor (width, height) {
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    setWidth(width) {
        this.width = width;
    }
    getArea() {
        return this.width * this.height;
    }
}
let myRectangle = new Rectangle(300,200);
let width = myRectangle.getWidth();
let height = myRectangle.getHeight();

myRectangle.setWidth(200);
myRectangle.getWidth();

document.write(myRectangle.getWidth());


let canvas = document.getElementById("DemoCanvas");
let ctx = canvas.getContext('2d');
ctx.fillStyle='#fa4bbb';
ctx.fillRect(10, 10, width, height);
