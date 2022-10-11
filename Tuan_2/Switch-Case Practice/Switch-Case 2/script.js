let a = +prompt(`a?`);
switch (a) {
    case 0:
        alert("a = 0");
        break;
    case 1:
        alert("a = 1");
        break;
    case 2:
    case 3:
        alert("2,3");
        break;
    default:
        alert("That's too much!");
        break;
}