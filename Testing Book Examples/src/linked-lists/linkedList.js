class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

export default class LinkedList {
  constructor() {
    this.length = 0
    this.head = null
  }

  append = (element) => {
    const node = new Node(element)
    let current

    if (this.head === null) {
      this.head = node
    } else {
      current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.length += 1
  }

  insert = (position, element) => {
    if (position >= 0 && position <= this.length) {
      const node = new Node(element)
      let current = this.head
      let previous
      let index = 0

      if (position === 0) {
        node.next = current
        this.head = node
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        node.next = current
        previous.next = node
      }
      this.length += 1
      return true
    }
    return false
  }

  remove = (element) => {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }

  removeAt = (position) => {
    if (position > -1 && position < this.length) {
      let current = this.head
      let previous
      let index = 0

      if (position === 0) {
        this.head = current.next
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        previous.next = current.next
      }
      this.length -= 1
      return current.element
    }
    return null
  }

  toString = () => {
    let current = this.head
    let string = ''

    while (current) {
      string += current.element + (current.next ? '=>' : '')
      current = current.next
    }

    return string
  }

  indexOf = (element) => {
    let current = this.head
    let index = 0

    while (current) {
      if (element === current.element) {
        return index
      }
      index++
      current = current.next
    }

    return -1
  }

  isEmpty = () => this.length === 0

  size = () => this.length

  getHead = () => this.head
}
