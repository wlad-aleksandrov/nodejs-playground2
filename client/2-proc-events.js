process.stdin.resume();
process.stdin.setEncoding("utf-8");

process.stdin.on("data", function (chunk) {
    process.stdout.write("Data! -> " + chunk);
});

process.stdin.on("end", function () {
    process.stderr.write("End!\n");
});

process.on("SIGTERM", function () {
   process.stderr.write("Terminating!"); 
});

console.log("Node is running as process #"+process.pid);