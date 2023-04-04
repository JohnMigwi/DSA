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


    var LL = new LinkedList();
    LL.addToHead(100);
    LL.addToHead(200);
    LL.addToHead(700);
    LL.addToHead(2900);
    LL.addToHead(8200);
    console.log(LL) 

//add node to tail
   //create the node
   LinkedList.prototype.addToTail = function(value){
        var Node2 = new Node ( value , null , this.tail)
        //what if other nodes were present
        if(this.tail) this.tail.next = Node2 ;
        //if empty
        else this.head = Node2;
        this.tail=Node2;
   }
   var LL1 = new LinkedList();
   LL1.addToTail(200);
   LL1.addToTail(700);
   LL1.addToTail(100);
   LL1.addToTail(2900);
   LL1.addToTail(8200);
   console.log(LL1) 
