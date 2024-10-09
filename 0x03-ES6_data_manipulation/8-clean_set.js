export default function cleanSet(set, startString) {
  // Initialize an empty array to store the parts of the strings
  const parts = [];

  // Iterate through each value in the set
  for (const value of set) {
    // Check if the value starts with the startString and startString is not empty
    if (value.startsWith(startString) && startString !== '') {
      // Append the part of the string after the startString to the parts array
      parts.push(value.slice(startString.length));
    }
  }

  // Join the parts array with '-' and return the resulting string
  return parts.join('-');
}
