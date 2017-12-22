Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldWay !

//solution1
function pigIt(str){
	return str.split('').map(el=> el.slice(1)+el.slice(0,1)+'ay').join('');
	//return str.split(' ').map(el=>el.substr(1) + el.charAt(0) + 'ay').join(' ');
}

//solution 2
function pigIt(str){
  var words = str.split(" ");
  for (w in words) {
    words[w] = words[w].slice(1) + words[w].slice(0,1) + "ay"
  }
  return words.join(" ");
}