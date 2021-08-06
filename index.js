const rectangle = require('./rectangle');
var rect = require('./rectangle');

function solveReact(l,b) {
    console.log("solving rectangle area and perimeter");

    rect(l,b, (err,rectangle) => {
        if(err) {
            console.log("ERROR:", err.message);
        }
        else{
            console.log("The Area of the Rectangle is : " + rectangle.area());
            console.log("The Perimeter of the Rectangle is : " + rectangle.perimeter());
        }
    });
    console.log("This statement is after the call to rect()");
}

solveReact(2,4);
solveReact(3,5);
solveReact(0,5);
solveReact(5,0);