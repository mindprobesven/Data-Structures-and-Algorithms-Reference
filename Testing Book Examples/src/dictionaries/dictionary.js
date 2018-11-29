export default class Dictionary {
  constructor() {
    this.items = {}
  }

  size = () => Object.keys(this.items).length

  has = key => Object.prototype.hasOwnProperty.call(this.items, key)

  set = (key, value) => {
    this.items[key] = value
    return false
  }

  delete = (key) => {
    if (this.has(key)) {
      delete this.items[key]
      return true
    }
    return false
  }

  get = (key) => {
    if (this.has(key)) {
      return this.items[key]
    }
    return undefined
  }

  values = () => {
    const values = []
    Object.values(this.items).forEach((value) => {
      values.push(value)
    })

    return values
  }

  keys = () => Object.keys(this.items)

  getItems = () => this.items
}
