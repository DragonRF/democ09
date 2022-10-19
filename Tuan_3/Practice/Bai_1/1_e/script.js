let a = +prompt("Nhập vào cạnh a:");
let b = +prompt("Nhập vào cạnh b:");
let c = +prompt("Nhập vào cạnh c:");

if (a === b && a === c) {
    document.getElementById("tamgiac").innerHTML = "Đây là tam giác đều";
} else if (a === b && a !== c) {
    document.getElementById("tamgiac").innerHTML = "Đây là tam giác cân";
} else if (c**2 === (a**2 + b**2) || b**2 === (a**2 + c**2) || a**2 === (c**2 + b**2)) {
    document.getElementById("tamgiac").innerHTML = "Đây là tam giác vuông";
} else {
    document.getElementById("tamgiac").innerHTML = "Đây là tam giác thường";
}