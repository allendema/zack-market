<script lang="ts">
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { page } from '$app/state';

    import Head from "$lib/components/Head.svelte";
    import Prefetch from "$lib/components/Prefetch.svelte";

    import apiClient from '$lib/api';

    // import { stores, projectName } from '$lib/state.svelte.ts';
    import stores, projectName from '$lib/state.svelte.ts';

    import { productsStateToGrid } from '$lib/snippets.svelte';

    import { Table, Button } from "flowbite-svelte";

    let loading = $state(false);
    let error = $state('');
    let products = $state([]);
    let items = $state([]);

    const params = $derived(page.params);
    let store = $state(null);

    onMount(async () => {
        store = params.store;
    });


    async function getStoreBranchesReal(storeName) {
        const {data, error} = await apiClient.GET(`/${storeName}/branches`);

        return data
    }

    async function getStoreBranches(storeName) {
        return [{"city": "Köln", "id": "000000", "zipcode": "55555"}]
    }

    async function handleSearch() {
        /*
        const storeBrands = brands[store]
        const products = storeBrands
        */

        //products = [product];
        //$state.snapshot(products)

        loading = false;
        items = getStoreBranches(store);

    }

    $effect(() => {
        handleSearch();
    });


</script>


<Head> </Head>

<svelte:head>
	<title>{projectName} - Stores</title>
</svelte:head>

<Prefetch> </Prefetch>

<!--
<Button onclick={changeItems} class="mb-4">Change data</Button>
<Table items={items} hoverable={true}></Table>
-->

<Table classes={{ div: "relative overflow-x-auto" }} items={items} hoverable={true}></Table>

<!--
{#each stores as storeName}
    <Table classes={{ div: "relative overflow-x-auto" }} items={items} hoverable={true}></Table>
    <Table classes={{ div: "relative overflow-x-auto" }} items={items} hoverable={true}></Table>
{/each}
-->
