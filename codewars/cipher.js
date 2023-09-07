function rot13(text) {
    let result = [];

    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (/^[a-zA-Z]$/.test(char)) {
            let offset = char.toLowerCase() === char ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
            result.push(String.fromCharCode((char.charCodeAt(0) - offset + 13) % 26 + offset));
        } else {
            result.push(char);
        }
    }

    return result.join('');
}

// Example usage
let inputText = "Hello, World! This is a test 123.";
let cipheredText = rot13(inputText);
console.log(cipheredText);
