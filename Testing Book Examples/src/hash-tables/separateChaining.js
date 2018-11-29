import LinkedList from '../linked-lists/linkedList'

class ValuePair {
  constructor(key, value) {
    this.key = key
    this.value = value
  }

  toString = () => `${this.key} - ${this.value}`
}

export default class SeparateChaining {
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
    const position = this.loseloseHashCode(key)

    if (this.table[position] === undefined) {
      this.table[position] = new LinkedList()
    }

    this.table[position].append(new ValuePair(key, value))
  }

  get = (key) => {
    const position = this.loseloseHashCode(key)

    if (this.table[position] !== undefined) {
      let current = this.table[position].getHead()

      while (current.next) {
        if (current.element.key === key) {
          return current.element.value
        }
        current = current.next
      }

      if (current.element.key === key) {
        return current.element.value
      }
    }
    return undefined
  }

  remove = (key) => {
    const position = this.loseloseHashCode(key)

    if (this.table[position] !== undefined) {
      let current = this.table[position].getHead()

      while (current.next) {
        if (current.element.key === key) {
          this.table[position].remove(current.element)
          if (this.table[position].isEmpty()) {
            this.table[position] = undefined
          }
          return true
        }
        current = current.next
      }

      if (current.element.key === key) {
        this.table[position].remove(current.element)
        if (this.table[position].isEmpty()) {
          this.table[position] = undefined
        }
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
