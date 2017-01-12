
var Node = function(val){
 this.val = val;
 this.next = null;
}

var SingleList= function(){
 this.head = null;
 this.tail = null;
}

// SingleList.prototype.pop = function(){
//   var cur = this.head
//   while(cur.next.next){
//     cur = cur.next
//   }
//   cur.next = null;
//   this.tail = cur;
//   return this;
// }

SingleList.prototype.add = function (val) {
 if (!this.head){
   this.head = new Node(val);
   return this;
 }
 var current = this.head;
 while(current.next){
   current = current.next;
 }
 current.next = new Node(val);
 this.tail == current.next;
 return this;
};


compare = function(sll1, sll2){
  if (!sll1.head && !sll2.head){
    console.log("Both heads absent!");
    return true;
  }
  // if (!sll1.head || sll2.head){
  //   console.log("One head absent!");
  //   return false;
  // }
  if(sll1.head.val !== sll2.head.val){
    console.log("Head values not the same!");
    return false;
  }
  curr1 = sll1.head;
  curr2 = sll2.head;

  while(curr1.next || curr2.next){
    if (curr1.next == null || curr2.next == null){
      console.log("One list is longer than the other one!");
      return false;
    }

    if(curr1.next.val !== curr2.next.val){
      console.log("Node values not the same!");
      return false;
    }
    curr1 = curr1.next;
    curr2 = curr2.next;
  }
  console.log("All is well in lala land!");
  return true;
}

sll1 = new SingleList();
sll1.add(1).add(2).add(4).add(5).add(6).add(7).add(8)
// console.log(sList1)

sll2 = new SingleList();
sll2.add(1).add(2).add(4).add(5).add(6).add(7).add(8)
// console.log(sList2)

var x = compare(sll1, sll2)
console.log(x);
