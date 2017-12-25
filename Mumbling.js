This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd");    // "A-Bb-Ccc-Dddd"
accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt");    // "C-Ww-Aaa-Tttt"


function accum(s) {
  // your code
  let newStr=s.toUpperCase().split('')
  let res=[]
  for (var i=0; i<newStr.length; i++){
    res.push(newStr[i]+newStr[i].toLowerCase().repeat(i))
  }
  return res.join('-')
}


function accum(s) {
  // your code
  newStr=s.toUpperCase().split('')
 
  let res=newStr[0]
  for (var i=1; i<newStr.length; i++){
     res+=('-'+newStr[i]+newStr[i].toLowerCase().repeat(i))
  }
  
  return res
  
}


function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}