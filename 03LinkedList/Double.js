import PromptSync from 'prompt-sync'

let prompt = PromptSync()
class Node {
    constructor(data) {
        this.data = data
        this.prev = null
        this.next = null
    }
}


let node1 = new Node(10)
let node2 = new Node(20)
let node3 = new Node(30)
let node4 = new Node(40)



// let head = node1

node1.next = node2
node2.prev = node1
node2.next = node3
node3.prev = node2
node3.next = node4
node3.next.prev = node3



// console.log(head)
// console.log(node3)
// console.log(node4)

/* 
console.log("Enter node data")

let lengthOfLinkedList = Number(prompt("Enter the number of Nodes in LinkedList: "))

let n = Number(prompt("Enter first node data: "))
let LinkList = new Node(n)
let head = LinkList
let tail;
function createLinkedList(head) {

    let current = head;

    for (let i = 0; i < lengthOfLinkedList - 1; i++) {
        let n = Number(prompt("Enter Node data: "))
        let newNode = new Node(n)
        current.next = newNode
        newNode.prev = current
        current = current.next
    }

    tail = current

    current = head;

    console.log(current)

    return tail
}

createLinkedList(head) */

// console.log(tail)
function PrintNodeData(head) {
    let current = head
    // let last = tail

    while (current !== null) {
        console.log(current.data)
        current = current.next
    }

    // console.log("Printing from last node")
    /* while (last !== null) {
        console.log(last.data)
        last = last.prev
    } */

}

// PrintNodeData(head)

function PrintNodeDataFromEnd(tail) {
    let last = tail

    while (last !== null) {
        console.log(last.data)
        last = last.prev
    }
}

// * Recursive Traversal

function RecursivePrintNodeData(LinkedList) {
    if (LinkedList === null) {
        return
    } else {
        console.log(LinkedList.data)
        RecursivePrintNodeData(LinkedList.next)
    }
}

// RecursivePrintNodeData(head)




// * Insertion

// * insertion at Beginning

function insertAtBeginning(head) {
    let current = head

    console.log("Insert at Beginning")

    let n = Number(prompt("Enter a new node data: "))

    let newNode = new Node(n)

    current.prev = newNode
    newNode.next = current

    current = newNode

    PrintNodeData(current)
}

// insertAtBeginning(head)

// * insert at End

function insertAtEnd(tail) {
    let lastNode = tail

    console.log("Insert node at end")

    let n = Number(prompt("Enter new Node data: "))

    let newNode = new Node(n)

    lastNode.next = newNode
    newNode.prev = lastNode

    lastNode = newNode

    console.log("Printing from last node")
    PrintNodeDataFromEnd(lastNode)
}

// insertAtEnd(tail)

// * insert at Specific position

function insertAtSpecificPosition(head, tail, lengthOfLinkedList) {
    let current = head
    let lastNode = tail

    let Length = lengthOfLinkedList;
    let index = 0;

    console.log("Enter a node at specific position")

    let n = Number(prompt("Enter new Node data: "))
    let newNode = new Node(n)

    let position = Number(prompt(` Enter position to insert new Node data from 1 to ${Length}: `))

    while (index < position - 2) {
        current = current.next
        index++
    }

    let NextNode = current.next

    current.next = newNode;
    newNode.prev = current
    newNode.next = NextNode
    NextNode.prev = newNode

    // console.log("current ", current)
    // console.log(NextNode)

    current = head

    PrintNodeData(head)
}

// insertAtSpecificPosition(head, tail, lengthOfLinkedList)


// * Deletion 

// Delete Node at Beginning

function deleteNodeAtBeginning(head) {
    console.log("Deleting first Node: ")

    let current = head

    current = current.next

    current.prev = null

    PrintNodeData(current)
}

// deleteNodeAtBeginning(head)

// * Delete node at End

function deleteNodeAtEnding(tail) {
    let last = tail

    console.log("Deleting node at End of LinkedList: ")

    last = last.prev
    last.next = null
    console.log("Printing Node data from end: ")
    PrintNodeDataFromEnd(last)
}

// deleteNodeAtEnding(tail)


// * Delete a node by specific position

function DeleteNodeBySpecificPosition(head, lengthOfLinkedList) {

    let current = head
    let Length = lengthOfLinkedList

    console.log(`Delete a node by specific position`)

    let position = Number(prompt(`Enter a position to delete node from 1 to ${Length}: `))

    let index = 0;

    while (index < position - 1) {
        current = current.next
        index++
    }

    let PreviousNode = current.prev
    let NextNode = current.next

    PreviousNode.next = NextNode
    NextNode.prev = PreviousNode

    current = head

    PrintNodeData(current)
}

