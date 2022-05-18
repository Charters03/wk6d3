const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
let current = rootNode;
while(current.left) {
  current = current.left;
}
return current.val;
}

function findMaxBST (rootNode) {
  let current = rootNode;
while(current.right) {
  current = current.right;
}
return current.val;
}

function findMinBT (rootNode) {
  let min = rootNode.val;

    if (rootNode.left) {
      min = Math.min(min, findMinBT(rootNode.left))
    } 
    
    if (rootNode.right) {
      min = Math.min(min, findMinBT(rootNode.right))
    }

    return min;
    }

function findMaxBT (rootNode) {
  let max = rootNode.val;

    if (rootNode.left) {
      max = Math.max(max, findMaxBT(rootNode.left))
    } 
    
    if (rootNode.right) {
      max = Math.max(max, findMaxBT(rootNode.right))
    }

    return max;
    }


function getHeight (rootNode) {
  // Your code here
}

function countNodes (rootNode) {
  // Your code here
}

function balancedTree (rootNode) {
  // Your code here
}

function getParentNode (rootNode, target) {
  // Your code here
}

function inOrderPredecessor (rootNode, target) {
  // Your code here
}


function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   set the parent that points to it to null

  // Case 2: Two children:
  //   set the value to its in-order predecessor, then delete the predecessor

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}