<script lang="ts" module>
    /* Mods from:
    https://flowbite-svelte.com/docs/components/gallery
    https://flowbite-svelte.com/docs/components/card#e-commerce-card
    https://flowbite-svelte.com/docs/typography/image
    https://flowbite-svelte.com/docs/typography/list#horizontal-list
    https://flowbite-svelte.com/docs/components/gallery#default-gallery
    https://flowbite-svelte.com/docs/components/buttons#loader
    
    https://svelte.dev/docs/svelte/class
    */

    import { page } from '$app/state';
    import { resolve } from '$app/paths';

    import { Gallery } from "flowbite-svelte";
    import { ListPlaceholder, ImagePlaceholder } from "flowbite-svelte";

    import { Card, Button } from "flowbite-svelte";
    import { Spinner } from "flowbite-svelte";

    import { Footer, FooterLinkGroup, FooterLink } from "flowbite-svelte";

    export { productCard };
    export { productCardSide };
    export { productGalleryGrid };
    export { productsStateToGrid };
    export { listBrands };

    export function getCurrentPath() {
        return page.url.pathname;
    }

    export function isPathProduct() {
        return getCurrentPath().toString().includes("/product/");
    }

</script>


{#snippet productCard(productMd)}
    {@const price = productMd.price}
    {@const oldPrice = productMd.old_price}
    {@const store = productMd.store.split(".", 2)[0]}
    {@const productUrl = resolve(`/${store}/product/${productMd.product_id}`)}

    <!-- FIXME: Product link and description
       don't match in: http://localhost:5173/geizhals/deals
    but they match in: http://localhost:5173/geizhals/product/3539562
    -->
    <Card class="p-0 dark productCard">
        <a href={productUrl}>
        <img class="rounded-t-lg p-8 " src="{productMd.picture}" alt="{productMd.product}" />
    </a>
    <div class="px-5 pb-5">
        <a href={productUrl}>

        <h5 class="text-lgfont-semibold tracking-tight text-gray-900 dark:text-white block capitalize {isPathProduct ? '' : 'truncate'}">{productMd.product}</h5>

        </a>
        <!-- <Rating rating={4} size={24} class="mt-2.5 mb-5">
        {#snippet text()}
            <Badge class="ms-3">4</Badge>
        {/snippet}
        </Rating> -->
        <div class="flex items-center justify-between">
        {#if price !== oldPrice}
            <p class="old-price text-xs font-bold text-gray-900 dark:text-white">{oldPrice.toFixed(2)}€</p>
        {/if}
        <span class="text-xl font-bold text-gray-900 dark:text-white">{price.toFixed(2)}€</span>
        <Button size="xs" color="alternative" href="{productMd.link}">{store} (🡽)</Button>
        <!-- Don't show link to "/product/ID" when already inside the "/product/ID" view -->
        {#if !isPathProduct()}
            <!-- FIXME why does the href load but not display only the productUrl but all products still? <{@debug productUrl} -->
            <Button size="xs" href="{productUrl}">View</Button>
        {/if}
        </div>
    </div>
    </Card>
{/snippet}

{#snippet productCardSide(productMd)}
    {@const price = productMd.price}
    {@const oldPrice = productMd.old_price}
    {@const store = productMd.store.split(".", 2)[0]}
    {@const productUrl = resolve(`/${store}/product/${productMd.product_id}`)}

    <Card class="p-0 sidebar dark">
    <a href={productUrl}>
        <img class="rounded-t-lg p-8" src="{productMd.picture}" alt="{productMd.product}" />
    </a>
    <div class="px-5 pb-5">
        <a href={productUrl}>
        <h5 class="">{productMd.product}</h5>
        </a>
        <div class="flex items-center justify-between">
        {#if price !== oldPrice}
            <p class="old-price text-xl font-bold text-gray-900 dark:text-white">{oldPrice.toFixed(2)}€</p>
        {/if}
        <span class="text-xl font-bold text-gray-900 dark:text-white">{price.toFixed(2)}€</span>
        <Button size="xs" color="alternative" href="{productMd.link}">Shop {store}</Button>
        <!-- Don't show link to "/product/ID" when already inside the "/product/ID" view -->
        {#if !isPathProduct()}
            <Button size="xs" href={productUrl}>View</Button>
        {/if}
        </div>
    </div>
    </Card>
{/snippet}


{#snippet productGalleryGrid(products)}
    <ul class="product-list">
    <Gallery class="grid-cols-3 gap-2 dark" items={products}>

    {#snippet figure(item)}
        {@render productCard(item)}
    {/snippet}

    </Gallery>
    </ul>
{/snippet}


{#snippet productsStateToGrid(products, loading, error)}
    {#if loading}
        <div class="loading-state">
            <Spinner color="red" />
        </div>
    {:else if error}
        <div class="error-state">
            <p>Error: {error}</p>
        </div>
    {:else if !products || products.length === 0}
        <div class="no-results">
            <ImagePlaceholder class="max-w-md" imgOnly />
            <ListPlaceholder class="max-w-md" />
            <p>No results found.</p>
        </div>
    {:else}
        {@render productGalleryGrid(products)}
    {/if}
{/snippet}


{#snippet listBrands(store, brands)}
    <Footer class="sitemap bg-white dark:bg-gray-800 dark" footerType="sitemap">
    <div class="grid grid-cols-2 gap-8 px-6 py-8 md:grid-cols-2">

    <div>
    <h2 class="store mb-6 text-sm font-semibold text-blue-500 uppercase {store}">{store}</h2>
    <FooterLinkGroup class="text-gray-900 dark:text-blue-500">
    {#await brands then brands}
        {#each brands as brand (brand)}
          <!-- FIXME encode 24/7 Alnatura Bio -->
          <FooterLink class="mb-2 capitalize" href="/{store.toLowerCase()}/brand/{encodeURIComponent(brand)}">{brand}</FooterLink>
        {/each}
    {/await}

    </FooterLinkGroup>
    </div>
    </div>
    </Footer>
{/snippet}

<style>
    .price, .old-price {
        font-size: 0.9em;
    }

    .price {
        color: green;
    }

    .old-price {
        color: red;
        text-decoration: line-through;
    }

    .product-item {
        margin: 1rem 0;
        padding: 1rem;
        border: 1px solid #eee;
        border-radius: 4px;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }

    .loading-state, .error-state, .no-results {
        padding: 1rem;
        text-align: center;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    .productCard {
        max-height: 100px;
        max-width: 100px;
    }

</style>
