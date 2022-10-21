let arr = [];
function display() {
    let str = `<tr>
               <td>Product name</td>
               <td></td>
               <td>${arr.length} products</td>
               </tr>`
    for (let i = 0; i<arr.length; i++) {
        str += `<tr>
                <td id="${i}">${arr[i]}</td>
                <td><button onclick="Edit(${i})">Edit</button></td>
                <td><button onclick="Delete(${i})">Delete</button></td>
                </tr>`
    }
    document.getElementById('displayarea').innerHTML = str;
}

function Add() {
    let productName = document.getElementById('txt').value;
    // document.getElementById('txt').value = '';
    arr.push(productName);
    display();
}

function Edit(index) {
    arr[index] = prompt('Enter product that need to fix');
    document.getElementById(`${index}`).innerHTML = arr[index];
    display();

}

function Delete(index) {
    arr.splice(index, 1);
    display();
}