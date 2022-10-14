function ketqua() {
    let i = document.getElementById('vao').value;
    if (i > 100) {
        document.getElementById('kq').innerHTML = "Bạn nên hạ nhiệt độ xuống"
    } else if (i < 20 ) {
        document.getElementById('kq').innerHTML = "Bạn nên tăng nhiệt độ lên"
    }else {
        document.getElementById('kq').innerHTML = "OK. Ổn định rồi đó"
    }
}