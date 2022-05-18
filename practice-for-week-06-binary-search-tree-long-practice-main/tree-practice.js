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
    /*
     const stack = [rootNode];
    let min = Infinity;
​
    while (stack.length) {
        const current = stack.pop();
​
        min = Math.min(min, current.val);
​
        if (current.left) stack.push(current.left);
        if (current.right) stack.push(current.right);
    }
​
    return min;

  */

function findMaxBT (rootNode) {
  let max = rootNode.val;

    if (rootNode.left) {
      max = Math.max(max, findMaxBT(rootNode.left))
    }

    if (rootNode.right) {
      max = Math.max(max, findMaxBT(rootNode.right))
    }

    return max;
//     const stack = [rootNode];
//     let max = -Infinity;
// ​
//     while (stack.length) {
//         const current = stack.pop();
// ​
//         max = Math.max(max, current.val);
// ​
//         if (current.left) stack.push(current.left);
//         if (current.right) stack.push(current.right);
//     }
// ​
//     return max;
    }


function getHeight (rootNode) {
  // Your code here
  if (!rootNode) return -1;

  let leftHigh = getHeight(rootNode.left)
  let rightHigh = getHeight(rootNode.right)
  console.log(leftHigh , rightHigh)

  if ( leftHigh > rightHigh){
    return (leftHigh + 1 )
  } else return (rightHigh + 1 )


  if(!rootNode.right && !rootNode.left) return 0;
return 1 + Math.max(getHeight(rootNode.left), getHeight(rootNode.right))

// const stack = [rootNode];
// ​
//     rootNode.level = 0;
//     let depth = 0;
// ​
//     while (stack.length) {
//         const current = stack.pop();
// ​
//         depth = Math.max(depth, current.level);
// ​
//         if (current.left) {
//             current.left.level = current.level + 1;
//             stack.push(current.left);
//         }
//         if (current.right) {
//             current.right.level = current.level + 1;
//             stack.push(current.right);
//         }
//     }
// ​
//     return depth;
// }
}

function countNodes (rootNode) {
  const stack = [rootNode];
  rootNode.nodeCount = 0;

  while(stack.length) {
    let current = stack.pop();
    rootNode.nodeCount++;
    if (current.left) {
      stack.push(current.left);
    }
    if (current.right) {
      stack.push(current.right);
    }
  }
  return rootNode.nodeCount;
}

function balancedTree (rootNode) {
  const stack = [rootNode];
    // rootNode.level = 0;
    let rightLevel = 0;
    let leftLevel = 0;
    // let depth = 0;
    while (stack.length) {
        const current = stack.pop();
        // depth = Math.max(depth, current.level);
        if (current.left) {
          leftLevel++;
          stack.push(current.left);
        }
        if (current.right) {
          rightLevel++;
          stack.push(current.right);
        }
    }
    return Math.abs(rightLevel - leftLevel) < 2;
}

function getParentNode (rootNode, target) {
  // Your code here
  if (rootNode.val === target) return null;

  const stack = [rootNode];
  while( stack.length){
  let current = stack.pop()

  if(current.left && current.left.val === target){
    return current
  }else if (current.left) stack.push(current.left)

  if (current.right && current.right.val === target){
    return current
  } else if (current.right) stack.push(current.right)

  }
  return undefined


}

function inOrderPredecessor (rootNode, target) {
  // Your code here
  let newArray =[]
  function rec (rootNode){
    if (rootNode) {
    rec(rootNode.left);
    newArray.push(rootNode.val)
    rec(rootNode.right);
    }
  }
  rec(rootNode)
  console.log(newArray)
  if (newArray[0] === target) return null
  if (newArray.includes(target)){
    console.log(newArray)
    return newArray[newArray.indexOf(target)-1]
  } else return undefined

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
