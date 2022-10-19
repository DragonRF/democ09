let mang = [];
let n = +prompt("Nhập số phần tử của mảng") //Nhập số phần tử n vào mảng
let tong = 0;
let chia5du2 = 0
for (let i = 0; i < n; i++){
    mang[i] = +prompt("Nhập giá trị của phần tử " + i);
    document.write(mang[i]+"<br>");
    tong += mang[i];
}
document.write("Tổng các phần tử là: " + tong + "<br>"); // Hiển thị tổng các phần tử

for (let i = 0; i < n; i++) {
    if (mang[i] % 5 === 2)
        chia5du2 += mang[i];

}
document.write("Tổng các phần tử chia 5 dư 2 là: " + chia5du2 + "<br>") // Hiển thị tổng các phần tử chia 5 dư 2

let k = 0
for (let i = 0; i < n; i++) {
    if (mang[i] % 6 === 0) k++;
}
document.write('Số phần tử chia hết cho 6: ' + k + '<br>'); // Hiển thị các phần tử chia hết cho 6

let tbcc4d3 = 0;
let tongtbc = 0;
for (let i = 0; i < n; i++) {
    if (mang[i] > 10 && mang[i] % 4 === 3) {
        tongtbc += mang[i];
        tbcc4d3 = tongtbc / i;
    }
}
document.write("TBC các số lớn hơn 10 và chia 4 dư 3 là " + tbcc4d3 + "<br>")