function run() {

    let str = document.getElementById("txt").value
    let num = ['1','2','3','4','5','6','7','8','9','0']
    let arr = [];
    let flag =0;
    for (let i = 0; i < str.length; i++) {
        arr[i] = str[i];
        for (let j=0;j<10;j++){
            if(num[j] === arr[i]) flag++;
        }
    }
    document.getElementById("array").innerHTML =  arr + '';
    document.getElementById("doc").innerHTML = 'Kích thước mảng: '+ arr.length + '';
    document.getElementById("result").innerHTML ='Số phần tử số trong mảng: ' + flag + '';
}