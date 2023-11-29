function recursiva(max) {
    if (max >= 100000000) return;
    max++;
    console.log(max);
    recursiva(max);
}

recursiva(-3);