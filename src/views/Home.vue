<template>
  <div class="home">
    <h1>The Ultimate Rubik's Cube Algorithm Hub</h1>
    <h3>Here is a list of all of the algorithms required for the last two steps of solving the Rubik's Cube.</h3>
    <h3>Click on "Oll" or "Pll" to get started!</h3>
    <br>
    <div id="notation">
      <h2>Notation</h2>
      <ul>
        <li>U - rotate the "up" side of the cube clockwise</li>
        <li>U' - rotate the "up" side of the cube counter-clockwise</li>
        <li>D - rotate the "down" side of the cube clockwise</li>
        <li>D' - rotate the "down" side of the cube counter-clockwise</li>
        <li>R - rotate the "right" side of the cube clockwise</li>
        <li>R' - rotate the "right" side of the cube counter-clockwise</li>
        <li>L - rotate the "left" side of the cube clockwise</li>
        <li>L' - rotate the "left" side of the cube counter-clockwise</li>
        <li>F - rotate the "front" side of the cube clockwise</li>
        <li>F' - rotate the "front" side of the cube counter-clockwise</li>
        <li>B - rotate the "back" side of the cube clockwise</li>
        <li>B' - rotate the "back" side of the cube counter-clockwise</li>
        <li>M - rotate the "middle" slice of the cube clockwise</li>
        <li>M' - rotate the "middle" slice of the cube counter-clockwise</li>
        <li>x - up-rotate the entire cube on its x-axis</li>
        <li>x' - down-rotate the entire cube on its x-axis</li>
        <li>y - rotate the entire cube on its y-axis clockwise</li>
        <li>y' - rotate the entire cube on its y-axis counter-clockwise</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
  li {
    list-style-type: none;
    padding: 5px;
    font-weight: bold;
  }

  #notation {
    border-style: solid;
    border-width: 5px;
    border-radius: 12px;
    border-color: red;
    margin: 20px;
  }

</style>
