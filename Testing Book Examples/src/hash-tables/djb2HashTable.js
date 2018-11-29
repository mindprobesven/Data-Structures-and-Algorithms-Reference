export default class HashTableNoCollision {
  constructor() {
    this.table = []
  }

  djbsHashCode = (key) => {
    let hash = 5381
    for (let i = 0; i < key.length; i += 1) {
      hash = hash * 33 + key.charCodeAt(i)
    }

    return hash % 1013
  }

  put = (key, value) => {
    const position = this.djbsHashCode(key)
    console.log(`${position} : ${key}`)
    this.table[position] = value
  }

  get = key => this.table[this.djbsHashCode(key)]

  remove = (key) => {
    this.table[this.djbsHashCode(key)] = undefined
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
