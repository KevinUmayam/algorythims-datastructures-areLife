class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;
        this.tail = -1;
        this.head = -1;
    }

    isFull() {
        return this.currentLength === this.capacity;
    }

    isEmpty() {
        return this.currentLength === 0;
    }

    enqueue(element) {
        if (!this.isFull()) {
            this.tail = (this.tail + 1) % this.capacity;
            this.items[this.tail] = element;
            this.currentLength += 1;
            if (this.head === -1) {
                this.head = this.rear
            }
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        const item = this.items[this.head];
        this.head = (this.head + 1) % this.capacity;
        this.currentLength -= 1;
        if (this.isEmpty()) {
            this.head = -1;
            this.tail = -1;
        }
        return item;
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[this.head];
        }
        return null
    }

    print() {
        if (this.isEmpty()) {
            console.log('the queu is empty');
        } else {
            let i;
            let str = "";
            for (i = this.head; i !== this.tail; i = (i + 1) % this.capacity) {
                str += this.items[i] + " ";
            }
            str += this.items[i]
            console.log(str);
        }
    }
}

module.exports = CircularQueue