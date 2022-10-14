let x = 1;
let y = 0;
for (let i = 1;;i++) {  
    if (i % 7 ===0) {
        x += i;
        y++
    }
    if (y === 30){
        break;
    }
}
document.write("Tổng của 30 số đầu tiên chia hết cho 7 là: " + (x - 1));