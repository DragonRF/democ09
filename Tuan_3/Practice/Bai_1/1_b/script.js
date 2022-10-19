let a = +prompt("Nhập vào a: ");
let b = +prompt("Nhập vào b: ");

binhphuong = a**2;
luythua = a**b;
document.getElementById("binhphuong").innerHTML = "a^2: " + binhphuong;
document.getElementById("luythua").innerHTML = "a^b: " + luythua;