import React from 'react'
import Stack from './stack'

const decimalToBinary = (decNumber) => {
  let decimal = decNumber
  const remStack = new Stack()
  let rem
  let binaryString = ''

  while (decimal > 0) {
    rem = Math.floor(decimal % 2)
    remStack.push(rem)
    decimal = Math.floor(decimal / 2)
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString()
  }

  return binaryString
}

const DecimalToBinary = () => {
  console.log(decimalToBinary(100))

  return (
    <div>Decimal to Binary</div>
  )
}

export default DecimalToBinary
