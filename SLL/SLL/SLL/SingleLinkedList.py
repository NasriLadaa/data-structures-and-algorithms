from Node import Node

class SingleLinkedList:
    
    def __init__(self):
        self.head = None
        self.tail = None

    #Methods
    #insert Node to Head
    def insert_node_to_head(self, value):
        newNode = Node(value)
        newNode.next = self.head
        self.head = newNode
        return self.head
    
    #Insert Node to tail
    def insert_node_tail(self,val):
        newNode = Node(val)
        if ( self.head is None):
            self.head = newNode
            self.tail = newNode
            
        else:
            current = self.head
            while current.next is not None:
                current = current.next
            
            current.next = newNode
            self.tail = newNode
            
        return self.head
    
    #Traversing Single Linked List
    def traverse_SLL(self):
        current = self.head
        while current is not None:
            print( current.value, end="->")
            current = current.next

        print("NULL")
        
    #Insert Node to a specfic postion or index
    def insert_to_index(self, val,postion):
        newNode = Node ( val)
        current = self.head
        
        for i in range( 0, postion-1, 1):
            current = current.next
            
        temp = current.next
        current.next = newNode
        newNode.next = temp
            