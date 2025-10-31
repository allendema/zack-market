<script lang="ts">
    import { onMount } from "svelte";
    import { page } from '$app/state';

    import Head from "$lib/components/Head.svelte";
    import Prefetch from "$lib/components/Prefetch.svelte";
    import apiClient from '$lib/api/api';

    import { projectName } from '$lib/state.svelte.ts';
    import { productsStateToGrid } from '$lib/snippets.svelte';

    const params = $derived(page.params);

    let store = $state(null);
    let products = $state([]);
    let loading = $state(false);
    let error = $state("");

    onMount(async () => {
        store = params.store

    });

    async function fetchProducts() {
        loading = true;

        const {data, error} = await apiClient.GET(`/${store}/top_deals`);
        products = data;

        loading = false;
    }


    $effect(() => {
        fetchProducts();
    });

</script>

<Head> </Head>

<svelte:head>
	<title>{projectName} - deals</title>
</svelte:head>

<Prefetch> </Prefetch>

{@render productsStateToGrid(products, loading, error)}
