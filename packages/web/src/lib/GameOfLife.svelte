<style lang="postcss" scoped>
  .gol-btn {
    @apply w-5 text-sm border border-black shadow-offset-black bg-yellow-200 mb-4;
    /* @apply font-bold; */
    width: auto;
  }

  .gol-btn:hover {
    @apply hover:bg-yellow-300;
  }

  .gol-btn-row {
    @apply flex-row;
  }

  .gol-pause-play {
    width: 65px;
  }
</style>

<script lang="ts">
  import { onMount } from 'svelte';
  import { Universe, Cell } from 'rust-wasm-game-of-life';
  import { ModalType } from '../utils/life.enums';
  import { ModalInfo } from '../utils/life.models';
  import Modal from './Modal.svelte';
  import Patterns from './Patterns.svelte';
  import Rules from './Rules.svelte';
  import Usage from './Usage.svelte';
  export let memory: WebAssembly.Memory;

  let universe: Universe;
  let isRandom = true;
  let isPlaying = true;
  let modalInfo: ModalInfo = { show: false };
  let setIsPlaying: () => void;
  let onReset: () => void;
  let onRandomize: () => void;
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  const dimension = isMobile ? 64 : 128;

  const size = {
    width: dimension,
    height: dimension
  };

  const openModal = ({ type }: ModalInfo) => {
    modalInfo = { type, show: true };
  };

  const closeModal = () => {
    modalInfo = { show: false };
  };

  onMount(() => {
    const CELL_SIZE = 5; // px
    const GRID_COLOR = '#CCCCCC';
    const DEAD_COLOR = '#FFFFFF';
    const ALIVE_COLOR = '#000000';

    // Construct the universe, and get its width and height.
    universe = Universe.new(size.width, size.height, isRandom);
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
        universe.tick();

        drawGrid();
        drawCells();

        animationId = requestAnimationFrame(renderLoop);
      }
    };

    const play = () => {
      renderLoop();
    };

    const pause = () => {
      isPlaying = false;

      if (typeof animationId === 'number') {
        cancelAnimationFrame(animationId);
      }

      animationId = null;
    };

    canvas.addEventListener('click', event => {
      const boundingRect = canvas.getBoundingClientRect();

      const scaleX = canvas.width / boundingRect.width;
      const scaleY = canvas.height / boundingRect.height;

      const canvasLeft = (event.clientX - boundingRect.left) * scaleX;
      const canvasTop = (event.clientY - boundingRect.top) * scaleY;

      const row = Math.min(Math.floor(canvasTop / (CELL_SIZE + 1)), height - 1);
      const col = Math.min(Math.floor(canvasLeft / (CELL_SIZE + 1)), width - 1);

      universe.toggle_cell(row, col);

      drawGrid();
      drawCells();
    });

    setIsPlaying = () => {
      isPlaying = !isPlaying;

      if (isPlaying) {
        play();
      } else {
        pause();
      }
    };

    onReset = () => {
      universe = Universe.square_one(size.width, size.height);

      drawGrid();
      drawCells();

      pause();
    };

    onRandomize = () => {
      universe = Universe.new(size.width, size.height, true);

      drawGrid();
      drawCells();

      if (!isPlaying) {
        pause();
      }
    };

    play();
  });
</script>

<div class="gol-btn-row">
  <button class="gol-btn gol-pause-play" on:click={setIsPlaying}>
    {isPlaying ? 'Pause' : 'Play'}
  </button>
  <button class="gol-btn" on:click={onRandomize}>Randomize</button>
  <button class="gol-btn" on:click={onReset}>Heat Death</button>
  <button
    class="gol-btn"
    on:click={() => openModal({ show: true, type: ModalType.Rules })}>Rules</button
  >
  <button
    class="gol-btn"
    on:click={() => openModal({ show: true, type: ModalType.Usage })}>Usage</button
  >
  <button
    class="gol-btn"
    on:click={() => openModal({ show: true, type: ModalType.Patterns })}>Patterns</button
  >
</div>
<canvas class="game-of-life-canvas" id="game-of-life-canvas" />
<Modal open={modalInfo.show && modalInfo.type === ModalType.Rules} on:close={closeModal}>
  <svelte:fragment slot="body">
    <Rules />
  </svelte:fragment>
</Modal>
<Modal open={modalInfo.show && modalInfo.type === ModalType.Usage} on:close={closeModal}>
  <svelte:fragment slot="body">
    <Usage />
  </svelte:fragment>
</Modal>
<Modal
  open={modalInfo.show && modalInfo.type === ModalType.Patterns}
  on:close={closeModal}
>
  <svelte:fragment slot="body">
    <Patterns />
  </svelte:fragment>
</Modal>
