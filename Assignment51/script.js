function countCharacters(str) {
  let chars = str.split(""); // Convert string into an array of characters

  chars.forEach((char) => {
    if (chars[char]) {
      chars[char] += 1; // Increment count if character already exists
    } else {
      chars[char] = 1; // Initialize count if character appears for the first time
    }
  });

  return chars;
}

// Example usage
console.log(countCharacters("banana"));
