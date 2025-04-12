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



