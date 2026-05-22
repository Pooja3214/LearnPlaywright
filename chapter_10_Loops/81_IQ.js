for (let i = 0; i < 3; i++) {
    if (i === 1) continue;
    console.log(i);
}

//output: 0 2, because when i is 1 it will skip the console.log and continue with the next iteration.