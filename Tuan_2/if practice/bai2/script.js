let tuoi = +prompt("Nhập vào tuổi của bạn: ");
if (tuoi >= 15 && tuoi < 20) {
    document.write("Bạn đủ điều kiện để vào học lớp 10.")
} else if (tuoi < 15) {
    document.write("Bạn không đủ điều kiện để vào học lớp 10.")
} else {
    document.write("Bạn lớn rồi, đi học làm gì nữa? Tìm việc đi!")
}