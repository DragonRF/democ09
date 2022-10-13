let sout, i, j;
sout = "<table border='1' width='900' cellspacing='0' cellpadding='3' style='margin: 50px'>";
i = j = 1;
while (i <= 10) {
    sout = sout + "<tr>";
    while (j <= 10) {
        sout = sout + "<td>" + i + " " + "x" + " " + j + " = " + (i * j) + "</td>";
        j++;
    }
    sout = sout + "</tr>";
    j = 1;
    i++;
}
sout = sout + "</table>";
document.write(sout);