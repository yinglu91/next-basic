// event handler -- anonymous function
// An anonymous function in JavaScript is a function that has no name, or more precisely, one that lacks a name

const MyComponent2 = () => {
  return (
    <button
      onClick={() => {
        console.log('Hellow World')
      }}
    >
      Click me
    </button>
  )
}

export default MyComponent2
