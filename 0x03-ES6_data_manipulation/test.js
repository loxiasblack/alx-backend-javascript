#!/usr/bin/node

const array = [1, 2, 3, 4, 5];
const newSet = new Set(array);
const elementTocheck = [2, 3, 7, 100];

const checkResults = elementTocheck.map(element => newSet.has(element));
const allElement = checkResults.every(result => result);

console.log(allElement)


