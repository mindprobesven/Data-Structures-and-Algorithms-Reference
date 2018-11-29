import React from 'react'
import Queue from './queue'

const hotPotato = ((nameList, num) => {
  const queue = new Queue()

  nameList.map((name) => {
    queue.enqueue(name)
    return false
  })

  let eliminated = ''

  while (queue.size() > 1) {
    for (let i = 0; i < num; i += 1) {
      queue.enqueue(queue.dequeue())
    }

    eliminated = queue.dequeue()
    console.log(`${eliminated} was eliminated from the game.`)
    console.log(`${queue.size()} player(s) left.`)
  }

  return queue.dequeue()
})

const HotPotato = () => {
  const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']
  const winner = hotPotato(names, 7)
  console.log(`Winner is: ${winner}`)

  return (
    <div>Hot Potato Game</div>
  )
}

export default HotPotato
