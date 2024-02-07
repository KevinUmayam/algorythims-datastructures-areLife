const LinkedList = require('./linkedLists')

const ll = LinkedList.fromValues(10, 20, 30, 40);
ll.print()
console.log(ll.getByIndex(2).value);
ll.removeHead()
ll.print()
