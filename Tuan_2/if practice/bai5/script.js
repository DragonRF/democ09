let diemkiemtra = +prompt("Nhập vào điểm kiểm tra:");
let diemthigiua = +prompt("Nhập vào điểm thi giữa kì:");
let diemthicuoi = +prompt("Nhập vào điểm thi cuối kì:");
let diemtongket = (diemkiemtra + diemthigiua + diemthicuoi) / 3;
if (diemtongket >= 9 && diemtongket <= 10){
    alert(diemtongket + " Bạn đạt học lực Xuất sắc!")
} else if (diemtongket >=8 && diemtongket < 9){
    alert(diemtongket + " Bạn đạt học lực Giỏi!")
} else if (diemtongket >=6.5 && diemtongket < 8){
    alert(diemtongket + " Bạn đạt học lực Khá!")
} else if (diemtongket >=5 && diemtongket < 6.4){
    alert(diemtongket + " Bạn đạt học lực Trung bình!")
} else if (diemtongket >=0 && diemtongket < 4.9){
    alert(diemtongket + " Rất tiếc, bạn đã trượt.")
} else {
    alert("Vui lòng nhập lại điểm.")
}