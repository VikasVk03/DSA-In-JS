import PromptSync from "prompt-sync";

const prompt = PromptSync();

// Singly LinkedList

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

/* console.log("Enter node for linkedList: ");
let n = Number(prompt("Enter Number: "));
let linkList = new Node(n);
let head = linkList;
let pointer = head;

let i = 0;

while (i < 4) {
    // console.log(head)
    let n = Number(prompt("Enter Number: "));
    pointer.next = new Node(n);
    // console.log(pointer)
    pointer = pointer.next;
    i++;
} */

// console.log("loop start")

/* let printData = head
while (printData !== null) {
    console.log(printData.data)
    printData = printData.next
}

console.log("print loop end") */

// * Recursive
// console.log("Traversing with Recursive method")
// let printData = head;
function PrintNodeData(linkedList) {
    // console.log(object)

    if (linkedList === null) {
        /* console.log("Null: ", linkedList)
            console.log(linkedList.data) */
        return;
    } else {
        console.log(linkedList.data); // here it prints data in reverse
        PrintNodeData(linkedList.next);
    }
}
/* head recursion
    tail recursion

*/
// PrintNodeData(printData)

// * Insertion

// * 1. Insert node at beginning

// pointer = head;

function insertAtBeginning(pointer) {
    console.log("Enter new Node at beginning");

    let n = Number(prompt("Enter a number: "));

    let newNode = new Node(n);

    newNode.next = pointer;
    pointer = newNode;

    console.log(pointer);

    return pointer;
}

// pointer = insertAtBeginning(pointer);

// PrintNodeData(pointer)

// * 2. InsertionAtEnd

// let end = head;

function insertAtEnd(pointer) {
    console.log("Insertion at End");

    let n = Number(prompt("Enter a new Node: "));
    let newNode = new Node(n);

    let current = pointer

    while (current.next !== null) {
        current = current.next
    }

    current.next = newNode

    /*   while (pointer !== null) {
              if (pointer.next === null) {
      
                  // console.log(pointer)
                  pointer.next = newNode
                  pointer = pointer.next
                  console.log(pointer.data)
              } else {
                  pointer = pointer.next
              }
      
          } */

    // pointer = newNode;

    // return pointer;
}

// insertAtEnd(end)

// * insert at specific position


function insertAtSpecificPosition(head) {
    let n = Number(prompt("Enter new Node data: "))
    let newNode = new Node(n)

    let lengthOfLinkedList = 0;

    let current = head;

    while (current !== null) {
        lengthOfLinkedList += 1
        current = current.next;
    }

    console.log("Length of LinkedList: ", lengthOfLinkedList, `Range of Node: 1 - ${lengthOfLinkedList}`)

    let position = Number(prompt(`Enter the position to insert new Node ${n} at: `))

    // console.log(`Before `, current)
    current = head;
    // console.log(`After `, current);



    let index = 0;

    while (current.next !== null) {

        if (position === 1 && index + 1 === 1) {
            console.log(`Linking at 1st`)
            newNode.next = head
            head = newNode
            // console.log(head)
        }

        /*  if (position === lengthOfLinkedList && index + lengthOfLinkedList === lengthOfLinkedList) {
             console.log(`Linking at last Node`)
             current.next = newNode
         } */

        if (index === position - 2) {
            console.log(`Linking node`)
            newNode.next = current.next
            current.next = newNode
        }


        current = current.next
        index += 1
    }
    PrintNodeData(head)

}




// insertAtSpecificPosition(head)


// * Deletion of node in LinkedList

// * Deletion at beginning (Removal of first node) in a Linked List

function deleteNodeAtBeginning(head) {
    let current = head

    // current.next = head
    head = current.next

    current = null

    PrintNodeData(head)
    console.log(head)
}

// deleteNodeAtBeginning(head)

// * Deletion at end (Removal of last node) in a Linked List

