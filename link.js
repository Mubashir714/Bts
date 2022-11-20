class node {
  constructor(data, left = 0, right = 0) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class bst {
  constructor() {
    this.root = null;
  }
}

add(data);
{
  node = this.root;
  
  if (node === null) {
      this.root = new Node(data);
      return;
} 
else 
        {

           const searchtree = function (data) {
             
          if (data < node.data) {
             
                
                  if (node.left === null) {
                   node.left = new Node(data);
                    return;
                 } 
                 else if (node.left !== null) {
                     return searchtree(node.left);
                  }
         }
            else if(data > node.data){
                if(node.right===null){
                    node.right=new Node(data)
                    return;
                }
                         else if(node.right!==null){
                              return searchtree(node.right)
                         }
              }
              else{
                return null;
              }

    };
    return searchtree(node)
  }
}

// function linklist ()
//     {
//         this.head=null;
//     }

// function node(value)
//     {
//         this.value=value;
//         this.next=null;
//     }
//     this.size =function(){
//            this.length;
//     }

//  this.add=function(value){
//     const Node=new node(value)
//     if(head==null){
//         head=Node

//     }

//     else{
//         var currentnode=currentnode.next
//         while(currentnode.next){

//             currentnode=currentnode.next
//          }
//          currentnode.next =Node
//          length++
//         }
//     }

//     const list=new node(20)

// {

//     console.log(list);
// }