// DeleteNodeBySpecificPosition(head, lengthOfLinkedList)


// * Create Doubly circular LinkedList

console.log(`Enter node data for Doubly Circular Linked List`)

let lengthOfLinkedList = Number(prompt("Enter the number of nodes in LinkedList: "))
let head
let DcTail

// * Print Circular Node Data 
function printCircularNodeData(head, DcTail, lengthOfLinkedList) {
    let current = head

    let index = 0;

    while (index < lengthOfLinkedList + 2) {
        console.log(current.data)
        current = current.next
        index++
    }
}


function DoublyCircularLinkedList(lengthOfLinkedList) {

    let n = Number(prompt("Enter First Node data: "))
    let node = new Node(n)
    head = node

    let current = head

    for (let i = 1; i < lengthOfLinkedList; i++) {
        n = Number(prompt("Enter node data: "))
        let newNode = new Node(n)
        current.next = newNode
        newNode.prev = current
        current = current.next
    }

    DcTail = current
    current = head
    DcTail.next = head
    head.prev = DcTail

    // printCircularNodeData(head, DcTail, lengthOfLinkedList)
}

DoublyCircularLinkedList(lengthOfLinkedList)

// ** Insertion

// * beginning
function DoublyCircularInsertAtBegin(head, DcTail, lengthOfLinkedList) {
    let current = head

    console.log(`Insert a new Node in at begin Doubly circular Linked List`)
    let n = Number(prompt("Enter a new Node data: "))
    let newNode = new Node(n)

    current.prev = newNode
    newNode.next = current

    DcTail.next = newNode
    newNode.prev = DcTail

    head = newNode

    console.log(`head: ${head.data}`)
    lengthOfLinkedList = lengthOfLinkedList + 1

    printCircularNodeData(head, DcTail, lengthOfLinkedList)
}

// DoublyCircularInsertAtBegin(head, DcTail, lengthOfLinkedList)

function DoublyCircularInsertAtEnd(head, DcTail, lengthOfLinkedList) {
    let tail = DcTail
    console.log(`Enter new Node data at the end of Doubly circular Linked List`)
    let n = Number(prompt("Enter a new Node data:"))

    let newNode = new Node(n)

    tail.next = newNode
    newNode.prev = tail
    newNode.next = head
    head.prev = newNode

    DcTail = newNode

    console.log(`Tail data: ${DcTail.data}`)
    lengthOfLinkedList = lengthOfLinkedList + 1

    printCircularNodeData(head, DcTail, lengthOfLinkedList)
}

// DoublyCircularInsertAtEnd(head, DcTail, lengthOfLinkedList)

// * insert at specific position

function DoublyCircularInsertAtSpecificPosition(head, DcTail, lengthOfLinkedList) {

    let current = head
    console.log(`Enter new Node data at specific position in Doubly circular Linked List`)

    let n = Number(prompt("Enter a new Node data: "))

    let newNode = new Node(n)

    let position = Number(prompt(`Enter a position from 1 to ${lengthOfLinkedList}: `))

    for (let i = 1; i < position - 1; i++) {
        current = current.next
    }

    let NextNode = current.next

    current.next = newNode
    newNode.prev = current
    newNode.next = NextNode
    NextNode.prev = newNode

    lengthOfLinkedList = lengthOfLinkedList + 1

    printCircularNodeData(head, DcTail, lengthOfLinkedList)
}

// DoublyCircularInsertAtSpecificPosition(head, DcTail, lengthOfLinkedList)

// * Deletion in Doubly Circular Linked list

function DeletionInDoublyCircularLinkedList(head, DcTail, lengthOfLinkedList) {

    console.log(`Delete a node in Doubly circular linked list`)

    let position = Number(prompt(`Enter position to delete node from 1 to ${lengthOfLinkedList}: `))

    if (position === 1) {
        let NextHead = head.next
        head = NextHead
        head.prev = DcTail
        DcTail.next = head

        lengthOfLinkedList = lengthOfLinkedList - 1
    } else if (position === lengthOfLinkedList) {
        let prevTail = DcTail.prev
        DcTail = prevTail
        DcTail.next = head
        head.prev = DcTail

        lengthOfLinkedList = lengthOfLinkedList - 1;
    } else {
        let current = head

        for (let i = 1; i < position - 1; i++) {
            current = current.next
        }

        let NextNode = current.next.next
        current.next = NextNode
        NextNode.prev = current

        lengthOfLinkedList = lengthOfLinkedList - 1;
    }

    printCircularNodeData(head, DcTail, lengthOfLinkedList)

}

DeletionInDoublyCircularLinkedList(head, DcTail, lengthOfLinkedList)


