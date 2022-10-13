let a = +prompt("Nhập vào giá trị a:")
let b = +prompt("Nhập vào giá trị b:")
let c = +prompt("Nhập vào giá trị c:")
let d = [a,b,c]

if (a > b && a > c) {
    document.write(d + "\n" + "<br> " + a + " là số lớn nhất")
} else if (a < b && b > c) {
    document.write(d + "\n" + "<br> " + b + " là số lớn nhất")
} else {
    document.write(d + "\n" + "<br> " + c + " là số lớn nhất")
}


