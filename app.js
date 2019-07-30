const randomValue = (min, max) => Math.floor(Math.random() * (max - min));
const max = 601;


class Shape {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.top = randomValue(this.height, max);
        this.left = randomValue(this.width, max);
        this.div = $('<div class="shape"></div>');
        this.randomPosition();
        $('.shape-container').append(this.div);
        this.div.css({
            height: this.height,
            width: this.width
        });
        this.div.click(() => {
            this.describe();
        }) 
        this.div.dblclick(() => this.div.remove());
    }

    describe() {
        $(`#height-span`).text(this.height);
        $(`#width-span`).text(this.width);
        $(`#area-span`).text(this.height * this.width);
    }


    randomPosition() {
        this.x = randomValue(this.height);
        this.y = randomValue(this.width);
        this.div.css({
            height: this.height,
            width: this.width,
            top: this.x,
            left: this.y
        })
    }
}

class Circle extends Shape {
    constructor(side) {
        super(side, side);
        this.div.addClass('circle');
        this.div.click(() => this.describeCircle());
    }
    describeCircle() {
        $(`#area-span`).text(Math.PI * (this.height / 2 * this.width / 2));
        $(`#radius-span`).text(this.height / 2);
    }
}

class Triangle extends Shape {
    constructor(side) {
        super(side, side);
        this.div.addClass('triangle');
        this.div.css({
            height: 0,
            width: 0,
            borderLeft: `${side}px solid transparent`,
            borderBottom: `${side}px solid yellow`
        })
        this.div.click(() => this.describeTriangle());
    }

    describeTriangle() {
        $(`#area-span`).text(0.5 * this.height * this.width);
    }
}

class Rectangle extends Shape {
    constructor(height, width) {
        super(height, width);
        this.div.addClass('rectangle');
    }
}

class Sqaure extends Shape {
    constructor(side) {
        super(side, side);
        this.div.addClass('sqaure');
    }
}

$('#rectangle-btn').click(() => {
    event.preventDefault();
    let height = $('#rec-height').val();
    let width = $('#rec-width').val();
    new Rectangle(height, width);
})


$('#sqaure-btn').click(() => {
    event.preventDefault();
    let side = $('#sqaure-side').val();
    new Sqaure(side, side);
})

$('#circle-btn').click(() => {
    event.preventDefault();
    let side = $('#circle-radius').val();
    new Circle(side, side);
})

$('#isoceles-btn').click(() => {
    event.preventDefault();
    let side = $('#triangle-height').val();
    new Triangle(side, side);
})