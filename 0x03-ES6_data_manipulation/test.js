#!/usr/bin/node

function extractAndJoin(set, searchString) {
    const result = Array.from(set)
      .filter(element => element.startsWith(searchString))  // Filter elements that start with searchString
      .map(element => element.substring(searchString.length))  // Extract the part after searchString
      .join('-');  // Join the parts with a dash
  
    return result;
  }
  
  // Example usage:
  const set = new Set(['apple', 'apricot', 'apex', 'avocado']);
  const searchString = 'ap';
  
  const result = extractAndJoin(set, searchString);
  console.log(result); // Output: "ple-ricot-ex-ocad
