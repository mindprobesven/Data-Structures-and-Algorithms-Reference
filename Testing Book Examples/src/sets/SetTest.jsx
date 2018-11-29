import React from 'react'
import Set from './set'

const SetTest = () => {
  const set = new Set()
  set.add(1)
  set.add(2)
  set.add(3)
  console.log(set.items)
  set.delete(2)
  console.log(set.items)
  console.log(set.size())
  console.log(set.values())
  console.log(set.has(3))
  console.log(set.has(2))

  const setA = new Set()
  setA.add(1)
  setA.add(2)
  setA.add(3)

  const setB = new Set()
  setB.add(3)
  setB.add(4)
  setB.add(5)
  setB.add(6)

  const unionAB = setA.union(setB)
  console.log(unionAB.values())
  const intersectionAB = setA.intersection(setB)
  console.log(intersectionAB.values())

  const differenceAB = setA.difference(setB)
  console.log(differenceAB.values())

  const setC = new Set()
  setB.add(4)
  setB.add(5)

  console.log(setA.subset(setB))
  console.log(setC.subset(setB))

  return (
    <div>Set Test</div>
  )
}

export default SetTest
