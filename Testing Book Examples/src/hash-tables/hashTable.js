export default class HashTable {
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
    console.log(`${position} : ${key}`)
    this.table[position] = value
  }

  get = key => this.table[this.loseloseHashCode(key)]

  remove = (key) => {
    this.table[this.loseloseHashCode(key)] = undefined
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
