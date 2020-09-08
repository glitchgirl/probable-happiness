//make a node
class Node {
    constructor(val){
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    //make an empty "list"
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //add a value to the end
    push(val){
        let node = new Node(val)
        if(!this.head){
            this.head = node;
            this.tail = node;
        } else {
            let temp = this.tail;
            this.tail = node;
            node.prev = temp;
            temp.next = node;
        }
        this.length++;
        return this;
    }
    //remove a value from the end
    pop(){
        if(!this.head) return undefined;
        let temp = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = temp.prev;
            this.tail.next = null;
            temp.prev = null; 
        }
        this.length --;
    }
    //add a value to the begining
    unshift(val){
        let node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = node;
        } else {
            let temp = this.head; 
            node.next = temp;
            temp.prev = node;
        }
        this.length ++;
        return this;
    }
    //remove a value from the begining
    shift(val){
        if(!this.head) return undefined;
        let temp = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = temp.next;
            this.head.prev = null;
            temp.next = null;
        }
        this.length --;
        return this;
    }
    //add a value at any place within the list - question if given this do i need push/unshift? thoughts?
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        let node = new Node(val);
        //if not not (if postive return this)
        if(index === 0) return !!this.unshift(node);
        if(index === this.length) return !!this.push(node);

        let current = this.head;
        let counter = 0;

        while(count != index){
            current = current.next;
            counter++;
        }
        let temp = current;
        let prev = temp.prev;
        prev.next = node;
        node.next = temp;
        node.prev = prev;
        this.length++;
        return true; 
    }
    //remove a value from any place within the list
    remove(index){
        //remember where the end of the list iss
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.shift();
        if(index === this.length - 1) return !!this.pop();

        let current = this.head;
        let counter = 0;

        while(counter !== index){
            current = current.next;
            counter++;
        }

        let prev = current.prev;
        let next = current.next;
        prev.next = next;
        next.prev = prev;
        return true; 
    }
    //nice way to see list content
    print(){
        let arr = [];
        let current = this.head;
        let counter = 0;

        while(counter < this.length){
            arr.push(current.val);
            current = current.next;
            counter++;
        }
        console.log(arr);
    }
    //flip the whole list
    reverse(){
        if(!this.head) return undefined;
        //use node as a holder elemenet
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        //at this point our pointers are still hanging out in the same place

        let counter = 0;
        let prev = null;
        let next;

        while(counter < this.length){
            //still based off of orginal head
            next = node.next; 
            node.prev = next;
            node.next = prev;
            prev = node;
            node = next;
            counter++;
        }
        return this;
    }
}

let list = new DoublyLinkedList;
/*run through var examples of unshift/pop etc console.log(list); 
show when shows undefined vs null item
show when returning boolean vs actually doing it 
*/

list.push(5);
list.push(10);
console.log(list);