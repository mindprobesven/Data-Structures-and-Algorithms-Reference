import Dictionary from '../dictionaries/dictionary'
import Queue from '../queues/queue'

export default class GraphBFS {
  constructor() {
    this.vertices = []
    this.adjList = new Dictionary()
  }

  addVertex = (v) => {
    this.vertices.push(v)
    this.adjList.set(v, [])
  }

  addEdge = (v, w) => {
    this.adjList.get(v).push(w)
    this.adjList.get(w).push(v)
  }

  initializeColor = () => {
    const color = []
    for (let i = 0; i < this.vertices.length; i += 1) {
      color[this.vertices[i]] = 'white'
    }
    return color
  }

  bfs = (v, callback) => {
    const color = this.initializeColor()
    const queue = new Queue()
    queue.enqueue(v)

    while (!queue.isEmpty()) {
      const u = queue.dequeue()
      const neighbors = this.adjList.get(u)
      color[u] = 'grey'
      for (let i = 0; i < neighbors.length; i += 1) {
        const w = neighbors[i]
        if (color[w] === 'white') {
          color[w] = 'grey'
          queue.enqueue(w)
        }
      }
      color[u] = 'black'
      if (callback) {
        callback(u)
      }
    }
  }

  BFS = (v) => {
    const color = this.initializeColor()
    const queue = new Queue()
    const d = []
    const pred = []
    queue.enqueue(v)

    for (let i = 0; i < this.vertices.length; i += 1) {
      d[this.vertices[i]] = 0
      pred[this.vertices[i]] = null
    }

    while (!queue.isEmpty()) {
      const u = queue.dequeue()
      const neighbors = this.adjList.get(u)
      color[u] = 'grey'
      for (let i = 0; i < neighbors.length; i += 1) {
        const w = neighbors[i]
        if (color[w] === 'white') {
          color[w] = 'grey'
          d[w] = d[u] + 1
          pred[w] = u
          queue.enqueue(w)
        }
      }
      color[u] = 'black'
    }

    return { distances: d, predecessors: pred }
  }

  toString = () => {
    let s = ''

    for (let i = 0; i < this.vertices.length; i += 1) {
      s += `${this.vertices[i]} -> `
      const neighbors = this.adjList.get(this.vertices[i])
      for (let j = 0; j < neighbors.length; j += 1) {
        s += `${neighbors[j]} `
      }
      s += '\n'
    }

    return s
  }
}
