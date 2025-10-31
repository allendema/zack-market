<script lang="ts">
    /*
    Mod:
    https://flowbite-svelte.com/docs/components/pagination#pagination,-paginationitem
    */

    import { onMount } from 'svelte';
    import { page } from '$app/state';

    import apiClient from '$lib/api/api';
    import { projectName } from '$lib/state.svelte.ts';
    import { productsStateToGrid } from '$lib/snippets.svelte';
    import Head from "$lib/components/Head.svelte";
    import ButtonLoading from "$lib/components/ButtonLoading.svelte";

    import { PaginationNav } from "flowbite-svelte";

    let loading = $state(false);
    let error = $state('');
    let products = $state([]);

    let store = $state(null);
    let query = $state('');

    const params = $derived(page.params);

    onMount(async () => {
        store = params.store;
        query = params.term;
    });

    let currentPage = $state(1);
    const totalPages = 20;

    function handlePageChange(page) {
        currentPage = page;
        console.log("Page changed to:", page);
    }

    async function fetchProducts() {
        loading = true;

        //const {data, error} = await apiClient.GET(`/${store}/search/${encodeURIComponent(newQuery)}`);
        const {data, error} = await apiClient.GET(`/lidl/search/${encodeURIComponent(query)}`);

        products = data;

        loading = false;
    }


    $effect(() => {
        // if (!loading)
        if (query) {
            fetchProducts();
        }
    });

</script>

<svelte:head>
    <title>{projectName} - Search - {query}</title>
    <meta name="title" content="{query}" />
    <meta name="description" content="Searching for {query}" />

    <!-- OpenGraph -->
    <meta property="og:title" content="{query}" />
    <meta property="og:type" content="website" />
    <meta property="og:description" content="Find the best deals!" />
    
</svelte:head>

<Head> </Head>

<h1>Searching "{store}" for "{query}" </h1>
<!-- Too Late
{#if loading}
  <ButtonLoading></ButtonLoading>
{/if}
-->

{@render productsStateToGrid(products, loading, error)}

<PaginationNav size="large" {currentPage} {totalPages} onPageChange={handlePageChange} layout="navigation" />
