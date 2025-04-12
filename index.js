import Tree from './tree.js';

const arr = [5, 2, 8, 1, 7, 10, 3, 6];
const bst = new Tree(arr);
bst.prettyPrint();

bst.insert(9);
bst.insert(0);
bst.insert(8); //this is to check duplicated value insertion
bst.prettyPrint();

bst.delete(7); 
bst.delete(0); 
bst.delete(8);
bst.prettyPrint(); 

console.log('Find 5:', bst.find(5));   
console.log('Find 20:', bst.find(20)); 

console.log('Level Order:', bst.levelOrder());     
console.log('InOrder:', bst.inOrder());          
console.log('PreOrder:', bst.preOrder());
console.log('PostOrder:', bst.postOrder());

console.log('Height of root:', bst.height()); // Full tree height
const node5 = bst.find(5);
console.log('Height of node 5:', bst.height(node5));

const node1 = bst.find(6);
console.log('Depth of node 1:', bst.depth(node1));

const node10 = bst.find(10);
console.log('Depth of node 10:', bst.depth(node10));

console.log('Is tree balanced?', bst.isBalanced()); // true or false

bst.insert(11);
bst.insert(12);
bst.insert(13);
bst.insert(14);

console.log('Is balanced (before)?', bst.isBalanced()); // false
bst.prettyPrint();

bst.rebalance();

console.log('Is balanced (after)?', bst.isBalanced()); // true
bst.prettyPrint();






