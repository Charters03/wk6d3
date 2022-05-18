// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  insert(val, currentNode=this.root) {
    const newNode = new TreeNode(val);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    
    if (val < currentNode.val && currentNode.left) {
      this.insert(val, currentNode.left);
    } else if (val < currentNode.val && !currentNode.left) {
      currentNode.left = newNode;
    }

    if(val > currentNode.val && currentNode.right) {
      this.insert(val, currentNode.right); 
    } else if (val > currentNode.val && !currentNode.right) {
      currentNode.right = newNode;
    }
  }

  search(val, currentNode = this.root) {
    if (currentNode.val === val) return true;

    if (val < currentNode.val && currentNode.left) {
      return this.search(val, currentNode.left);
    } else if (val < currentNode.val && !currentNode.left) return false;

    if (val > currentNode.val && currentNode.right) {
    return this.search(val, currentNode.right);
    } else if (val > currentNode.val && !currentNode.right) return false;

  }


  preOrderTraversal(currentNode = this.root) {
    
    if (currentNode) {
      console.log(currentNode.val);
      this.preOrderTraversal(currentNode.left);
      this.preOrderTraversal(currentNode.right);
    }
  }


  inOrderTraversal(currentNode = this.root) {
    
    if (currentNode) {
    this.inOrderTraversal(currentNode.left);
    console.log(currentNode.val);
    this.inOrderTraversal(currentNode.right);
    }
  }


  postOrderTraversal(currentNode = this.root) {
    if (currentNode) {
      this.postOrderTraversal(currentNode.left);
      this.postOrderTraversal(currentNode.right);
      console.log(currentNode.val);
      }
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    const queue = [];
    if (this.root) queue.push(this.root);
    // if (!this.root) return;

    while (queue.length) {
      let firstInQueue = queue.shift();
      console.log(firstInQueue.val);
      if (firstInQueue.left) queue.push(firstInQueue.left);
      if (firstInQueue.right) queue.push(firstInQueue.right);
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    const stack = [];
    if (this.root) stack.push(this.root);
    // if (!this.root) return;

    while (stack.length) {
      let lastInStack = stack.pop();
      console.log(lastInStack.val);
      if (lastInStack.left) stack.push(lastInStack.left);
      if (lastInStack.right) stack.push(lastInStack.right);
    }
  }
}

// const tree = new BinarySearchTree();

// tree.insert(4);
// tree.insert(2);
// tree.insert(6);
// tree.insert(1);
// tree.insert(3);
// tree.insert(5);
// tree.insert(7);

// tree.breadthFirstTraversal();


module.exports = { BinarySearchTree, TreeNode };