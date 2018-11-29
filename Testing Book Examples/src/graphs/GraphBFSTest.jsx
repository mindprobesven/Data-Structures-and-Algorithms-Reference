import React from 'react'
import Stack from '../stacks/stack'
import GraphBFS from './graphBFS'

/*
const printNode = (value) => {
  console.log(`Visited vertext: ${value}`)
}
*/

const GraphBFSTest = () => {
  const graph = new GraphBFS()
  const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']

  for (let i = 0; i < myVertices.length; i += 1) {
    graph.addVertex(myVertices[i])
  }

  graph.addEdge('A', 'B')
  graph.addEdge('A', 'C')
  graph.addEdge('A', 'D')
  graph.addEdge('C', 'D')
  graph.addEdge('C', 'G')
  graph.addEdge('D', 'G')
  graph.addEdge('D', 'H')
  graph.addEdge('B', 'E')
  graph.addEdge('B', 'F')
  graph.addEdge('E', 'I')

  console.log(graph.toString())

  const shortestPathA = graph.BFS(myVertices[0])
  console.log(shortestPathA)

  const fromVertex = myVertices[0]
  for (let i = 1; i < myVertices.length; i += 1) {
    const toVertex = myVertices[i]
    const path = new Stack()
    for (let v = toVertex; v !== fromVertex; v = shortestPathA.predecessors[v]) {
      path.push(v)
    }
    path.push(fromVertex)
    let s = path.pop()
    while (!path.isEmpty()) {
      s += ` - ${path.pop()}`
    }
    console.log(s)
  }

  return (
    <div>Graph BFS Test</div>
  )
}

export default GraphBFSTest
