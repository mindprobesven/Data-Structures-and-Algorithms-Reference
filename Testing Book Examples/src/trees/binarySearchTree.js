class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

export default class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert = (key) => {
    const newNode = new Node(key)

    if (this.root === null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  insertNode = (node, newNode) => {
    const currentNode = node

    if (newNode.key < currentNode.key) {
      if (currentNode.left === null) {
        currentNode.left = newNode
      } else {
        this.insertNode(currentNode.left, newNode)
      }
    } else {
      if (currentNode.right === null) {
        currentNode.right = newNode
      } else {
        this.insertNode(currentNode.right, newNode)
      }
    }
  }

  inOrderTraverse = (callback) => {
    this.inOrderTraverseNode(this.root, callback)
  }

  inOrderTraverseNode = (node, callback) => {
    if (node !== null) {
      this.inOrderTraverseNode(node.left, callback)
      callback(node.key)
      this.inOrderTraverseNode(node.right, callback)
    }
  }

  preOrderTraverse = (callback) => {
    this.preOrderTraverseNode(this.root, callback)
  }

  preOrderTraverseNode = (node, callback) => {
    if (node !== null) {
      callback(node.key)
      this.preOrderTraverseNode(node.left, callback)
      this.preOrderTraverseNode(node.right, callback)
    }
  }

  postOrderTraverse = (callback) => {
    this.postOrderTraverseNode(this.root, callback)
  }

  postOrderTraverseNode = (node, callback) => {
    if (node !== null) {
      this.preOrderTraverseNode(node.left, callback)
      this.preOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }

  min = () => this.minNode(this.root)

  minNode = (rootNode) => {
    let node = rootNode

    if (node) {
      while (node && node.left !== null) {
        node = node.left
      }
      return node.key
    }
    return null
  }

  max = () => this.maxNode(this.root)

  maxNode = (rootNode) => {
    let node = rootNode

    if (node) {
      while (node && node.right !== null) {
        node = node.right
      }
      return node.key
    }
    return null
  }

  search = key => this.searchNode(this.root, key)

  searchNode = (node, key) => {
    if (node === null) {
      return false
    }

    if (key < node.key) {
      return this.searchNode(node.left, key)
    }

    if (key > node.key) {
      return this.searchNode(node.right, key)
    }

    return true
  }

  remove = (key) => {
    this.root = this.removeNode(this.root, key)
  }

  findMinNode = (node) => {
    let currentNode = node

    while (currentNode && currentNode.left !== null) {
      currentNode = currentNode.left
    }

    return currentNode
  }

  removeNode = (node, key) => {
    let currentNode = node

    if (currentNode === null) {
      return null
    }

    if (key < currentNode.key) {
      currentNode.left = this.removeNode(currentNode.left, key)
      console.log(currentNode.left)
      return currentNode
    }

    if (key > currentNode.key) {
      currentNode.right = this.removeNode(currentNode.right, key)
      return currentNode
    }

    if (currentNode.left === null && currentNode.right === null) {
      currentNode = null
      return null
    }

    if (currentNode.left === null) {
      currentNode = node.right
      return currentNode
    }

    if (currentNode.right === null) {
      currentNode = node.left
      return currentNode
    }

    const aux = this.findMinNode(currentNode.right)
    currentNode.key = aux.key
    currentNode.right = this.removeNode(currentNode.right, aux.key)
    return currentNode
  }
}
