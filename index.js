import Tree from './tree.js';

// Helper: Generate an array of random numbers < 100
function generateRandomArray(size = 15, max = 100) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * max));
}

// Step 1: Create a BST from random numbers
const randomArray = generateRandomArray();
const bst = new Tree(randomArray);
console.log('Initial tree:');
bst.prettyPrint();

// Step 2: Check if balanced
console.log('Is tree balanced?', bst.isBalanced());

// Step 3: Print traversals
console.log('Level Order:', bst.levelOrder());
console.log('Pre Order:', bst.preOrder());
console.log('In Order:', bst.inOrder());
console.log('Post Order:', bst.postOrder());

// Step 4: Unbalance the tree with numbers > 100
bst.insert(101);
bst.insert(150);
bst.insert(200);
bst.insert(125);
bst.insert(175);

console.log('\nAfter inserting nodes > 100:');
bst.prettyPrint();
console.log('Is tree balanced?', bst.isBalanced());

// Step 5: Rebalance the tree
bst.rebalance();
console.log('\nAfter rebalancing:');
bst.prettyPrint();
console.log('Is tree balanced?', bst.isBalanced());

// Step 6: Final traversals
console.log('Level Order:', bst.levelOrder());
console.log('Pre Order:', bst.preOrder());
console.log('In Order:', bst.inOrder());
console.log('Post Order:', bst.postOrder());
