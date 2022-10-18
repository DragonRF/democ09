let numbers = [1, 5, 1, 3, 2, 10, 12, 9, 5 ,40];
let max = numbers[0];
let index = 0;
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
        index = i;
    }
}
alert(`max: ${max} at position ${index}`);