function deleteNodeAtEnding(head) {
    let current = head;

    while (current.next.next !== null) {
        current = current.next
    }

    console.log(`Before removing last node: ${current.next.next}, Second last node: ${current}`)
    current.next.next = null
    current.next = null

    console.log(current)
    PrintNodeData(head)
}

// deleteNodeAtEnding(head)

// * Delete Node by Position

function deleteNodeByPosition(head) {
    let current = head
    let index = 1
    let lengthOfLinkedList = 0;

    while (current.next !== null) {
        lengthOfLinkedList += 1;
        current = current.next;
    }

    current = head
    let position = Number(prompt(`Enter Node position to delete from 1 to ${lengthOfLinkedList}: `))

    while (position - 1 !== index) {
        current = current.next
        index += 1;
    }

    current.next = current.next.next

    PrintNodeData(head)
}


// deleteNodeByPosition(head)

//  * Search an element in a Linked List


// * iterative approach


function searchByElement(head) {
    let current = head;

    let element = Number(prompt("Enter a Node to search: "))

    let counter = 0;

    while (current !== null) {
        if (current.data === element) {
            // console.log(current)
            counter += 1
            console.log(`${current.data} is present in LinkedList, ${true}`)
            break;
        } else {
            // console.log(current)
            current = current.next
        }

    }

    if (counter === 0) {
        console.log(`${element} is present in LinkedList, ${false}`)
    }
}

// searchByElement(head)


// * Recursive approach

function searchByElement2(LinkedList, element) {

    if (LinkedList === null) {
        console.log(`${element} is present in LinkedList is, ${false}`)
        return;
    } else {
        if (LinkedList.data === element) {
            console.log(`${LinkedList.data} is present in LinkedList is, ${true}`)
            return;
        }
        searchByElement2(LinkedList.next, element)
    }
}


// let element = Number(prompt("Enter an element to search in LinkedList: "))

// searchByElement2(head, element)


// * Reverse LinkedList

function reverseLinkedList(head) {
    let current = head
    let previous = null
    let Next = null


    while (current !== null) {
        Next = current.next
        current.next = previous
        previous = current
        current = Next
    }

    head = previous
    console.log(previous)
    // console.log(current)
    console.log(head)

    PrintNodeData(head)
}

// reverseLinkedList(head)


// * Modify linkedList


function ModifyLinkedList(head) {
    let LL2 = head
    let current = head
    let previous = null
    let Next = null
    // console.log(LL2)
    let lengthOfLinkedList = 0;
    while (current !== null) {
        Next = current.next
        current.next = previous
        previous = current
        current = Next
        lengthOfLinkedList += 1;
    }

    lengthOfLinkedList = Math.ceil(lengthOfLinkedList / 2)
    let index = 0;
    console.log(LL2)
    head = previous
    current = head



    console.log("LL2 before Loop ", LL2)
    while (index < lengthOfLinkedList) {
        console.log("current ", current.data)
        console.log("LL2 ", LL2)
        // current.data = current.data - LL2.data
        index += 1
        current = current.next
        LL2 = LL2.next
    }

    current = head

    // console.log(LL2)
    console.log(current)

    PrintNodeData(current)
}

// ModifyLinkedList(head)

// Singly Circular LinkedList

console.log("Enter data for Singly Circular LinkedList")

let lengthOfLinkedList = Number(prompt("Enter the node of Node in LinkedList: "))

let n = Number(prompt("Enter data for first Node: "))

let node = new Node(n)

let head = node
let ScTail

function SinglyCircularLinkedList(head, lengthOfLinkedList) {

    let current = head

    let Length = lengthOfLinkedList

    for (let i = 0; i < lengthOfLinkedList - 1; i++) {
        let n = Number(prompt("Enter Node data: "))
        current.next = new Node(n)
        current = current.next
    }

    current.next = head
    ScTail = current

    console.log(current)
    current = head

    /*let counter = 0;
    while (counter < lengthOfLinkedList + 1) {
        console.log(current)
        current = current.next
        counter += 1

    }
 */
    console.log("current Node", current)

    // console.log(tail)

    return ScTail
}

