// Expected Result = 55
// Direction : Return sum of array
const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var total = 0

function result(input) {
  
  for (i = 0; i < input.length; i++){
    total = total +  input[i];
   }
   return total;
}

console.log(result(input));