let num;
for (num = 1; num <= 100; num++) { // 99 vẫn đúng
    if (num % 3 === 0 && num % 5 !== 0) {
        document.write("Fizz" + "<br>");
        continue;
    } else if (num % 5 === 0 && num % 3 !== 0) {
        document.write("Buzz" + "<br>");
        continue;
    } else if (num % 3 === 0 && num % 5 === 0) {
        document.write("FizzBuzz" + "<br>");
        continue;
    }
    document.write (num + "<br>");
}