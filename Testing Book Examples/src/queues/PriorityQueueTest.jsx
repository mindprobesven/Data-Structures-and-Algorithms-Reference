import React from 'react'
import PriorityQueue from './priorityQueue'

const PriorityQueueTest = () => {
  const priorityQueue = new PriorityQueue()

  priorityQueue.enqueue('John', 2)
  priorityQueue.enqueue('Jack', 1)
  priorityQueue.enqueue('Camila', 1)
  console.log(priorityQueue.print())

  return (
    <div>Priority Queue Test</div>
  )
}

export default PriorityQueueTest
