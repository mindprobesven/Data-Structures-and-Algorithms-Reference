import React from 'react'
import DoublyLinkedList from './doublyLinkedList'

const DoublyLinkedListTest = () => {
  const list = new DoublyLinkedList()
  list.append(15)
  list.append(10)
  list.append(20)
  list.append(25)
  console.log(list.toString())
  list.removeAt(2)
  console.log(list.toString())
  list.insert(2, 99)
  list.insert(0, 55)
  console.log(list.toString())
  list.remove(99)
  console.log(list.toString())
  list.remove(99)
  console.log(list.toString())
  console.log(list.isEmpty())
  console.log(list.head)
  console.log(list.getHead())
  console.log(list.size())
  list.removeAt(0)
  console.log(list.toString())

  return (
    <div>Doubly Linked List Test</div>
  )
}

export default DoublyLinkedListTest
