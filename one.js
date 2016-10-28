var count = 2;

var doIt = function(i, callback){
    callback(null, i);
}

module.exports.doIt = doIt;
module.exports.foo = 'bar';