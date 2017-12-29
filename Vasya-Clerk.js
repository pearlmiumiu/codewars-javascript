The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?

Return YES, if Vasya can sell a ticket to each person and give the change with the bills he has at hand at that moment. Otherwise return NO.


//solution 1
function hasNoChange(balance, bill) {
  bill -= 25
  while (bill > 0) {
    if (balance[1] > 0 && bill >= 50) {
      bill-=50
      balance[1] -= 1
    } else if (balance[0] > 0 && bill >= 25) {
      bill-=25
      balance[0] -= 1
    } else {
      break
    }
  }
  return bill > 0
  

}

function tickets(res){
            // 25, 50, 100
   let balance=[0, 0, 0]
   //console.log(res)
   for (var i=0; i<res.length; i++){
     //console.log(balance, res[i])
     if (hasNoChange(balance, res[i])) return 'NO'
     if (res[i] === 25) {
       balance[0] += 1
     } else if (res[i] == 50) {
       balance[1] += 1
     } else {
       balance[2] += 1
     }
   }
   return 'YES'
}



/////////////////////////s
//solution 2

function tickets(peopleInLine){
  let b25=0;
  let b50=0;
  for (var i=0; i<peopleInLine.length;i++){
    switch(peopleInLine[i]){
      case 25: 
        b25+=1
        break
      case 50:
        b50+=1
        b25-=1
        break
      case 100:
        b50? b50-=1 : b25-=2
        b25-=1
        break
    
     }
    if (b25<0) return 'NO'
      
  }
  return 'YES'
}