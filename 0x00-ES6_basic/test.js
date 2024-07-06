#!/usr/bin/node

function doSomething() {
    var bar = 10;
    var bar = 111;
    console.log(bar); // 111\
    var bar;
    console.log(bar);
  }

doSomething();
