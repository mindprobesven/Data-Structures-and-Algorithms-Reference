import React from 'react'
import Dictionary from './dictionary'

const DictionaryTest = () => {
  const dictionary = new Dictionary()

  dictionary.set('Gandalf', 'gandalf@email.com')
  dictionary.set('John', 'johnsnow@email.com')
  dictionary.set('Tyrion', 'tyrion@email.com')

  console.log(dictionary.has('Gandalf'))
  console.log(dictionary.size())
  console.log(dictionary.keys())
  console.log(dictionary.values())
  console.log(dictionary.get('Tyrion'))
  console.log(dictionary.delete('John'))
  console.log(dictionary.keys())
  console.log(dictionary.values())
  console.log(dictionary.getItems())

  return (
    <div>Dictionary Test</div>
  )
}

export default DictionaryTest
