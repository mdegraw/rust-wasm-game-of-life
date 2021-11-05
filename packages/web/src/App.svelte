<script lang='ts'>
  import './styles/main.css';
  import GameOfLife from './lib/GameOfLife.svelte';
  
  export let memory: WebAssembly.Memory;
</script>

<main>
  <div class="container">
    <h1>Game of Life</h1>
  </div>
  <GameOfLife memory={memory} />
</main>

<style>
  :root {
    height: 100%;
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  body {
    @apply bg-green-500;
  }
</style>
