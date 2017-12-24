
Once upon a time, on a way through the old wild west,…

… a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too. Going to one direction and coming back the opposite direction is a needless effort. Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

How I crossed the desert the smart way.

The directions given to the man are, for example, the following:

["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
or

{ "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
or (haskell)

[North, South, South, East, West, North, West]
You can immediatly see that going "NORTH" and then "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

["WEST"]
or

{ "WEST" }
or (haskell)

[West]
or (rust)

[WEST];

//another method for opposite function
function opposite(d1, d2){
  let dic={'NORTH':'SOUTH', 'WEST':'EAST', 'SOUTH':'NORTH', 'EAST':'WEST'}
  //if (dic[d1]===d2) return true
  return dic[d1]===d2
}



function opposite(d1, d2){
  if(d1==='NORTH' && d2==='SOUTH'){
    return true
  }else if (d1==='EAST' && d2==='WEST'){
    return true
  }else if (d1==='SOUTH' && d2==='NORTH'){
    return true
  }else if (d1==='WEST' && d2==='EAST'){
    return true
  }else{
    return false
  }
}

function dirReduc(arr){
  // ...
  stack=[]
  for (var i=0;i<arr.length; i++){
    if (stack.length===0){
      stack.push(arr[i])
    }else {
      if (opposite(stack[stack.length-1], arr[i])){
        stack.pop()
      }else{
        stack.push(arr[i])
      }  
    }
  }
  return stack
}