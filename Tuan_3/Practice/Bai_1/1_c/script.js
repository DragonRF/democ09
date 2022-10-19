let a = +prompt("Nhập vào a: ");
let b = +prompt("Nhập vào b: ");
let tong = 0;
for (let i = a;i <= b; i++) {
    tong += i;
}
document.getElementById("tong").innerHTML = "Tổng số từ a đến b: " + tong;