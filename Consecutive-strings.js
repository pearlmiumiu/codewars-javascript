You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

#Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "".



function longestConsec(strarr, k) {
    var n = strarr.length
    //var maxlen = 0
    var ans = ''
    
    if (n === 0 || k > n || k <= 0) return ""
    for (var i=0; i <= n-k; i++) {
      var consec_str = ''
      for (var j = 0; j < k; j++) {
        consec_str += strarr[i+j]
      }
      
      if (consec_str.length > ans.length) {
        //maxlen = consec_str.length
        ans = consec_str
      }
    }
    return ans
}