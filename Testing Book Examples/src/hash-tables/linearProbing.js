class ValuePair {
  constructor(key, value) {
    this.key = key
    this.value = value
  }

  toString = () => `${this.key} - ${this.value}`
}

export default class LinearProbing {
  constructor() {
    this.table = []
  }

  loseloseHashCode = (key) => {
    let hash = 0
    for (let i = 0; i < key.length; i += 1) {
      hash += key.charCodeAt(i)
    }

    return hash % 37
  }

  put = (key, value) => {
    let position = this.loseloseHashCode(key)

    if (this.table[position] === undefined) {
      this.table[position] = new ValuePair(key, value)
    } else {
      let index = ++position
      while (this.table[index] !== undefined) {
        index += 1
      }
      this.table[index] = new ValuePair(key, value)
    }
  }

  get = (key) => {
    let position = this.loseloseHashCode(key)

    if (this.table[position] !== undefined) {
      if (this.table[position].key === key) {
        return this.table[position].value
      }

      let index = ++position
      while (this.table[index] === undefined
        || this.table[index].key !== key) {
        index += 1
      }

      if (this.table[index].key === key) {
        return this.table[index].value
      }
    }
    return undefined
  }

  remove = (key) => {
    let position = this.loseloseHashCode(key)

    if (this.table[position] !== undefined) {
      if (this.table[position].key === key) {
        this.table[position] = undefined
        return true
      }

      let index = ++position
      while (this.table[index] === undefined
        || this.table[index].key !== key) {
        index += 1
      }

      if (this.table[index].key === key) {
        this.table[index] = undefined
        return true
      }
    }
    return false
  }

  print = () => {
    this.table.map((item, i) => {
      if (this.table[i] !== undefined) {
        console.log(`${i}: ${this.table[i]}`)
      }
      return false
    })
  }
}
