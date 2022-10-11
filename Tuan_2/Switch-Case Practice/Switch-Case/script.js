let browser = prompt("Enter your browser name:");
switch (browser) {
    case "Edge":
    case "edge":
            alert("You've got the Edge!");
            break;
    case "Chrome":
    case "chrome":
    case "Firefox":
    case "firefox":
    case "Safari":
    case "safari":
    case "Opera":
    case "opera":
        alert('Okay we support these browsers too');
        break;
    default:
        alert('We hope that this page looks ok!');
}