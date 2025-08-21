<script lang="ts">

    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';

    import Head from "$lib/components/Head.svelte";
    import Prefetch from "$lib/components/Prefetch.svelte";
    import NavigationBar from "$lib/components/NavigationBar.svelte";
    import SearchBar from "$lib/components/SearchBar.svelte";
    import Sidebar from "$lib/components/Sidebar.svelte";
    import Sitemap from "$lib/components/Sitemap.svelte";
    import Footer from "$lib/components/Footer.svelte";

    import { brands, demoProduct, stores } from '$lib/state.svelte.ts';
    import { projectName } from '$lib/state.svelte.ts';

    import apiClient from '$lib/api';
    import { getValue } from '$lib/utils';

    import { productsStateToGrid } from '$lib/snippets.svelte';
    import { listBrands } from '$lib/snippets.svelte';

    import { FooterLink } from "flowbite-svelte";

    let loading = $state(false);
    let error = $state('');
    let products = $state([]);

    const params = $derived($page.params);
    let store = $state(null);
    let categories = $state([]);
    let subcategories = $state([]);

    import { List, Li } from "flowbite-svelte";

    onMount(async () => {
        store = params.store;
        categories = await getStoreCategories(store);
        // subcategories = await getStoreSubcategories(store);
    });


    async function getStoreCategories(storeName) {
        const response = await apiClient.get(`${storeName}/categories`);
        const data = await response.json();
        
        return data
    }


    async function getStoreSubcategories(storeName) {
        const response = await apiClient.get(`${storeName}/subcategories`);
        const data = await response.json();
        
        return data
    }


</script>


<Head> </Head>

<svelte:head>
	<title>{projectName} - {store} - Categories</title>
</svelte:head>

<Prefetch> </Prefetch>

<NavigationBar> </NavigationBar>

<SearchBar> </SearchBar>

<Sidebar> </Sidebar>

<svelte:boundary>
<List tag="ul" class="space-y-4">
        <p> Categories in {store} </p>
        <List tag="ul" class="mt-2 space-y-1 ps-5">
            {#each categories as category}
                {#if category.category_id}
                    <FooterLink class="mb-2 capitalize" href="/{store.toLowerCase()}/category/{category.category_id}">{category.category_name}</FooterLink>
                {/if}
            {/each}
        </List>
</List>
</svelte:boundary>

<!--
<svelte:boundary>
<List tag="ul" class="space-y-4">
        <p> Subcategories in {store} </p>
        <List tag="ul" class="mt-2 space-y-1 ps-5">
            {#each subcategories as subcategory}

                {#if subcategory.subcategory_id}
                    <FooterLink class="mb-2 capitalize" href="/{store.toLowerCase()}/subcategory/{subcategory.subcategory_id}">{subcategory.subcategory_name}</FooterLink>
                {/if}
            {/each}
        </List>
</List>
</svelte:boundary>
-->

<Footer> </Footer>
