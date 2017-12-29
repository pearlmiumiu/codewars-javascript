
A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits.

For example, take 153 (3 digits):

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1634 (4 digits):

    1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634




function narcissistic( value ) {
  
  var val=value.toString().split('')
  
  var n=val.length
  
  var result=val.map(el=>Math.pow(el,n)).reduce((a,b)=>a+b)
  if (result===value) return true
  else return false
}




function narcissistic( value ) {
  return ('' + value).split('').reduce(function(p, c){
    return p + Math.pow(c, ('' + value).length)
    }, 0) == value;
}