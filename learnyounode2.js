var sum = 0;
// process.argv[0] = 'node'
// process.argv[1] = '/path/to/your/program.js'
// need to start i at 2.
for (i = 2; i < process.argv.length; i++) {
    // process.argv[i] is a string, cast it to a Number()
    sum += Number(process.argv[i]);
}

console.log(sum);