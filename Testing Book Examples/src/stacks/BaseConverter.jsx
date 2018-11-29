import React from 'react'
import Stack from './stack'

const baseConverter = (decNumber, base) => {
  let decimal = decNumber
  const remStack = new Stack()
  let rem
  let binaryString = ''
  const digits = '0123456789ABCDEF'

  while (decimal > 0) {
    rem = Math.floor(decimal % base)
    remStack.push(rem)
    decimal = Math.floor(decimal / base)
  }

  while (!remStack.isEmpty()) {
    binaryString += digits[remStack.pop()]
  }

  return binaryString
}

const BaseConverter = () => {
  console.log(baseConverter(100345, 2))
  console.log(baseConverter(100345, 8))
  console.log(baseConverter(100345, 16))

  return (
    <div>Base Converter</div>
  )
}

export default BaseConverter
