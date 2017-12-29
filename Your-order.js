Your task is to sort a given string. Each word in the String will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input String is empty, return an empty String. The words in the input String will only contain valid consecutive numbers.

For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"

your_order("is2 Thi1s T4est 3a")
[1] "Thi1s is2 3a T4est"


function findPos(word){
  for (var i=0; i<word.length; i++){
   if( '123456789'.indexOf(word[i])!==-1){
     return word[i]
    }
  }
}

function order(words){

  //if (words.length===0) return ''
//   words=words.split(' ')
//   words.sort(function(a, b) {
//     return findPos(a) - findPos(b)
//   })
//   return words.join(' ')
  return words.split(' ').sort((a, b) => findPos(a) - findPos(b))
              .join(' ')
}


//solution 2
function order(words){
  var array = words.split(' ');
  var sortedArray = [];
  for(i = 0; i <= array.length; i++) {
    for(j = 0; j < array.length; j++) {
      if(array[j].indexOf(i) >= 0) {
        sortedArray.push(array[j]);
      }
    }
  }
  return sortedArray.join(' ');
}