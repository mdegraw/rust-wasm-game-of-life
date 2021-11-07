<script lang='ts'>
  import './styles/main.css';
  // import { isRandom } from './utils/random.store';
  import { isPlaying } from './utils/play-pause.store';

  import GameOfLife from './lib/GameOfLife.svelte';
  
  export let memory: WebAssembly.Memory;
  let isRandomGame = false;

  // const randomizeClick = (event: any) => {
  //   console.log('click')
  //   console.log(event)
  //   isRandom.update((v) => {
  //     console.log('upodate valk');
  //     console.log(v)
  //     isRandomGame = !v;
  //     return !v;
  //   });
  // };
</script>

<main>
  <div class="flex-container">
    <h1>Game of Life</h1>
  </div>

  <button on:click={() => isPlaying.update(playing => !playing)}>
    { $isPlaying ? "Pause" :  "Play"}
  </button>

  <GameOfLife memory={memory} isRandom={true} />
</main>

<style>
  :root {
    height: 100%;
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
  }
</style>
