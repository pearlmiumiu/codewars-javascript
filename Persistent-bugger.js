Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example:

 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

 persistence(4) === 0 // because 4 is already a one-digit number


function persistence(num) {
   //code me
   let time=0;
   while (num>=10){
     time+=1
     num=num.toString().split('').reduce((a,b)=>a*b) //each element in num was string, but for reduce, it convert to integer
                                 //a is the accumulator, if not assigned, it will be the first elment of array
                                 //b is initial value, in here it refers to the second element of array
   }
   return time
}


function multipleOnce(num){
  num=num.toString().split('')
  //console.log(num)
  return num.reduce((a,b)=>a*b)
  //console.log(num)
//   let sum=1
//   for (var i=0; i<num.length;i++){
//     sum*=num[i]
//   }
//   return sum
}


function persistence(num) {
   //code me
   let count=0;
   var res;
   while (num>=10){
      res=multipleOnce(num)
      num=res
      
      count+=1
    }
   return count
   
   
}