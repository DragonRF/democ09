let nam = +prompt("Nhập vào năm:");
theky = Math.ceil(nam / 100);
document.getElementById("theky").innerHTML = "Năm " + nam + " thuộc thế kỷ " + theky;