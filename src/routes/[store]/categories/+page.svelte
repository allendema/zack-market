<script lang="ts">

    import { onMount } from 'svelte';
    import { page } from '$app/state';

    import Head from "$lib/components/Head.svelte";
    import Prefetch from "$lib/components/Prefetch.svelte";

    import { projectName, stores } from '$lib/state.svelte.ts';

    import apiClient from '$lib/api/api';
    import { getValue } from '$lib/utils';

    import { productsStateToGrid } from '$lib/snippets.svelte';
    import { listBrands } from '$lib/snippets.svelte';

    import { Footer, FooterLinkGroup, FooterLink } from "flowbite-svelte";

    let loading = $state(false);
    let error = $state('');
    let products = $state([]);

    const params = $derived(page.params);
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
        const {data, error} = await apiClient.GET(`/${storeName}/categories`);

        return data
    }

    async function getStoreSubcategories(storeName) {
        const {data, error} = await apiClient.GET(`/${storeName}/subcategories`);
        
        return data
    }


</script>


<Head> </Head>

<svelte:head>
	<title>{projectName} - {store} - Categories</title>
</svelte:head>

<Prefetch> </Prefetch>

{#snippet listCategories(store, categories)}
    <Footer class="sitemap bg-white dark:bg-gray-800 dark" footerType="sitemap">
    <div class="grid grid-cols-4 gap-8 px-6 py-8 md:grid-cols-6">

    <div>
    <h2 class="store mb-6 text-sm font-semibold text-blue-500 uppercase {store}">{store}</h2>
    <FooterLinkGroup class="text-gray-900 dark:text-blue-500">

    {#await categories then categories}
        {#each categories.subcategories as category (category)}
            {#if category.category_id}
                <FooterLink class="mb-2 capitalize" href="/{store.toLowerCase()}/category/{category.category_id}">{category.category_name}</FooterLink>
            {/if}
        {/each}
    {/await}

    </FooterLinkGroup>
    </div>
    </div>
    </Footer>
{/snippet}

{@render listCategories(store, categories)}

<!--
<svelte:boundary>
<List tag="ul" class="space-y-4">
        <p> Categories in {store} </p>
        <List tag="ul" class="mt-2 space-y-1 ps-5">
            {#each categories as category (category)}
                {#if category.category_id}
                    <FooterLink class="mb-2 capitalize" href="/{store.toLowerCase()}/category/{category.category_id}">{category.category_name}</FooterLink>
                {/if}
            {/each}
        </List>
</List>
</svelte:boundary>


<svelte:boundary>
<List tag="ul" class="space-y-4">
        <p> Subcategories in {store} </p>
        <List tag="ul" class="mt-2 space-y-1 ps-5">
            {#each subcategories as subcategory (subcategory)}

                {#if subcategory.subcategory_id}
                    <FooterLink class="mb-2 capitalize" href="/{store.toLowerCase()}/subcategory/{subcategory.subcategory_id}">{subcategory.subcategory_name}</FooterLink>
                {/if}
            {/each}
        </List>
</List>
</svelte:boundary>
-->
