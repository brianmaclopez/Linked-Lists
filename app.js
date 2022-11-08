const { Node, LinkedList } = require('./linked-list.js'); 

const obj = {a:5, b:6};
const obj1 = {a:7, b:8};
const obj2 = {a:9, b:10};
const obj3 = {a:10, b:11};
const node = new Node(obj3);

const list = new LinkedList(obj);
list.add(obj1);
list.add(obj2);
list.insertBefore(obj2, node);
console.log(list.index(obj2));
const elements = list.traverse();
console.log(elements);