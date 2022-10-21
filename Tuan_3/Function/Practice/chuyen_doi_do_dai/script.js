function footToMeter(foot) {
    return 0.305 * foot;
}

function meterToFoot(meter) {
    return 3.279 * meter;
}

let foot = prompt("Nhập foot: ");
document.write(foot + " foot " + "= " + footToMeter(foot) + " meter");
document.write ("<br>")
let meter = prompt("Nhập meter: ");
document.write(meter + " meter " + "= " + meterToFoot(meter) + " foot");