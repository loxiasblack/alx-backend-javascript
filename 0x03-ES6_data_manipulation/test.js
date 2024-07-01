#!/usr/bin/node

const array = [ 1, 2, 2, 3, 3 ]
function sumOfArray(sum, num) {
    return sum + num;
}

function mygeeks(item) {
    console.log(array.reduce(sumOfArray));
}

mygeeks();
