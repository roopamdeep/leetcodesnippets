function reverse3(array) {
  return array.map((element, idx, arr) => arr[arr.length - 1 - idx]);
}
