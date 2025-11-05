<script lang="ts">

    import { onMount } from 'svelte';
    import { page } from '$app/state';

    import Head from "$lib/components/Head.svelte";
    import Prefetch from "$lib/components/Prefetch.svelte";

    import { projectName } from '$lib/state.svelte.ts';
    import { listBrands} from '$lib/snippets.svelte';
    import apiClient from '$lib/api/api';

    import { Footer, FooterLinkGroup, FooterLink } from "flowbite-svelte";
    import { List, Li } from "flowbite-svelte";

    let loading = $state(false);
    let error = $state('');
    let products = $state([]);
    let brands = $state([]);

    let store = $state(null);

    const params = $derived(page.params);

    onMount(async () => {
        store = params.store;
    });


    async function getStoreBrands(storeName: string) {
        const {data, error} = await apiClient.GET(`/${storeName}/brands`);

        return data
    }

    async function getBrandProducts(brand) {
        const {data, error} = await apiClient.GET(`/${store}/search_brand/${brand}`);

        return data;
    }

    // FIXME: TODO: changing store/brands won't trigger update of links
    $effect(() => {
        if (store) {
            brands = getStoreBrands(store);
        }
    });

</script>


<Head> </Head>

<svelte:head>
	<title>{projectName} - {store} - Brands</title>
</svelte:head>

<Prefetch> </Prefetch>

<!-- TODO FIXME fix getting "store" value as a string inside the each loop
<List tag="ul" class="space-y-4 text-gray-500 dark:text-gray-400">
    {#each stores as store}
        {@brands = getValue({store})}
        <Li>
            {store}
            <List tag="ul" class="mt-2 space-y-1 ps-5">
                {#each brands as brand}
                    <Li>{brand}</Li>
                {/each}
            </List>
        </Li>
    {/each}

</List>
-->

<!--
<svelte:boundary>
<Footer class="sitemap bg-white dark:bg-gray-800 dark" footerType="sitemap">
  <div class="grid grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
-->
    <!-- FIXME TODO Use this snippet in routes/stores
	{#each stores as store}
        {@const brands = getStoreBrands(storeString)}
        <div>
        <h2 class="store mb-6 text-sm font-semibold text-gray-400 uppercase">{store}</h2>
        <FooterLinkGroup class="text-gray-900 dark:text-gray-200">

        {#await brands then brands}
            {#each brands as brand}
                <FooterLink class="mb-2 capitalize" href="/{store.toLowerCase()}/brand/${decodeURIComponent({brand.toLowerCase())}">{brand}</FooterLink>
            {/each}
        {/await}

        </FooterLinkGroup>
        </div>
    {/each}
    -->

    <!--
    <div>
    <h2 class="store mb-6 text-sm font-semibold text-gray-400 uppercase">{store}</h2>
    <FooterLinkGroup class="text-gray-900 dark:text-gray-200">

    {#await getStoreBrands(store) then brands}
        {#each brands as brand}
            <FooterLink class="mb-2 capitalize" href="/{store.toLowerCase()}/brand/${decodeURIComponent({brand.toLowerCase())}">{brand}</FooterLink>
        {/each}
    {/await}

    </FooterLinkGroup>
    </div>
    -->
    <!--{@render listBrands(store)}
    {@render listBrands(store, getStoreBrands(store))}
    -->
<!--
  </div>
</Footer>
</svelte:boundary>
-->

{@render listBrands(store, brands)}
