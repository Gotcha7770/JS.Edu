let line = '';
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        line += (i + j) % 2 === 0 ? '#' : ' ';
    }

    line += '\n';
}

console.log(line);
