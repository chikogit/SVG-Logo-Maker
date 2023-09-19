const { Circle, Triangle, Square } = require("./Lib/shapes.js");

describe("Circle Test", () => {
    test("Test for a circle with a Red background", () => {
        const shape = new Circle();
        shape.setColor("Red");
        expect(shape.render()).toEqual(
            `<circle cx="150" cy="115" r="80" fill="Red"/>`
        );
    });
});

describe("Triangle Test", () => {
    test("Test for a triangle with a Green background", () => {
        const shape = new Triangle();
        shape.setColor("Green");
        expect(shape.render()).toEqual(
            `<polygon points="150, 18 244, 182 56, 182" fill="Green"/>`
        );
    });
});

describe("Square Test", () => {
    test("Test for a square with a Pink background", () => {
        const shape = new Square();
        shape.setColor("Pink");
        expect(shape.render()).toEqual(
            `<rect x="73" y="40" width="160" height="160" fill="Pink"/>`
        );
    });
});