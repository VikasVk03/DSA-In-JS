// * Binary Search 
/* 
Binary Search is a searching algorithm that operates on a sorted or monotonic search space, 
repeatedly dividing it into halves to find a target value or optimal answer in logarithmic time O(log N).

*/


function BinarySearch(array, targetElement) {
    let low, mid, high;
    low = 0
    high = array.length - 1


    while (low <= high) {
        mid = Math.floor((low + high) / 2)
        // console.log("mid: ", mid)
        if (array[mid] === targetElement) {
            return `Target Element ${targetElement} found at index ${mid}`
        } else if (targetElement > array[mid]) {
            low = mid + 1
            // console.log("low: ", low)
        } else if (targetElement < array[mid]) {
            high = mid - 1;
            // console.log("high: ", high)
        }
    }

    return `Target element ${targetElement} not found in given array`
}

let result = BinarySearch([2, 4, 6, 7, 9, 11, 13, 24, 34, 56, 76, 78, 99], 99)

console.log(result)