for (let i = 1; i < 101; i++) {
    if (i % 3 === 0) {
        if (i % 5 === 0) {
            console.log('FizzBuzz');
        } else {
            console.log('Fizz');
        }
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

for (let n = 1; n <= 100; n++) {
    let output = '';
    if (n % 3 === 0) output += 'Fizz';
    if (n % 5 === 0) output += 'Buzz';
    console.log(output || n);
}
