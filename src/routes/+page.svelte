<script>
    /*
    Mod:
    https://flowbite-svelte.com/docs/components/darkmode#switcher-style
    https://flowbite-svelte.com/docs/components/table#hover-state
    */

    import { onMount } from 'svelte';
    import { page } from "$app/stores";

    import Head from "$lib/components/Head.svelte";
    import Toast from "$lib/components/Toast.svelte";

    // import { Table } from "flowbite-svelte";

    let query = $state('');

    const params = $derived($page.params);

    onMount(async () => {
        query = params.term;
    });

</script>

<Toast text="Reduce! Reuse! Recycle!" counter=3> </Toast>

<!--
<Table items={products} hoverable={true}></Table>
-->
