const merge = (left, right) => {
  let resultArray = [],
    leftIndex = 0,
    rightIndex = 0

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex])
      leftIndex++
    } else {
      resultArray.push(right[rightIndex])
      rightIndex++
    }
  }

  return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

const mergeSort = (array) => {
  if (array.length === 1) {
    return array
  }

  const middle = Math.floor(array.length / 2)
  const left = array.slice(0, middle)
  const right = array.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}

export function validSequences(notas) {
  if (notas.length < 2) return 0

  const sortArray = mergeSort(notas)

  const setArray = new Set(sortArray)
  if (setArray.size !== sortArray.length) return 0

  const min = sortArray[0]
  const max = sortArray[sortArray.length - 1]
  if (max - min + 1 === sortArray.length) return 1

  return 0
}

