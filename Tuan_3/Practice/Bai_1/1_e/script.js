let a = +prompt("Nhập vào cạnh a:");
let b = +prompt("Nhập vào cạnh b:");
let c = +prompt("Nhập vào cạnh c:");
tamgiacvuong = Math.sqrt((a**2) + (b**2));
if (a === b && a === c) {
    document.getElementById("tamgiac").innerHTML = "Đây là tam giác đều";
} else if (a === b && a !== c) {
    document.getElementById("tamgiac").innerHTML = "Đây là tam giác cân";
} else if (c === tamgiacvuong) {
    document.getElementById("tamgiac").innerHTML = "Đây là tam giác vuông";
} else {
    document.getElementById("tamgiac").innerHTML = "Đây là tam giác thường";
}