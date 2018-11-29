import React from 'react'
import BinarySearchTree from './binarySearchTree'

const printNode = (value) => {
  console.log(value)
}

const BinarySearchTreeTest = () => {
  const tree = new BinarySearchTree()
  tree.insert(11)
  tree.insert(7)
  tree.insert(15)
  tree.insert(5)
  tree.insert(3)
  tree.insert(9)
  tree.insert(8)
  tree.insert(10)
  tree.insert(13)
  tree.insert(12)
  tree.insert(14)
  tree.insert(20)
  tree.insert(18)
  tree.insert(25)
  tree.insert(6)

  console.log(tree.root)

  tree.inOrderTraverse(printNode)
  // tree.preOrderTraverse(printNode)
  // tree.postOrderTraverse(printNode)

  console.log('-----')
  console.log(tree.min())
  console.log(tree.max())

  console.log('-----')
  console.log(tree.search(1) ? 'Key 1 found.' : 'Key 1 not found.')
  console.log(tree.search(8) ? 'Key 8 found.' : 'Key 8 not found.')

  console.log(tree.remove(15))
  tree.inOrderTraverse(printNode)

  return (
    <div>Binary Search Tree Test</div>
  )
}

export default BinarySearchTreeTest
