class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    };

    push(val) {
        let newNode = new Node(val);
        if(this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        };
        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if(this.length === 0) {
            this.head === null;
            this.tail = null;
        }
    }

    shift() {
        if(!this.head) return undefined;
        let chopped = this.head;
        this.head = this.head.next;
        chopped.next = null;
        this.length--;

        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
    }
    unshift(val) {
        let newNode = new Node(val);
        let prevHead = this.head;
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode;
            newNode.next = prevHead;
        }

        this.length++;
     }
     get(index) {
        if(index < 0 || index >= this.length) return null;
        let current = this.head;
        let count = 0;
        while(index !== count) {
            current = current.next;
            count++;
        }
        return current;
     }
     set(ind, val) {
        let foundNode = this.get(ind);
        if(foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
     }
     insert(ind, val) {
        if(ind < 0 || ind > this.length) return undefined;
        if(ind === 0) return this.unshift(val);
        if(ind === this.length) return this.push(val);

        let newNode = new Node(val);
        let prev = this.get(ind - 1);
        let after = prev.next;

        prev.next = newNode;
        newNode.next = after;

        this.length++;
     }
     remove(ind) {
         if(ind < 0 || ind >= this.length) return undefined;
         if(ind === 0) return this.unshift();
         if(ind === this.length - 1) return this.pop();

         let chopped = this.get(ind);
         let before = this.get(ind - 1);
         let after = chopped.next;

         before.next = after;
         chopped.next = null;
         this.length;
     }
     reverse() {
         let node = this.head;
         this.head = this.tail;
         this.tail = node;
        let next;
        let prev = null;

        for(let i = 0; i < this.length; i ++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
     }

}