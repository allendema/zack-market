<script lang="ts">
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { page } from '$app/state';

    import Head from "$lib/components/Head.svelte";
    import Prefetch from "$lib/components/Prefetch.svelte";

    import { stores } from '$lib/state.svelte.ts';
    import { projectName } from '$lib/state.svelte.ts';
    import { productsStateToGrid, listBrands } from '$lib/snippets.svelte';
    import apiClient from '$lib/api/api';

    let loading = $state(false);
    let error = $state('');
    let products = $state([]);

    const params = $derived(page.params);
    let store = $state(null);
    let query = $state('');

    onMount(async () => {
        store = params.store;
        query = params.term;

        /*
        let lowerCaseStoreNames = $state([]);
        lowerCaseStoreNames = stores.map(function(value) {
            return value.toLowerCase();
        });

        if (!lowerCaseStoreNames.includes(store.toLowerCase())) {
            error = "Store not in supported stores"
        };
        */

    });

    async function getBrandProducts(brand) {
        const {data, error} = await apiClient.GET(`/${store}/search_brand/${encodeURIComponent(brand)}`);
        
        return data;
    }


    async function handleSearch() {
        products = await getBrandProducts(query)
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
	<title>{projectName} - Brand - {query}</title>
</svelte:head>

<Prefetch> </Prefetch>

{@render productsStateToGrid(products, loading, error)}
