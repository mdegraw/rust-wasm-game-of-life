<script lang='ts'>
  import GameOfLife from './lib/GameOfLife.svelte';
  
  export let memory: WebAssembly.Memory;
</script>

<main>
  <h1>Game of Life</h1>
  <GameOfLife  memory={memory} />
</main>

<style lang="postcss">
  :root {
    height: 100%;
    width: 100%;
    @apply bg-green-400 flex flex-col font-mono items-center;
  }
</style>
