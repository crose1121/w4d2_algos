// addToFront(arr, value)
// add a given value to the front of the array and return that array
// the arguments [1, 2, 3] and 4 result in the array [4, 1, 2, 3]

function addToFront(arr, value) {
    temp = [value];
    for (var i=0;i<arr.length;i++) {
        temp.push(arr[i]);
    }
    return temp;
}

console.log(addToFront([1,2,3], 4));

function addToFront(arr, value) {
    for (var i=arr.length;i>0;i--) {
        arr[i] = arr[i-1];
    }
    arr[0] = value;
    return arr;
}

console.log(addToFront([1,2,3], 4));



// removeFront(arr)
// remove the value from the front of the array and return that array
// [7, 1, 4, 9] as the argument should result in an output of [1, 4, 9]

function removeFront(arr) {
    temp = [];
    for (var i=1;i<arr.length;i++) {
        temp.push(arr[i]);
    }
    return temp;
}

console.log(removeFront([7,1,4,9]));