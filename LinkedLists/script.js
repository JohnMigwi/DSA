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
   LinkedList.prototype.removeHead = function () {
    //if list is empty
     if(!this.head) return null;
    //if list not empty
    var val = this.head.value;
    this.head = this.head.next;
    
    //new head node can now be itself or null
     if(this.head) this.head.prev = null;
     else this.tail = null;

     return val;
   }


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
 //remove from head

 //remove from tail
LinkedList.prototype.removeTail = function () {
    //empty
    if(!this.tail) return null;

    //not empty
    var val = this.tail.value;
    this.tail= this.tail.prev;
    //remaining node
    if (this.tail) this.tail.next = null;
    else this.head = null;

    //get back the value 
     
    return val;
}
//linear search

