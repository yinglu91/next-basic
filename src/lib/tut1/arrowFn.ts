const arrowFn = () => {
  //--- array function definition
  const add = (a: number, b: number) => {
    return a + b
  }

  // call / invoke function
  const result = add(20, 3)

  console.log(result) // 5
}

export default arrowFn
