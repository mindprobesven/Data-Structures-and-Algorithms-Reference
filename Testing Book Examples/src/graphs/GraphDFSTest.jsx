import React from 'react'
import GraphDFS from './graphDFS'

/*
const printNode = (value) => {
  console.log(`Visited vertext: ${value}`)
}
*/

const GraphDFSTest = () => {
  const graph = new GraphDFS()
  const myVertices = ['A', 'B', 'C', 'D', 'E', 'F']

  for (let i = 0; i < myVertices.length; i += 1) {
    graph.addVertex(myVertices[i])
  }

  graph.addEdge('A', 'C')
  graph.addEdge('A', 'D')
  graph.addEdge('B', 'D')
  graph.addEdge('B', 'E')
  graph.addEdge('C', 'F')
  graph.addEdge('F', 'E')

  const result = graph.DFS()
  console.log(graph.toString())
  console.log(Object.entries(result.finished).sort((a, b) => b[1] - a[1]))

  return (
    <div>Graph DFS Test - Topological Sorting</div>
  )
}

export default GraphDFSTest
