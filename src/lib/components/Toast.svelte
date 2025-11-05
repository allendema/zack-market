<script lang="ts">
    /* 
    mod https://flowbite-svelte.com/docs/components/toast#autohide-example
    */

    import { slide } from "svelte/transition";

    import { Toast } from "flowbite-svelte";
    // import { CheckCircleSolid } from "flowbite-svelte-icons";

    let props = $props();

    let toastStatus = $state(true);
    let counter = $derived(props.counter);

    function trigger() {
        toastStatus = true;
        counter = counter;
        timeout();
    }

    function timeout() {
        if (--counter > 0) return setTimeout(timeout, 1000);
        toastStatus = false;
    }

    ///$effect(() => {
    //    trigger();
    //});

</script>



<div class="flex gap-10 text-black">
  <Toast onload={() => trigger()} color="red" dismissable={true} transition={slide} position="top-right" bind:toastStatus>
    <!--
    {#snippet icon()}
      <CheckCircleSolid class="h-5 w-5" />
    {/snippet}
    -->
    {props.text} [{counter}s].
  </Toast>
</div>

