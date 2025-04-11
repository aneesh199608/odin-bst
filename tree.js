import Node from './node.js';

export default class Tree {\
    constructor(array) {
        this.root = this.buildTree([...new Set(array)].sort((a,b) => a - b));
    }
    buildTree(array) {

    }

    prettyPrint(node = this.root, prefix = "", isLeft = true) {
        if (node === null) return;
        if (node.right !== null) {
          this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
        if (node.left !== null) {
          this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
    }
}  
