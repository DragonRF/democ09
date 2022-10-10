nhapA = prompt("Nhập vào giá trị a:");
nhapB = prompt("Nhập vào giá trị b:");
let a = parseInt(nhapA);
let b = parseInt(nhapB);
let result = a % b;
if (result === 0){
    alert("a là bội số của b.")
} else {
    alert("a không phải là bội số của b.")
}
console.log(result);