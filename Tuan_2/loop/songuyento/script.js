 let input = +prompt("Nhập số nguyên tố cần in:")
    let a = 0;
    let count = 0;
    for (let i = 1; ; i++) {
    count = 0;
    for (let j = 1; j <= i; j++) {
    if (i % j === 0) {
    count++;
}
}
    if (count === 2) {
    document.write(i + "<br>" + "<br>");
    a++;
}
    if (input === a) break;
}
