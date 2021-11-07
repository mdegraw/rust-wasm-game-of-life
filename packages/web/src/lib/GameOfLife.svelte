<style lang="postcss" scoped>
  .gol-btn {
    @apply w-5 flex text-sm items-center justify-center border border-black shadow-offset-black bg-yellow-200 mb-4;
    /* @apply font-bold; */
    width: 65px;
  }

  .gol-btn:hover {
    @apply hover:bg-yellow-300;
  }
</style>

<script lang="ts">
  import { onMount } from 'svelte';
  import { Universe, Cell } from 'rust-wasm-game-of-life';

  export let memory: WebAssembly.Memory;
  let isRandom = true;
  let isPlaying = true;
  let setIsPlaying: () => void;

  onMount(() => {
    const CELL_SIZE = 5; // px
    const GRID_COLOR = '#CCCCCC';
    const DEAD_COLOR = '#FFFFFF';
    const ALIVE_COLOR = '#000000';

    // Construct the universe, and get its width and height.
    const universe = Universe.new(isRandom);
    const width = universe.width();
    const height = universe.height();

    // Give the canvas room for all of our cells and a 1px border
    // around each of them.
    const canvas = document.getElementById('game-of-life-canvas') as HTMLCanvasElement;

    canvas.height = (CELL_SIZE + 1) * height + 1;
    canvas.width = (CELL_SIZE + 1) * width + 1;

    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    let animationId: number | null = null;

    const drawGrid = () => {
      ctx.beginPath();
      ctx.strokeStyle = GRID_COLOR;

      // Vertical lines.
      for (let i = 0; i <= width; i++) {
        ctx.moveTo(i * (CELL_SIZE + 1) + 1, 0);
        ctx.lineTo(i * (CELL_SIZE + 1) + 1, (CELL_SIZE + 1) * height + 1);
      }

      // Horizontal lines.
      for (let j = 0; j <= height; j++) {
        ctx.moveTo(0, j * (CELL_SIZE + 1) + 1);
        ctx.lineTo((CELL_SIZE + 1) * width + 1, j * (CELL_SIZE + 1) + 1);
      }

      ctx.stroke();
    };

    const getIndex = (row: number, column: number) => row * width + column;

    const drawCells = () => {
      const cellsPtr = universe.cells();
      const cells = new Uint8Array(memory.buffer, cellsPtr, width * height);

      ctx.beginPath();

      for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
          const idx = getIndex(row, col);

          ctx.fillStyle = cells[idx] === Cell.Dead ? DEAD_COLOR : ALIVE_COLOR;

          ctx.fillRect(
            col * (CELL_SIZE + 1) + 1,
            row * (CELL_SIZE + 1) + 1,
            CELL_SIZE,
            CELL_SIZE
          );
        }
      }

      ctx.stroke();
    };

    const renderLoop = () => {
      // debugger;
      if (isPlaying) {
        drawGrid();
        drawCells();

        universe.tick();

        animationId = requestAnimationFrame(renderLoop);
      }
    };

    const play = () => {
      renderLoop();
    };

    const pause = () => {
      if (typeof animationId === 'number') {
        cancelAnimationFrame(animationId);
      }

      animationId = null;
    };

    setIsPlaying = () => {
      isPlaying = !isPlaying;

      if (isPlaying) {
        play();
      } else {
        pause();
      }
    };
    play();
  });
</script>

<button class="gol-btn" on:click={setIsPlaying}>
  {isPlaying ? 'Pause' : 'Play'}
</button>
<canvas class="game-of-life-canvas" id="game-of-life-canvas" />
