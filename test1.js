// Expected Result = 55
// Direction : Return sum of array
const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(input) {
	var sum = 0;
	input.forEach(function(input){
		sum += input;
	})
	return sum;
};

console.log(result(input));