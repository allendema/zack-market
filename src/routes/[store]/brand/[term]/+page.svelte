<script lang="ts">
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';

    import Head from "$lib/components/Head.svelte";
    import Prefetch from "$lib/components/Prefetch.svelte";
    import NavigationBar from "$lib/components/NavigationBar.svelte";
    import SearchBar from "$lib/components/SearchBar.svelte";
    import Sitemap from "$lib/components/Sitemap.svelte";
    import Footer from "$lib/components/Footer.svelte";

    import { stores } from '$lib/state.svelte.ts';

    import apiClient from '$lib/api';
    import { productsStateToGrid } from '$lib/snippets.svelte';
    import { listBrands } from '$lib/snippets.svelte';

    let loading = $state(false);
    let error = $state('');
    let products = $state([]);

    const params = $derived($page.params);
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
        const response = await apiClient.get(`${store}/search_brand/${brand}`, []);
        const data = await response.json();
        
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
	<title>Zack-Market - Brand - {query}</title>
</svelte:head>

<Prefetch> </Prefetch>

<NavigationBar> </NavigationBar>

<SearchBar> </SearchBar>

{@render productsStateToGrid(products, loading, error)}

<Footer> </Footer>
