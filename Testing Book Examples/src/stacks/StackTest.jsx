import React from 'react'
import Stack from './stack'

const StackTest = () => {
  const someStack = new Stack()

  console.log(someStack.isEmpty())
  someStack.push(5)
  someStack.push(8)
  console.log(someStack.toString())
  console.log(someStack.peek())
  someStack.push(11)
  console.log(someStack.size())
  console.log(someStack.isEmpty())
  someStack.push(15)
  someStack.pop()
  someStack.pop()
  console.log(someStack.size())

  return (
    <div>Stack Test</div>
  )
}

export default StackTest
