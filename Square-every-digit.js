

In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out.

Note: The function accepts an integer and returns an integer




function squareDigits(num){
  //may the code be with you
  let res=''
  res=num.toString().split('').map(c=>c*c)
  
  //console.log(res)
  return parseInt(res.join(''))
  //console.log(res.split(''))
  
}