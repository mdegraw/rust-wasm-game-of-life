<script lang='ts'>
  import './styles/main.css';
  import GameOfLife from './lib/GameOfLife.svelte';
  
  export let memory: WebAssembly.Memory;
</script>

<main>
  <div class="container">
    <h1>Game of Life</h1>
  </div>
  <div class="input-container">
    <div class="mb-3 pt-0">
      <input type="text" placeholder="Start" class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
    </div>
    <div class="mb-3 pt-0">
      <input type="text" placeholder="Placeholder" class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
    </div>
  </div>
  <GameOfLife memory={memory} />
</main>

<style>
  :root {
    height: 100%;
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
  }

  .input-container{
    margin-top: 11px;
  }
</style>
