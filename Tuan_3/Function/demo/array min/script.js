function minArray(arr) {
    let min = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}
let arr1 = [3, 5, 1, 8, -3, 7, 8];
let min = minArray(arr1);
alert("Arr1 min = " + min);

let arr2 = [7, 12, 6, 9, 20, 56, 89];
let min2 = minArray(arr2);
alert("Arr2 min = " + min2);