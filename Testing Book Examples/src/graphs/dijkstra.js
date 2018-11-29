const graph = [
  [0, 2, 4, 0, 0, 0],
  [0, 0, 1, 4, 2, 0],
  [0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 2],
  [0, 0, 0, 3, 0, 2],
  [0, 0, 0, 0, 0, 0],
]

export default class Dijkstra {
  constructor() {
    this.dist = []
    this.visited = []
    this.length = graph.length
  }

  init = (src) => {
    for (let i = 0; i < this.length; i += 1) {
      this.dist[i] = Infinity
      this.visited[i] = false
    }

    this.dist[src] = 0

    console.log(this.dist)
    console.log(this.visited)

    for (let i = 0; i < this.length - 1; i += 1) {
      const u = this.minDistance(this.dist, this.visited)
      this.visited[u] = true

      for (let v = 0; v < this.length; v += 1) {
        if (!this.visited[v]
          && graph[u][v] !== 0
          && this.dist[u] !== Infinity
          && this.dist[u] + graph[u][v] < this.dist[v]) {
          this.dist[v] = this.dist[u] + graph[u][v]
        }
      }
    }
    return this.dist
  }

  minDistance = (_dist, _visited) => {
    const dist = _dist
    const visited = _visited

    let min = Infinity
    let minIndex = -1

    for (let v = 0; v < dist.length; v += 1) {
      if (visited[v] === false && dist[v] <= min) {
        min = dist[v]
        minIndex = v
      }
    }
    return minIndex
  }
}
