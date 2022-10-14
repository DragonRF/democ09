const number = parseInt(prompt('Enter the number of terms: ')); //Nhập vào 20 số cần in ra màn hình
let n1 = 0, n2 = 1, nextTerm, tongF = 1;

document.write('Fibonacci Series: ');

for (let i = 1; i <= number; i++) {
    document.write(n1 + "<br>");
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    tongF = tongF + nextTerm;
}  document.write('Tổng các số vừa hiện lên màn hinh là: ' + tongF)
