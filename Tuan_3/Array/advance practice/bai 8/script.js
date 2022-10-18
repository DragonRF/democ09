let arr = [1, -12, 14, -8, -9, 32, -7, 4, 15, 5];
document.write(arr + "<br>");
let myReverseArray = arr.sort(function(a,b){return b-a});
document.write("Sắp xếp mảng theo thứ tự giảm dần: " + myReverseArray);
