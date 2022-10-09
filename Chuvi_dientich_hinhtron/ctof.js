bankinh = prompt("Nhập bán kính hình tròn");
let radius = parseInt(bankinh);
let chuvi = (radius * 2) * 3.14;
let dientich = ((chuvi * 2) / 4) * 3.14;
document.write("Chu vi hình tròn là: " + chuvi);
document.write("<br/>");
document.write("Diện tích hình tròn là: " + dientich);