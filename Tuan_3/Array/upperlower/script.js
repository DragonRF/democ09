str = prompt("Nhap ten cua ban:");
const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER = 'abcdefghijklmnopqrstuvwxyz';
const result = [];

for(let x=0; x<str.length; x++)
{
    if(UPPER.includes(str[x]))
    {
        result.push(str[x].toLowerCase());
    }
    else if(LOWER.includes(str[x]))
    {
        result.push(str[x].toUpperCase());
    }
    else
    {
        result.push(str[x]);
    }
}
document.write(result.join(''));