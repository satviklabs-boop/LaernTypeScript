let str: string = "abcabcbb";
let longest: string = "";

for (let i = 0; i < str.length; i++) {
    let temp: string = "";

    for (let j = i; j < str.length; j++) {
        if (temp.includes(str[j])) {
            break;
        }

        temp = temp + str[j];
    }

    if (temp.length > longest.length) {
        longest = temp;
    }
}

console.log("Longest substring: " + longest);
console.log("Length: " + longest.length);
