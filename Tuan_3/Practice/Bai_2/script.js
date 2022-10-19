let mang = [];
let n = +prompt("Nhập số phần tử của mảng")
let tong = 0;
let chia5du2 = 0
for (let i = 0; i < n; i++){
    mang[i] = +prompt("Nhập giá trị của phần tử " + i);
    document.write(mang[i]+"<br>");
    tong += mang[i];
}
document.write("Tổng các phần tử là: " + tong+"<br>");

for (let i = 0; i < n; i++) {
    if (mang[i] % 5 === 2) {
        chia5du2 += mang[i];
    }
    document.write(mang[i] + "<br>")
}
document.write("Tổng các phần tử chia 5 dư 2 là: " + chia5du2)