SinglyCircularLinkedList(head, lengthOfLinkedList)

// console.log(`ScTail: ${ScTail}`)
// insertion 

// * insert at beginning

function SinglyCircularInsertAtBeginning(head, lengthOfLinkedList) {
    let Length = lengthOfLinkedList

    let current = head

    console.log(`Insert at beginning of Singly Circular Linked List`)

    let n = Number(prompt("Enter new Node data: "))

    let newNode = new Node(n)

    newNode.next = current

    current = newNode
    let index = 0;
    while (index < Length) {
        current = current.next
        index += 1;
    }

    current.next = newNode

    // console.log("After Inserting at beginning Last Node: ", current)

    head = newNode
    current = head

    index = 0
    while (index < lengthOfLinkedList + 2) {
        console.log(current.data)
        current = current.next
        index += 1

    }

    // console.log("After Inserting at beginning First Node : ", current)
}

// SinglyCircularInsertAtBeginning(head, lengthOfLinkedList)


// insertion at end

function SinglyCircularInsertAtEnd(head, lengthOfLinkedList) {
    let current = head
    let Length = lengthOfLinkedList
    console.log("Insert new Node in the end of Singly circular LinkedList")

    let n = Number(prompt("Enter a new Node data: "))

    let newNode = new Node(n)

    let index = 0;

    while (index < Length - 1) {
        current = current.next
        // console.log(current.data)
        index += 1
    }

    current.next = newNode
    newNode.next = head

    // head = newNode

    current = head

    // console.log(head)
    index = 0
    while (index < lengthOfLinkedList + 2) {
        console.log(current.data)
        current = current.next
        index += 1

    }

    // console.log(current)


}

// SinglyCircularInsertAtEnd(head, lengthOfLinkedList)

function SinglyCircularInsertAtSpecificPosition(head, lengthOfLinkedList) {
    let current = head
    let Length = lengthOfLinkedList

    console.log(`insert a new Node at specific position of Singly Circular LinkedList `)

    let n = Number(prompt("Enter a new Node data: "))
    let newNode = new Node(n)

    let position = Number(prompt(`Enter a position to insert new Node from 1 to ${Length}: `))

    let index = 0;

    while (index < position - 2) {
        current = current.next
        index += 1;
    }

    let NextNode = current.next

    current.next = newNode

    newNode.next = NextNode

    current = head

    index = 0;

    while (index < Length + 2) {
        console.log(current.data)
        current = current.next
        index += 1
    }
}

// SinglyCircularInsertAtSpecificPosition(head, lengthOfLinkedList)

// Deletion 


function printCircularNodeData(head, lengthOfLinkedList) {
    let index = 0;
    let current = head
    while (index < lengthOfLinkedList + 2) {
        console.log(current.data)
        current = current.next
        index += 1
    }
}

function SinglyCircularDeletion(head, ScTail, lengthOfLinkedList) {
    let current = head
    let lastNode = ScTail
    let Length = lengthOfLinkedList


    console.log('Delete a node from Singly circular LinkedList')

    let position = Number(prompt(`Enter a position to Delete node from 1 to ${Length}: `))
    let index = 0;
    if (position === 1) {
        head = current.next
        lastNode.next = head
        current = head

        printCircularNodeData(current, Length)
    } else if (position === Length) {
        while (index < position - 2) {
            current = current.next
            index += 1
        }

        current.next = head
        lastNode = current
        current = head
        printCircularNodeData(head, lengthOfLinkedList)

    }
    else {
        while (index < position - 2) {
            current = current.next
            index += 1
        }

        let NextNode = current.next.next
        current.next = NextNode
        current = head

        printCircularNodeData(head, lengthOfLinkedList)
    }
}

// SinglyCircularDeletion(head, ScTail, lengthOfLinkedList)