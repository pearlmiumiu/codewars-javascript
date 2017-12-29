Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples

Valid arrays

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]



function comp(array1, array2) {
  if(array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
  return array1.map(v => v * v).every((v, i) => v == array2[i]);
}



function arraysEqual(arr1, arr2) {

    if(arr1.length !== arr2.length)
        return false;
    for(var i =0; i<arr1.length; i++) {
        if(arr1[i] !== arr2[i])
            return false;
    }

    return true;
}
function comp(array1, array2){
  //your code here
  if (array1 === null || array2 === null) return false
  
  var arr1=array1.sort(function(a, b) {
    return a - b;
  })
  var arr2=array2.sort(function(a, b) {
    return a - b;
  })
  var res=arr1.map(el=>Math.pow(el,2))
   
  return arraysEqual(res, arr2)

}