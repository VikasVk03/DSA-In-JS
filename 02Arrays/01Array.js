// Array - collection of items



// insert Array at beginning


let arr = [1, 2, 3, 4, 5, 6, 7]

arr.unshift(99)

// console.log(arr)

arr.push(102)


let deleted = arr.splice(2, 0, 55)



let delElement = arr.slice(2, 4)

// console.log(delElement)

// insert at specific position

function insertElementInArraySpecificPosition(array, position, element) {
    console.log("Before insertion: ", array)
    let i = array.length
    for (i; i >= position; i--) {
        array[i] = array[i - 1]
    }

    array[i] = element

    console.log("After insertion: ", array)
}

// insertElementInArraySpecificPosition([1, 2, 4, 5, 6, 7], 8, 99)

// Deletion

function deleteElementAtBegin(array, position) {

    if (position === 1) {
        console.log("Before Deletion: ", array)
        for (let i = 0; i < array.length; i++) {
            array[i] = array[i + 1]
        }

        array.length = array.length - 1
        console.log("After Deletion: ", array)
    } else if (position === array.length) {
        console.log("Before deletion: ", array)
        array.length = array.length - 1

        console.log("After deletion: ", array)
    } else {
        console.log("Before Deletion: ", array)
        for (let i = position - 1; i < array.length; i++) {
            array[i] = array[i + 1]
        }

        array.length = array.length - 1

        console.log("After Deletion: ", array)
    }
}

// deleteElementAtBegin([1, 2, 3, 4, 5, 6, 7], 3)

// Deletion first occurrence

function DeletionFirstOccurrence(array, element) {

    console.log("Before Deletion: ", array)
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            counter = i;
            break;
        }
    }

    for (counter; counter < array.length; counter++) {
        array[counter] = array[counter + 1]
    }

    array.length = array.length - 1
    console.log("After removing first occurrence: ", array)
}

// DeletionFirstOccurrence([1, 2, 3, 4, 5, 6, 7, 2, 35, 5, 6], 6)

function DeletionAllOccurrence(array, element) {
    let counter = 0;

    console.log("Before Deletion: ", array)

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== element) {
            array[counter] = array[i]
            counter++
        }
    }

    array.length = counter
    console.log("After Deletion: ", array)
}

DeletionAllOccurrence([0, 1, 3, 0, 2, 2, 4, 2], 2)


