// Iterative version
function fibs(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) result.push(0);
    else if (i === 1) result.push(1);
    else result.push(result[i - 1] + result[i - 2]);
  }
  return result;
}

// Recursive version
function fibsRec(n) {
  console.log("This was printed recursively");

  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const arr = fibsRec(n - 1);
  return [...arr, arr[arr.length - 1] + arr[arr.length - 2]];
}

// Testing both versions
console.log("Iterative Fibonacci (8):", fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log("Recursive Fibonacci (8):", fibsRec(8));

console.log("Iterative Fibonacci (5):", fibs(5)); // [0, 1, 1, 2, 3]
console.log("Recursive Fibonacci (5):", fibsRec(5));

console.log("Iterative Fibonacci (1):", fibs(1)); // [0]
console.log("Recursive Fibonacci (1):", fibsRec(1));