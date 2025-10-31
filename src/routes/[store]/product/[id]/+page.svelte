<script lang="ts">
    /*
    https://svelte.dev/docs/svelte/$derived
    https://flowbite-svelte.com/docs/components/buttons#loader
    */

    import { onMount } from 'svelte';
    import { page } from '$app/state';

    import Head from "$lib/components/Head.svelte";
    import { productCardSide } from '$lib/snippets.svelte';
    import { productsStateToGrid } from '$lib/snippets.svelte';
    import { projectName } from '$lib/state.svelte.ts';
    import apiClient from '$lib/api/api';

    import Toast from "$lib/components/Toast.svelte";

    let loading = $state(false);
    let error = $state('');
    let products = $state([]);
    let suggestions = $state([]);

    const params = $derived(page.params);

    let product_id = $state(null);
    let store = $state(null);

    onMount(() => {

        product_id = params.id;
        store = params.store;

    });


    async function fetchProducts() {
        loading = true;

        const {data, error} = await apiClient.GET(`/${store}/product/${encodeURIComponent(product_id)}`);
        products = data;

        loading = false;
    }

    $effect(() => {
        if (product_id) {
            fetchProducts();
        }
    });


</script>

<Head> </Head>

<svelte:head>
	<title>{projectName} - {store} - {product_id}</title>
</svelte:head>

<Toast text="Reduce! Reuse! Recycle!" counter=3> </Toast>

{@render productsStateToGrid(products, loading, error)}

<!--
{#each suggestions as suggestion (suggestion.link)}
    {@render productCardSide(suggestion)}
{/each}
-->
