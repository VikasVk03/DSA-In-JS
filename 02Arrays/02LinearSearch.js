// * Linear Search - searching of element in array in sequential manner or one by one 


function LinearSearch(array, targetElement) {

    let n = array.length

    for (let i = 0; i < n; i++) {
        if (array[i] === targetElement) {
            return i;
        }
    }


    return -1;
}


let result = LinearSearch([1, 2, 4, 55, 67, 8, 4, 6, 8, 1, 2, 4], 55)
console.log(result)