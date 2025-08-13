<script lang="ts">
  /*
    https://flowbite-svelte.com/docs/components/buttons#button-sizes-with-icons
    https://flowbite-svelte.com/docs/components/buttons#button-with-icon
    https://flowbite-svelte.com/docs/components/button-group
    https://flowbite-svelte.com/docs/utilities/toolbar#default-toolbar
    https://flowbite-svelte.com/docs/typography/heading#highlighted-heading
    */

  import Head from "$lib/components/Head.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Sitemap from "$lib/components/Sitemap.svelte";

  import { Skeleton, ImagePlaceholder } from "flowbite-svelte";
  import { Heading, P, Span } from "flowbite-svelte";
</script>

<Head></Head>

<Heading tag="h2" class="mb-4 dark">
  Fast! <Span highlight="blue">Zack!</Span> Zack-Market.
</Heading>
<P>Zack-Market.</P>

<ImagePlaceholder class="py-2 dark" />
<Skeleton class="py-4 dark" />

<Sitemap></Sitemap>

<Footer></Footer>
