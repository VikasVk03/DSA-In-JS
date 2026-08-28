// Second Largest Element in an Array


function SecondLargest(array) {
    let Largest = 0
    let secondLargest = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > Largest) {
            secondLargest = Largest
            Largest = array[i]
        }
        if (array[i] > secondLargest && array[i] < Largest) {
            secondLargest = array[i]
        }
    }



    console.log(secondLargest)

}

SecondLargest([12, 35, 1, 10, 34, 1])
SecondLargest([10, 10, 10, 10, 10, 10])
SecondLargest([1, 12, 13, 14, 15, 16, 17, 18])
SecondLargest([-2, -3, -4, -5, -6, -7, -8, -9])