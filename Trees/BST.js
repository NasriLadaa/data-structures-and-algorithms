
class Node {

    constructor(data) {
        this.data = data;
        this.left = null
        this.right = null
    }
}

class BST {

    constructor() {
        this.root = null
    }

    insert(val) {
        var newNode = new Node(val)
        if (this.root === null) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode)
        }

    }

    insertNode(root, newNode) {
        if (newNode.data < root.data) {
            if (root.left === null) {
                root.left = newNode;
            }
            else {
                this.insertNode(root.left, newNode)
            }
        }
        else {
            if (root.right === null) {
                root.right = newNode
            }
            else {
                this.insertNode(root.right, newNode)
            }
        }
    }

    getRootNode() {
        return this.root;
    }

    preorder(root) {
        if (root !== null) {
            console.log(root.data);
            this.preorder(root.left)
            this.preorder(root.right)
        }
    }


}

const bst = new BST()
root = bst.insert(22)
root = bst.insert(40)
bst.preorder(bst.getRootNode())


