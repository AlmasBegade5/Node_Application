var rect = require('./rectangle');

function solveReact(l,b) {
    console.log("solving rectangle area and perimeter");

    if(l<=0 || b<=0){
        console.log("length and breadth must be greater than 0");
    }
    else{
        console.log("Perimeter of rectangle is : " + rect.perimeter(l,b));
        console.log("Area of rectangle is : " + rect.area(l,b));
    }
}

solveReact(2,4);
solveReact(3,5);
solveReact(0,5);
solveReact(5,0);