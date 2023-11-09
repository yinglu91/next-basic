import React from 'react'

const ternary = () => {
  // *******************
  // 2. ternary operator
  // *******************
  // also see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator

  const numberOfMovies = 1
  const hasMovies = numberOfMovies > 0

  if (hasMovies) {
    console.log('We found movies.')
  } else {
    console.log('No movies found.')
  }

  {
    const numberOfMovies = 1
    const hasMovies = numberOfMovies > 0

    const result = hasMovies ? 'We found movies.' : 'No movies found.'
    console.log(result)
  }

  //-----
  {
    let age = 10
    let name = 'Pedro'

    if (age > 10) {
      name = 'Pedro'
    } else {
      name = 'Jack'
    }

    console.log(name)
    // 'Jack'
  }

  //-- better way
  {
    let age = 10
    let name = age > 10 ? 'Pedro' : 'Jack'

    console.log(name)
    // 'Jack'
  }

  // -- end of ternary operator
}

export default ternary
