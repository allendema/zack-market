<script lang="ts">

    /*
    Mod from: https://flowbite-svelte.com/docs/components/footer#sitemap-links
    */

    import { stores, listingTypes } from '$lib/state.svelte.ts';

    import { Footer, FooterLinkGroup, FooterLink } from "flowbite-svelte";

</script>

<Footer class="sitemap bg-white dark:bg-gray-800 dark" footerType="sitemap">
  <div class="grid grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">

	{#each stores as store (store)}
        <div>
        <h2 class="store mb-6 text-sm font-semibold text-gray-400 uppercase">{store}</h2>
        <FooterLinkGroup class="text-gray-900 dark:text-gray-200">

            {#each listingTypes as listingType (listingType)}
                <!-- https://tailwindcss.com/docs/text-transform -->
                <FooterLink class="mb-2 capitalize" href="/{store.toLowerCase()}/{listingType.toLowerCase()}">{store} {listingType}</FooterLink>
            {/each}

        </FooterLinkGroup>
        </div>
    {/each}

  </div>
</Footer>
