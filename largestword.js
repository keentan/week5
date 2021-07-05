var sentence = "The quick brown fox jumped over the lazy dog";

function longestWord(sentence) {
  var sentenceArray = sentence.split(" ");
  var max = 0;
  for (var i = 0; i < sentenceArray.length; i++) {
    if (sentenceArray[i].length > max) {
      max = sentenceArray[i].length;
    }
  }
  return max;
}

console.log(longestWord(sentence));
