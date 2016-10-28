var mathfun = require("./mathfun");
var evenDoubler = require("./mathfun").evenDoubler2;

var processResults = function(err, results, time){
  if (err) {
    console.log("ERROR: " + err.message);    
  } else {
      console.log("The resulta are: " + results + " (" + time + " ms)");
  }
};

for (var i = 0; i < 10; i++){
    console.log("Calling 'evenDoubler with parameter " + i + "'");
    evenDoubler(i, processResults);
}

console.log("------");

console.log("The 'foo' variable from module 'mathfun' = " + mathfun.foo);

console.log("The 'maxtime' variable is not exported: " + mathfun.maxTime);