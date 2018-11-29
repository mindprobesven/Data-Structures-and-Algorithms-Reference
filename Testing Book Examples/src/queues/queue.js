const items = new WeakMap()

export default class Queue {
  constructor() {
    items.set(this, [])
  }

  enqueue = (element) => {
    const q = items.get(this)
    q.push(element)
  }

  dequeue = () => {
    if (this.isEmpty()) {
      return undefined
    }

    const q = items.get(this)
    const r = q.shift()
    return r
  }

  front = () => {
    const q = items.get(this)
    return q[0]
  }

  isEmpty = () => {
    const q = items.get(this)
    return q.length === 0
  }

  size = () => {
    const q = items.get(this)
    return q.length
  }

  print = () => {
    if (this.isEmpty()) {
      return undefined
    }

    const q = items.get(this)
    return q.toString()
  }
}
