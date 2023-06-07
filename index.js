
function ashPokemons(input) {
  let pokemons = 1; // the pokemon at the initial position

  let position = { x: 0, y: 0 }; // initial/actual position

  let visitedPosition = ['0, 0']; // initial/first position

  // ensure that when no instructions are given, the result is always 1 (the initial pokemon)
  if (input === '') return pokemons;

  // to be sure that the input has no whitespace and that all letters are uppercase
  const sequence = input.trim().toUpperCase();

  // movements
  for (let i = 0; i < sequence.length; i++) {
    let eachMovement = sequence[i];

    if (eachMovement === 'N') position.y++;
    else if (eachMovement === 'S') position.y--;
    else if (eachMovement === 'E') position.x++;
    else if (eachMovement === 'O') position.x--;

    // actual position in each loop
    let actualPosition = `${position.x}, ${position.y}`;

    // Check if Ash has been in that square
    let oldPosition = visitedPosition.filter((coords) => {
        return coords === actualPosition;
    })

    if(oldPosition.length === 0) pokemons++
    visitedPosition.push(actualPosition)
  }
  return pokemons;
}

module.exports = ashPokemons;
