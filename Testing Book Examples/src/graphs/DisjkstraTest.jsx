import React from 'react'
import Dijkstra from './dijkstra'

const DisjkstraTest = () => {
  const disjkstra = new Dijkstra()

  console.log(disjkstra.init(0))

  return (
    <div>Disjkstra Test</div>
  )
}

export default DisjkstraTest
