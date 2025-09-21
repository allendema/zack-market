<script lang="ts">
    import { onMount } from "svelte";
    import { page } from '$app/state';

    import Head from "$lib/components/Head.svelte";
    import Prefetch from "$lib/components/Prefetch.svelte";
    import apiClient from '$lib/api';
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
        try {
            loading = true;
            error = "";
            const response = await apiClient.get(`${store}/top_deals`, []);
            // const response = await apiClient.get(`${store}/discounted_products`);
            const data = await response.json();

            products = data;
        } catch (err) {
            error = err instanceof Error ? err.message : "An unknown error occurred";
            products = [];
        } finally {
            loading = false;
        }
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
