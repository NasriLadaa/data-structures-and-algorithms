
class Node {

    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class SingleLinkedList {

    constructor(data) {
        this.head = null
    }

    addNodeToTail(num) {
        var newNode = new Node(num);

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next != null) {
            current = current.next;
        }
        current.next = newNode;
    }

    printLinkedList() {
        let temp = this.head;
        let result = ""
        while (temp != null) {
            result += temp.data + " --> "
            temp = temp.next;
        }
        console.log(result + "null");
    }

    traverseUsingRecursion(head = this.head) {
        if (head == null) {         //Base Case
            console.log("null");
            return;
        }
        else {
            console.log(head.data + " --> ")
            return this.traverseUsingRecursion(head.next) //Progress Forward
        }
    }
}



//--------------------------------------------------------Out side Classes---------------------------
const SLL = new SingleLinkedList(1);
SLL.addNodeToTail(3);
SLL.addNodeToTail(5);
SLL.addNodeToTail(6);
SLL.printLinkedList()
SLL.traverseUsingRecursion()
