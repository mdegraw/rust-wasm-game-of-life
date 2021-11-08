<style lang="postcss">
  .modal-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .modal {
    position: absolute;
    left: 50%;
    top: 50%;
    width: calc(100vw - 4em);
    max-width: 45em;
    max-height: calc(50vh - 4em);
    overflow: auto;
    transform: translate(-50%, -50%);
    padding: 0.5em;
    @apply bg-yellow-100 text-sm border border-black shadow-offset-black;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 16px;
    height: 16px;
  }

  ::-webkit-scrollbar-track {
    @apply bg-green-100;
  }

  ::-webkit-scrollbar-thumb {
    @apply bg-green-600 border-2 border-solid border-white;
  }

  ::-webkit-scrollbar-thumb:hover {
    @apply bg-green-900;
  }
</style>

<script lang="ts">
  import { createEventDispatcher, onDestroy } from 'svelte';

  const dispatch = createEventDispatcher();
  const close = () => dispatch('close');

  export let open = false;

  let modal: HTMLElement;

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      close();
      return;
    }

    if (e.key === 'Tab') {
      // trap focus
      const nodes: NodeListOf<HTMLElement> = modal.querySelectorAll('*');
      const tabbable: HTMLElement[] = Array.from(nodes).filter(
        (n: HTMLElement) => n.tabIndex >= 0
      );

      let index = tabbable.indexOf(document.activeElement as HTMLElement);
      if (index === -1 && e.shiftKey) index = 0;

      index += tabbable.length + (e.shiftKey ? -1 : 1);
      index %= tabbable.length;

      tabbable[index].focus();
      e.preventDefault();
    }
  };

  const previouslyFocused =
    typeof document !== 'undefined' && (document.activeElement as HTMLElement);

  if (previouslyFocused) {
    onDestroy(() => {
      previouslyFocused.focus();
    });
  }
</script>

<svelte:window on:keydown={handleKeydown} />
{#if open}
  <div class="modal-background" on:click={close} />

  <div class="modal" role="dialog" aria-modal="true" bind:this={modal}>
    <slot name="body" />
  </div>
{/if}
