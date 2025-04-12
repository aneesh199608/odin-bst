import Node from './node.js';

export default class Tree {
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

    buildTree(array) {
        if (array.length === 0) return null;
      
        const mid = Math.floor(array.length / 2);
        const root = new Node(array[mid]);
      
        root.left = this.buildTree(array.slice(0, mid));
        root.right = this.buildTree(array.slice(mid + 1));
      
        return root;
      }

      insert(value, node = this.root) {
        if (!node) return new Node(value);
      
        if (value === node.value) {
          return node; // No duplicates
        } else if (value < node.value) {
          node.left = this.insert(value, node.left);
        } else {
          node.right = this.insert(value, node.right);
        }
      
        return node;
      }

      delete(value, node = this.root) {
        if (!node) return null;
      
        if (value < node.value) {
          node.left = this.delete(value, node.left);
        } else if (value > node.value) {
          node.right = this.delete(value, node.right);
        } else {
          // Case 1: No children
          if (!node.left && !node.right) {
            return null;
          }
      
          // Case 2: One child
          if (!node.left) return node.right;
          if (!node.right) return node.left;
      
          // Case 3: Two children
          let successor = this.findMin(node.right);
          node.value = successor.value;
          node.right = this.delete(successor.value, node.right);
        }
      
        return node;
      }
      
      findMin(node) {
        while (node.left !== null) {
          node = node.left;
        }
        return node;
      }

      find(value, node = this.root) {
        if (!node) return null;
      
        if (value === node.value) return node;
      
        if (value < node.value) {
          return this.find(value, node.left);
        } else {
          return this.find(value, node.right);
        }
      }

      levelOrder(callback) {
        const queue = [this.root];
        const result = [];
      
        while (queue.length > 0) {
          const node = queue.shift();
      
          if (callback) {
            callback(node);
          } else {
            result.push(node.value);
          }
      
          if (node.left) queue.push(node.left);
          if (node.right) queue.push(node.right);
        }
      
        return callback ? undefined : result;
      }

      inOrder(callback, node = this.root, result = []) {
        if (!node) return;
      
        this.inOrder(callback, node.left, result);
        callback ? callback(node) : result.push(node.value);
        this.inOrder(callback, node.right, result);
      
        if (!callback) return result;
      }

      preOrder(callback, node = this.root, result = []) {
        if (!node) return;
      
        callback ? callback(node) : result.push(node.value);
        this.preOrder(callback, node.left, result);
        this.preOrder(callback, node.right, result);
      
        if (!callback) return result;
      }

      postOrder(callback, node = this.root, result = []) {
        if (!node) return;
      
        this.postOrder(callback, node.left, result);
        this.postOrder(callback, node.right, result);
        callback ? callback(node) : result.push(node.value);
      
        if (!callback) return result;
      } 
      
}  
