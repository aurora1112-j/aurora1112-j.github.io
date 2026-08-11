/**
 * Registers an init function that runs on first load and after each
 * view-transition navigation. The init function can return a cleanup
 * callback that will run before the next init and before DOM swap.
 */
export function onPageLifecycle(init: () => (() => void) | void) {
  let dispose: (() => void) | void;

  const run = () => {
    dispose?.();
    dispose = init();
  };
  const teardown = () => dispose?.();

  run();
  document.addEventListener("astro:page-load", run);
  document.addEventListener("astro:before-swap", teardown);
}
