var rect = require('./rectangle');

function solveRect (l, b) {
    console.log("solving rect with l = " + l + " and b = " + b);

    if (l <= 0 || b <= 0) {
        console.log("<= 0? seriously?");
    } else {
        console.log("Perimerter: " + rect.perimeter(l, b));
        console.log("Area: " + rect.area(l, b));
    }
    
    console.log();
}

solveRect(0, 1);
solveRect(1, -1);
solveRect(2, 4);
solveRect(10, 9);