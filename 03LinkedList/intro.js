// 🧱 1. Basic Node Structure
// Each node stores data and a reference to the next node:

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


// 🔗 2. Creating & Linking Nodes Manually

// creation
const node1 = new Node(10)
const node2 = new Node(20)
const node3 = new Node(30)

/* console.log(node1)
console.log(node2)
console.log(node3) */


// Linking nodes
node1.next = node2
node2.next = node3

let head = node1
// console.log(node1)

// console.log(`head of linkedList ${head.next}`)

// logging linkedList
// console.log("node1 of linkedList ", node1)

// 🔄 3. Traversing the Linked List

function printList(head) {
    let current = head;

    while (current !== null) {
        console.log(current)
        current = current.next
        if (current == null) {
            console.log(current)
        }

    }
}


// printList(head)

// * Insertion Operation
// ➕ 4. Inserting Nodes

// * Insert at Beginning

// console.log(`Before inserting new node at beginning `, head)

function insertAtBeginning(head, data) {
    let newNode = new Node(data);
    newNode.next = head;

    return newNode;
}

head = insertAtBeginning(head, 77)

// console.log(`After inserting new node 77 at beginning `, head)

// *  Insert at End

function insertAtEnd(head, data) {
    let newNode = new Node(data)
    // console.log(newNode)

    let current = head;

    while (current.next !== null) {
        current = current.next;
    }

    current.next = newNode;

    return head;
}

head = insertAtEnd(head, 90)

// printList(head)

// * insert at position

function insertAtPosition(head, data, position) {
    let newNode = new Node(data);

    if (position === 0) {
        newNode.next = head

        return newNode
    }

    let current = head;

    let index = 0;

    while (current.next !== null && index < position - 1) {
        current = current.next
        index++
    }

    if (current !== null) {
        newNode.next = current.next;
        current.next = newNode
    }

    return head
}


// head = insertAtPosition(head, 55, 2)


// printList(head)



// * Modify Pending **

