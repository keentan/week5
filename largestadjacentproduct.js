var array = [3,6,-2,-5,7,3]

function adjacentProduct() {
  var max = array[0]*array[1];
  for (var i = 0; i < array.length; i++) {
    if (array[i]*array[i+1] > max) {
      max = array[i]*array[i+1];
    }
  }
  return max;
}
console.log(adjacentProduct(array));
