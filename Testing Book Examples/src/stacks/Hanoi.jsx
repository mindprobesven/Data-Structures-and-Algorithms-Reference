import React from 'react'
import Stack from './stack'

const towerOfHanoi = (marker, plates, source, helper, dest, sourceName, helperName, destName, moves = []) => {
  console.log(`marker1: ${marker} - Dest: ${destName} - Source: ${sourceName}`)
  console.log(`${marker} - function: ${plates}`)
  if (plates <= 0) {
    return moves
  }

  console.log(plates === 1)
  if (plates === 1) {
    // console.log(plates)
    console.log(`${marker} - 1 = From ${sourceName} to ${destName}`)
    dest.push(source.pop())
    const move = {}
    move[sourceName] = source.toString()
    move[helperName] = helper.toString()
    move[destName] = dest.toString()
    moves.push(move)
    console.log(move)
  } else {
    console.log(`marker2: ${marker} - Dest: ${destName} - Source: ${sourceName}`)
    // console.log(`rec1: ${plates}`)
    towerOfHanoi('first', plates - 1, source, dest, helper, sourceName, destName, helperName, moves)
    // console.log(`rec2: ${plates}`)
    console.log(`${marker} - !1 = From ${sourceName} to ${destName}`)
    dest.push(source.pop())
    const move = {}
    move[sourceName] = source.toString()
    move[helperName] = helper.toString()
    move[destName] = dest.toString()
    moves.push(move)
    console.log(move)
    // console.log(`rec3: ${plates}`)
    towerOfHanoi('second', plates - 1, helper, source, dest, helperName, sourceName, destName, moves)
    // console.log(plates)
  }
  return moves
}

function hanoiStack(plates) {
  const source = new Stack()
  const dest = new Stack()
  const helper = new Stack()

  for (let i = plates; i > 0; i -= 1) {
    source.push(i)
  }

  return towerOfHanoi('init', plates, source, helper, dest, 'source', 'helper', 'dest')
}

const Hanoi = () => {
  console.log(hanoiStack(3))

  return (
    <div>Hanoi</div>
  )
}

export default Hanoi
