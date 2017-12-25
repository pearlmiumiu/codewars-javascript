x Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.







function findShort(s){
 s=s.split(' ')
 var shortest=Number.MAX_VALUE ;
 for (var i=0;i<s.length; i++){
   if (s[i].length<shortest){
     shortest=s[i].length
   }
 }
 return shortest
}


function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}
// return Math.min(...s.split(" ").map(s=>s.length))


const findShort = (s) => s
  .split(' ')
  .sort((a, b) => b.length - a.length)  //sort by descending order
  .pop()
  .length;