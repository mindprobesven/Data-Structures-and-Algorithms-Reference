import React from 'react'
import Queue from './queue'

const QueueTest = () => {
  const testQueue = new Queue()
  testQueue.enqueue('Sven')
  testQueue.enqueue('Barbara')
  testQueue.enqueue('Valentina')
  console.log(testQueue.print())
  console.log(testQueue.front())
  console.log(testQueue.size())
  console.log(`Dequeue: ${testQueue.dequeue()}`)
  console.log(`Dequeue: ${testQueue.dequeue()}`)
  console.log(`Dequeue: ${testQueue.dequeue()}`)
  console.log(`Dequeue: ${testQueue.dequeue()}`)
  console.log(`Dequeue: ${testQueue.dequeue()}`)
  console.log(testQueue.print())
  testQueue.enqueue('Sven')
  testQueue.enqueue('Barbara')
  console.log(testQueue.print())

  return (
    <div>Queue Test</div>
  )
}

export default QueueTest
