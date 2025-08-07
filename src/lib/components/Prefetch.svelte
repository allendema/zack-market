<script lang="ts">

    import { cdnHostnames } from '$lib/state.svelte.ts';

</script>


<svelte:head>
    <!-- https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch -->
    {#each cdnHostnames as hostname}
        <link rel="dns-prefetch" href={hostname}>
    {/each}

</svelte:head>
