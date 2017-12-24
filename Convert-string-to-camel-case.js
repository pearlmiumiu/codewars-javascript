Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

Examples:

// returns "theStealthWarrior"
toCamelCase("the-stealth-warrior") 

// returns "TheStealthWarrior"
toCamelCase("The_Stealth_Warrior")


function toCamelCase(str){
if (str.length===0) return ''
  newStr=str.split(/[-_]/)
  
  res=newStr[0]
  for (var i=1; i<newStr.length; i++){
    res+=newStr[i][0].toUpperCase()+newStr[i].slice(1)
  }
  return res

}