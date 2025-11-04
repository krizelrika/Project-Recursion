function mergeSort(arr) {
  // Base case: arrays with 0 or 1 element are already sorted
  if (arr.length <= 1) return arr;

  // Split array into two halves
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Recursively sort both halves, then merge them
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const sorted = [];
  let i = 0;
  let j = 0;

  // Compare elements and push the smaller one
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sorted.push(left[i]);
      i++;
    } else {
      sorted.push(right[j]);
      j++;
    }
  }

  // Add remaining elements (if any)
  return sorted.concat(left.slice(i)).concat(right.slice(j));
}

// Test cases
console.log("mergeSort([]) →", mergeSort([])); // []
console.log("mergeSort([73]) →", mergeSort([73])); // [73]
console.log("mergeSort([1, 2, 3, 4, 5]) →", mergeSort([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
console.log("mergeSort([3, 2, 1, 13, 8, 5, 0, 1]) →", mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log("mergeSort([105, 79, 100, 110]) →", mergeSort([105, 79, 100, 110])); // [79, 100, 105, 110]
