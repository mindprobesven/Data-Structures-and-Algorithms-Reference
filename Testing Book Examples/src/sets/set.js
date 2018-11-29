export default class Set {
  constructor() {
    this.items = {}
  }

  has = value => Object.prototype.hasOwnProperty.call(this.items, value)

  add = (value) => {
    if (!this.has(value)) {
      this.items[value] = value
      return true
    }
    return false
  }

  delete = (value) => {
    if (this.has(value)) {
      delete this.items[value]
      return true
    }
    return false
  }

  values = () => {
    const values = []

    Object.values(this.items).forEach((value) => {
      values.push(value)
    })

    return values
  }

  union = (otherSet) => {
    const unionSet = new Set()
    let values = this.values()

    for (let i = 0; i < values.length; i += 1) {
      unionSet.add(values[i])
    }

    values = otherSet.values()

    for (let i = 0; i < values.length; i += 1) {
      unionSet.add(values[i])
    }

    return unionSet
  }

  intersection = (otherSet) => {
    const intersectionSet = new Set()
    const values = this.values()

    for (let i = 0; i < values.length; i += 1) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i])
      }
    }

    return intersectionSet
  }

  difference = (otherSet) => {
    const differenceSet = new Set()
    const values = this.values()

    for (let i = 0; i < values.length; i += 1) {
      if (!otherSet.has(values[i])) {
        differenceSet.add(values[i])
      }
    }

    return differenceSet
  }

  subset = (otherSet) => {
    if (this.size() > otherSet.size()) {
      return false
    }
    const values = this.values()
    for (let i = 0; i < values.length; i += 1) {
      if (!otherSet.has(values[i])) {
        return false
      }
    }
    return true
  }

  size =() => Object.keys(this.items).length

  clear = () => {
    this.items = {}
    return false
  }
}
