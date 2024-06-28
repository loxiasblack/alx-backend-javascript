#!/usr/bin/node

function doSomething() {
    console.log(bar); // undefined
    var bar = 111;
    console.log(bar); // 111
  }

doSomething();
