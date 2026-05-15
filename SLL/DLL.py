
class Node:
    
    def __init__(self, value, next , prev):
        self.value = value
        self.next = next
        self.prev = prev
    
class DoublyLinkedList:
    
    def __init__(self):
        self.head = None
        self.tail = None

    def traverse_DLL(self):
        
        current = self.head
        #print(current.value)
        while current is not None:
            print(current.value, end=" -> ")
            current = current.next
        
        print("Null")
    
    def insert_Node_to_tail(self, val):
        newNode = Node(val, None, self.tail)
        self.tail.next = newNode
        self.tail = newNode

    def reverse_DLL(self):
        current = self.tail
        mystr = ""
        while current is not None:
            print(current.value, end=" -> ")
            current = current.prev
            
        print("Null")
            
        
        
myDLL = DoublyLinkedList()

head_Node = Node(200, None, None)

second_Node = Node(50, None, head_Node)

third_Node = Node( 400 , None, second_Node)

myDLL.head = head_Node
myDLL.tail = third_Node
head_Node.next = second_Node
second_Node.next= third_Node

myDLL.insert_Node_to_tail(300)
myDLL.insert_Node_to_tail(6000)
myDLL.traverse_DLL()
print("-"*20)
myDLL.reverse_DLL()