import Tree from './tree.js';

const arr = [5, 2, 8, 1, 7, 10, 3, 6];
const bst = new Tree(arr);
bst.prettyPrint();

bst.insert(9);
bst.insert(0);
bst.insert(8); //this is to check duplicated value insertion
bst.prettyPrint();

bst.delete(7); // Try deleting a node with two children
bst.delete(0); // Leaf node
bst.delete(8); // One-child node
bst.prettyPrint();

