
class Node {

    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class SingleLinkedList {

    constructor(data) {
        this.head = new Node(data)
    }

    addNode(num) {
        let temp = this.head;
        while (temp.next != null) {
            temp = temp.next;
        }

        var newNode = new Node(num);
        temp.next = newNode;

    }

    printLinkedList() {
        let temp = this.head;
        let result = ""
        while (temp != null) {
            result += temp.data + " --> "
            temp = temp.next;
        }
        console.log(result + "--> null");
    }

    traverseUsingRecursion(head= this.head){
        if (head == null){         //Base Case
            console.log("--> NULL");
            return;
        }
        else{
            console.log(head.data+ " --> ")
            return this.traverseUsingRecursion(head.next) //#Progress Forward
        }
    }
}



//--------------------------------------------------------Out side Classes---------------------------
const SLL = new SingleLinkedList(1);
SLL.addNode(3);
SLL.addNode(5);
SLL.addNode(6);
SLL.printLinkedList()
SLL.traverseUsingRecursion()
