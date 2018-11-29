import React from 'react'

const ES6WeakMapTest = () => {
  const map = new WeakMap()

  const ob1 = { name: 'Gandalf' }
  const ob2 = { name: 'John' }
  const ob3 = { name: 'Tyrion' }

  map.set(ob1, 'gandalf@email.com')
  map.set(ob2, 'johnsnow@email.com')
  map.set(ob3, 'tyrion@email.com')

  console.log(map.has(ob1))
  console.log(map.get(ob3))
  map.delete(ob2)
  console.log(map.get(ob2))

  return (
    <div>ES6 Map Test</div>
  )
}

export default ES6WeakMapTest
