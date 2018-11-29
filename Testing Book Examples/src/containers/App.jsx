import React, { Component } from 'react'
// import StackTest from '../stacks/StackTest'
// import DecimalToBinary from '../stacks/DecimalToBinary'
// import BaseConverter from '../stacks/BaseConverter'
// import Hanoi from '../stacks/Hanoi'
// import QueueTest from '../queues/QueueTest'
// import PriorityQueueTest from '../queues/PriorityQueueTest'
// import HotPotato from '../queues/HotPotato'
// import LinkedListTest from '../linked-lists/LinkedListTest'
// import DoublyLinkedListTest from '../linked-lists/DoublyLinkedListTest'
// import SetTest from '../sets/SetTest'
// import DictionaryTest from '../dictionaries/DictionaryTest'
// import ES6MapTest from '../dictionaries/ES6MapTest'
// import ES6WeakMapTest from '../dictionaries/ES6WeakMapTest'
// import BinarySearchTreeTest from '../trees/BinarySearchTreeTest'
// import HashTablesTest from '../hash-tables/HashTablesTest'
// import SeparateChainingTest from '../hash-tables/SeparateChainingTest'
// import LinearProbingTest from '../hash-tables/LinearProbingTest'
// import HashTableNoCollisionTest from '../hash-tables/HashTableNoCollisionTest'
// import GraphDFSTest from '../graphs/GraphDFSTest'
// import GraphBFSTest from '../graphs/GraphBFSTest'
import DisjkstraTest from '../graphs/DisjkstraTest'

class App extends Component {
  componentDidMount = () => {
    console.log('Book Examples')
  }

  render = () => (
    <div>
      <DisjkstraTest />
    </div>
  )
}

/*
<StackTest />
<DecimalToBinary />
<BaseConverter />
<Hanoi />

<QueueTest />
<PriorityQueueTest />
<HotPotato />

<LinkedListTest />
<DoublyLinkedListTest />

<SetTest />
<DictionaryTest />
<ES6MapTest />
<ES6WeakMapTest />

<HashTablesTest />
<SeparateChainingTest />
<LinearProbingTest />
<HashTableNoCollisionTest />

<BinarySearchTreeTest />

<GraphBFSTest />
<GraphDFSTest />
*/

export default App
