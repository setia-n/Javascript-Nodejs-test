// Expected Result : [false, true]
// Direction :
// The first value : If all of arr2 has bigger value than the biggest value of arr1;
// The second value : If some of arr2 has smaller value than the smallest value of arr1;
const arr1 = [4, 6, 2, 3, 5];
const arr2 = [1, 3, 4, 7, 9, 10];

function result(arr1, arr2) {
  const [smallArray, bigArray] =
        arr1.length < arr2.length ? [arr1, arr2] : [arr2, arr1];

     for (let i = 0; i < smallArray.length; i++) {
       return bigArray.includes(smallArray[i]);
     }

      return false;
}

console.log(result(arr1, arr2));