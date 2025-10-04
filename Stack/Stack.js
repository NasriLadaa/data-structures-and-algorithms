class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }

}

//Bulid Stack using Linked List
class Stack {
    constructor() {
        this.top = null
    }

    pushElement(value) {
        let newElementNode = new Node()
        newElementNode.data = value
        newElementNode.next = this.top
        this.top = newElementNode
    }

    printStack() {
        let newElementNode = this.top;
        let result = ""
        while (newElementNode != null) {
            result += newElementNode.data + "->"
            newElementNode = newElementNode.next
        }

        result += "null"
        console.log(result);
    }

    popElement() {
        let newELementtop = this.top
        this.top = this.top.next
    }

    isEmpty() {
        if (this.top == null) {
            return true
        }
        else {
            return false;
        }
    }

    getPeek() {
        if (!this.isEmpty()) {
            return this.top.data
        }
    }
}

let stack = new Stack();
stack.pushElement(10)
stack.pushElement(20)
stack.pushElement(30)
stack.pushElement(40)
stack.printStack()
console.log(stack.isEmpty())
console.log(stack.getPeek())