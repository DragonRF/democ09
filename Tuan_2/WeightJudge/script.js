let height = prompt("Nhập chiều cao của bạn(m - meters): ");
let weight = prompt("Nhập cân nặng của bạn(kg - kilograms): ");
let bmiRate = weight / (height ** 2);
if (bmiRate < 18) {
    alert(bmiRate + " : Bạn bị thiếu cân.");
    document.write("Underweight.");
} else if (bmiRate >= 18 && bmiRate < 25) {
    alert(bmiRate + " : Cân nặng của bạn khá cân đối.")
    document.write("Normal.");
} else if (bmiRate >= 25 && bmiRate < 30) {
    alert(bmiRate + " : Bạn hơi thừa cân.")
    document.write("Overweight.");
} else {
    alert(bmiRate + " : Bạn bị béo phì.")
    document.write("Obese.");
}
