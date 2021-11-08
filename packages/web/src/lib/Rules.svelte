<style lang="postcss">
  a:link {
    @apply text-green-500;
  }

  a:visited {
    @apply text-green-700;
  }

  a:hover {
    @apply text-green-200;
  }

  .rule-list {
    @apply list-decimal;
    margin-left: 25px;
  }
</style>

<div>
  <h3>
    Conway's Game of Life (<a
      href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
      target="_blank">wikipedia</a
    >) is a cellular automaton devised by the British mathematician John Horton Conway.
  </h3>
  <h3>Rules:</h3>
  <ul class="rule-list">
    <li>
      Any live cell with fewer than two live neighbours dies, as if by underpopulation.
    </li>
    <li>
      Any live cell with two or three live neighbours lives on to the next generation.
    </li>
    <li>
      Any live cell with more than three live neighbours dies, as if by overpopulation.
    </li>
    <li>
      Any dead cell with exactly three live neighbours becomes a live cell, as if by
      reproduction.
    </li>
  </ul>
</div>
