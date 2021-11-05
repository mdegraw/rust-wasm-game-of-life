/* eslint-disable @typescript-eslint/no-floating-promises */
import App from './App.svelte';
import init from '../../rust/rust-wasm-game-of-life/pkg/rust_wasm_game_of_life';

const load = async () => {
  const startTime = performance.now();
  const { memory } = await init();
  const endTime = performance.now();
  console.log(`Call to wasm init took ${endTime - startTime} milliseconds`);

  new App({
    target: document.body,
    props: {
      memory
    }
  });
};

load();
