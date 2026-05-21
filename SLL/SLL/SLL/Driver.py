from Node import Node
from SingleLinkedList import SingleLinkedList

#Create Objects (Nodes)

#first_node = Node (100)

#second_node = Node(200)

#third_node = Node(300)

#fourth_node = Node(400)

#first_node.next = second_node

#second_node.next = fourth_node

#fourth_node.next = third_node


SLL = SingleLinkedList()
SLL.insert_node_tail(100)
SLL.insert_node_tail(200)
SLL.insert_node_tail(300)
SLL.insert_node_tail(400)
SLL.insert_node_to_head(5000)
SLL.insert_to_index(6000 ,2 )
SLL.traverse_SLL()
