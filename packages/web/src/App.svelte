<script lang='ts'>
  import './styles/main.css';
  import GameOfLife from './lib/GameOfLife.svelte';
  
  export let memory: WebAssembly.Memory;
 
</script>

<main>
  <GameOfLife memory={memory} />
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .gol {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
