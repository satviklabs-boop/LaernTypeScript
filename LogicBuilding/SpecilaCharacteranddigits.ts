let str = "Hello@123#45";

for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (ch >= '0' && ch <= '9') {
        console.log("Digit: " + ch);
    } 
    else if (!((ch >= 'A' && ch <= 'Z') ||
               (ch >= 'a' && ch <= 'z'))) {
        console.log("Special character: " + ch);
    }
}
