import Dictionary from '../dictionaries/dictionary'

let time = 0

export default class GraphDFS {
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
  }

  initializeColor = () => {
    const color = []
    for (let i = 0; i < this.vertices.length; i += 1) {
      color[this.vertices[i]] = 'white'
    }
    return color
  }

  DFS = () => {
    const color = this.initializeColor()
    const d = []
    const f = []
    const p = []
    time = 0

    for (let i = 0; i < this.vertices.length; i += 1) {
      f[this.vertices[i]] = 0
      d[this.vertices[i]] = 0
      p[this.vertices[i]] = null
    }

    for (let i = 0; i < this.vertices.length; i += 1) {
      if (color[this.vertices[i]] === 'white') {
        this.DFSVisit(this.vertices[i], color, d, f, p)
      }
    }

    return {
      discovery: d,
      finished: f,
      predecessors: p,
    }
  }

  DFSVisit = (u, _color, _d, _f, _p) => {
    const color = _color
    const d = _d
    const f = _f
    const p = _p

    console.log(`Discovered ${u}`)
    color[u] = 'grey'
    d[u] = ++time

    const neighbors = this.adjList.get(u)
    for (let i = 0; i < neighbors.length; i += 1) {
      const w = neighbors[i]
      if (color[w] === 'white') {
        p[w] = u
        this.DFSVisit(w, color, d, f, p)
      }
    }
    color[u] = 'black'
    f[u] = ++time
    console.log(`Explored ${u}`)
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
