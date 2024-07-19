export function bubbleSort(array) {
    const animations = [];
    const auxArray = array.slice();
    for (let i = 0; i < auxArray.length - 1; i++) {
      for (let j = 0; j < auxArray.length - 1 - i; j++) {
        animations.push([j, j + 1, 'compare']);
        animations.push([j, j + 1, 'revert']);
        if (auxArray[j] > auxArray[j + 1]) {
          animations.push([j, auxArray[j + 1]]);
          animations.push([j + 1, auxArray[j]]);
          [auxArray[j], auxArray[j + 1]] = [auxArray[j + 1], auxArray[j]];
        } else {
          animations.push([j, auxArray[j]]);
          animations.push([j + 1, auxArray[j + 1]]);
        }
      }
      animations.push([auxArray.length - 1 - i, auxArray[auxArray.length - 1 - i], 'sorted']);
    }
    animations.push([0, auxArray[0], 'sorted']);
    return animations;
  }
  
  export function selectionSort(array) {
    const animations = [];
    const auxArray = array.slice();
    for (let i = 0; i < auxArray.length; i++) {
      let minIdx = i;
      for (let j = i + 1; j < auxArray.length; j++) {
        animations.push([minIdx, j, 'compare']);
        animations.push([minIdx, j, 'revert']);
        if (auxArray[j] < auxArray[minIdx]) {
          minIdx = j;
        }
      }
      if (minIdx !== i) {
        animations.push([i, auxArray[minIdx]]);
        animations.push([minIdx, auxArray[i]]);
        [auxArray[i], auxArray[minIdx]] = [auxArray[minIdx], auxArray[i]];
      }
      animations.push([i, auxArray[i], 'sorted']);
    }
    return animations;
  }
  
  export function insertionSort(array) {
    const animations = [];
    const auxArray = array.slice();
    for (let i = 1; i < auxArray.length; i++) {
      let j = i;
      while (j > 0 && auxArray[j] < auxArray[j - 1]) {
        animations.push([j, j - 1, 'compare']);
        animations.push([j, j - 1, 'revert']);
        animations.push([j, auxArray[j - 1]]);
        animations.push([j - 1, auxArray[j]]);
        [auxArray[j], auxArray[j - 1]] = [auxArray[j - 1], auxArray[j]];
        j--;
      }
      animations.push([j, auxArray[j], 'sorted']);
    }
    return animations;
  }
  
  