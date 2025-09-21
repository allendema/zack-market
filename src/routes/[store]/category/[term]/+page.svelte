<script lang="ts">
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { page } from '$app/state';

    import Head from "$lib/components/Head.svelte";
    import Prefetch from "$lib/components/Prefetch.svelte";

    import { stores } from '$lib/state.svelte.ts';
    import { projectName } from '$lib/state.svelte.ts';
    import { productsStateToGrid } from '$lib/snippets.svelte';
    import { listBrands } from '$lib/snippets.svelte';

    import apiClient from '$lib/api';

    let loading = $state(false);
    let error = $state('');
    let products = $state([]);

    const params = $derived(page.params);
    let store = $state(null);
    let query = $state('');

    onMount(async () => {
        store = params.store;
        query = params.term;

    });

    async function getCategoryProducts(category) {
        const response = await apiClient.get(`${store}/search_category/${category}`, []);
        const data = await response.json();
        
        return data;
    }

    async function handleSearch() {
        products = await getCategoryProducts(query)
        loading = false;

    }

    $effect(() => {
        loading = true;

        if (query) {
            handleSearch();
        }
    });


</script>


<Head> </Head>

<svelte:head>
	<title>{projectName} - Category - {query}</title>
</svelte:head>

<Prefetch> </Prefetch>

{@render productsStateToGrid(products, loading, error)}
