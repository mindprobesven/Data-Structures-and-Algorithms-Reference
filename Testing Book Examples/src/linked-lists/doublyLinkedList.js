class Node {
  constructor(element) {
    this.element = element
    this.next = null
    this.prev = null
  }
}

export default class DoublyLinkedList {
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
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
      let index = 1

      if (position === 0) {
        if (!this.head) {
          this.head = node
          this.tail = node
        } else {
          node.next = current
          current.prev = node
          this.head = node
        }
      } else if (position === this.length) {
        current = this.tail
        current.next = node
        node.prev = current
        this.tail = node
      } else {
        while (index < position) {
          previous = current
          current = current.next
          index += 1
        }
        node.next = current
        previous.next = node

        current.prev = node
        node.prev = previous
      }
      this.length += 1
      return true
    }
    return false
  }

  remove = (element) => {
    const index = this.indexOf(element)
    console.log(index)
    return this.removeAt(index)
  }

  removeAt = (position) => {
    if (position > -1 && position < this.length) {
      let current = this.head
      let previous
      let index = 1
      console.log(`pos: ${position} length: ${this.length}`)
      if (position === 0) {
        this.head = current.next

        if (this.length === 1) {
          this.tail = null
        } else {
          this.head.prev = null
        }
      } else if (position === this.length) {
        console.log('here')
        current = this.tail
        this.tail = current.prev
        this.tail.next = null
      } else {
        while (index < position) {
          previous = current
          current = current.next
          index += 1
        }
        previous.next = current.next
        current.next.prev = previous
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
    let index = 1

    while (current) {
      if (element === current.element) {
        return index
      }
      index += 1
      current = current.next
    }

    return -1
  }

  isEmpty = () => this.length === 0

  size = () => this.length

  getHead = () => this.head
}
