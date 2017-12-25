A square of squares

You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task

Given an integral number, determine if it's a square number.

//solution 1
var isSquare = function(n){
  
    if (Math.pow(parseInt(Math.sqrt(n)),2)===n) return true
    else return false
}


//solution 2
function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;  //if Math.sqrt(n)%1===0, means the sqrt is an integer
}

const isSquare = n => Number.isInteger(Math.sqrt(n));