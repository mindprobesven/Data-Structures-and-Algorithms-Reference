import React from 'react'
import LinkedList from './linkedList'

const LinkedListTest = () => {
  const list = new LinkedList()
  list.append(1)
  list.append(2)
  list.append(3)
  list.append(4)
  console.log(list.toString())
  list.removeAt(0)
  console.log(list.toString())
  list.removeAt(1)
  console.log(list.toString())
  list.insert(0, 11)
  console.log(list.toString())
  list.insert(2, 33)
  console.log(list.toString())
  list.insert(4, 55)
  console.log(list.toString())
  console.log(list.indexOf(55))
  console.log(list.remove(33))
  console.log(list.toString())

  console.log(list.isEmpty())
  console.log(list.head)
  console.log(list.getHead())
  console.log(list.size())

  return (
    <div>Linked List Test</div>
  )
}

export default LinkedListTest
