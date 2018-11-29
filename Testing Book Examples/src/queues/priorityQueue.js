export default class PriorityQueue {
  constructor() {
    this.items = []
  }

  enqueue = (element, priority) => {
    const { items } = this
    const queueElement = {
      element,
      priority,
    }

    let added = false

    for (let i = 0; i < items.length; i += 1) {
      if (queueElement.priority < items[i].priority) {
        items.splice(i, 0, queueElement)
        added = true
        break
      }
    }

    if (!added) {
      items.push(queueElement)
    }
  }

  print = () => {
    const result = this.items.map(item => item)
    return result
  }
}
