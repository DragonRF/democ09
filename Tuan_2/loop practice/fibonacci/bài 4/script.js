const number = parseInt(prompt('Enter the number of terms: ')); // Nhập số >=6 để hiển thị kết quả
let n1 = 0, n2 = 1, nextTerm;

for (nextTerm = 0 ; nextTerm < number - 1; nextTerm++) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    if (n2 % 5 === 0) {
        document.write(n2 + " là số chia hết cho 5")
    }
}