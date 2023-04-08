function LinkedList() {
    this.head=null;
    this.tail=null;
};

//constructor for the nodes

function Node( value , next , prev ) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

//add a node to the head
    //create the node
    LinkedList.prototype.addToHead = function (value){
        var Node1 = new Node(value , this.head , null );
    
    //if LL has other nodes then we will need to adjust
    if(this.head) this.head.prev = Node1;
    else this.tail = Node1;
    this.head = Node1;
}

//remove node from the head 
   //point the head  remember the head is this .head
    LinkedList.prototype.removeHead(obj){
        
    }
   //assign it to next node


    var LL = new LinkedList();
    LL.addToHead(100);
    LL.addToHead(200);
    LL.addToHead(700);
    LL.addToHead(2900);
    LL.addToHead(8200);
   // console.log(LL) 

//add node to tail
   //create the node
    LinkedList.prototype.addToTail = function ( value){
        var newNode = new Node(value , null , this.tail);
        if(this.tail) this.tail.next= newNode;
        else this.head= newNode;
        this.tail= newNode;
    }

   var LL1 = new LinkedList();
   LL1.addToTail(10);
   LL1.addToTail(20);
   LL1.addToTail(30);

   LL1.addToHead(100);
   //console.log(LL1.tail.prev.prev.prev);



