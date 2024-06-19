function stringChop(str, size) {
  // your code here
	if (str === null) {
        return [];
    }

  const chunks = [];
  let i = 0;

  // Loop through the string, slicing it into chunks
  while (i < str.length) {
    chunks.push(str.slice(i, i + chunkLength));
    i += chunkLength;
  }

  return chunks;
}

// Do not change the code below
//const str = prompt("Enter String.");
//const size = prompt("Enter Chunk Size.");
//alert(stringChop(str, size));
