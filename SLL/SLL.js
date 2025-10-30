
class Node {

    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class SingleLinkedList {

    constructor() {
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

    addNodeToHead(val){
        var newNode = new Node(val);
        if (this.head === null){
            this.head = newNode;
            return;
        }
        
        newNode.next = this.head;
        this.head = newNode;
    }

    addNodeToPostion(postion, val){
        var newNode = new Node(val)
        if (postion == 0 ){
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let current = this.head

        for ( var i = 0 ; i < postion - 1 ; i++){
            if ( current.next == null){
                console.log("Postion out of range");
                return;
            }
            current = current.next
        }

        newNode.next = current.next
        current.next = newNode
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
const SLL = new SingleLinkedList();
SLL.addNodeToTail(3);
SLL.addNodeToTail(5);
SLL.addNodeToTail(6);
SLL.addNodeToHead(100)
SLL.printLinkedList()
SLL.traverseUsingRecursion()

SLL.addNodeToPostion(0,200000)
SLL.printLinkedList()

