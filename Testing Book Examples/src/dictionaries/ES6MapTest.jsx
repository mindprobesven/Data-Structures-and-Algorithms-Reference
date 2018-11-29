import React from 'react'

const ES6MapTest = () => {
  const map = new Map()

  map.set('Gandalf', 'gandalf@email.com')
  map.set('John', 'johnsnow@email.com')
  map.set('Tyrion', 'tyrion@email.com')

  console.log(map.has('Gandalf'))
  console.log(map.size)
  console.log(map.keys())
  console.log(map.values())
  console.log(map.entries())
  console.log(map.get('Tyrion'))
  console.log(map.delete('John'))
  console.log(map.keys())
  console.log(map.values())

  return (
    <div>ES6 Map Test</div>
  )
}

export default ES6MapTest
