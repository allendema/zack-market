<script lang="ts">
  /*
    https://flowbite-svelte.com/docs/components/buttons#button-sizes-with-icons
    https://flowbite-svelte.com/docs/components/buttons#button-with-icon
    https://flowbite-svelte.com/docs/components/button-group
    https://flowbite-svelte.com/docs/utilities/toolbar#default-toolbar
    https://flowbite-svelte.com/docs/typography/heading#highlighted-heading
    https://flowbite-svelte.com/builder/blockquote
    */

  import Head from "$lib/components/Head.svelte";
  // import Toast from "$lib/components/Toast.svelte";

  import { A, Heading, Span, Blockquote } from "flowbite-svelte";
</script>

<Head></Head>

<Heading tag="h2" class="mb-4">
  <Span highlight="blue">Frequently Asked Questions</Span>
</Heading>

<Blockquote bg class="p-4">
  Python dev tries frontend...
</Blockquote>

<Blockquote bg class="p-4">
  All the data is extracted using the API of
  <A color="blue" class="font-medium hover:underline" href="https://github.com/allendema/zack-market-dl">
  https://github.com/allendema/zack-market-dl 
  </A>
  and then displayed here.
</Blockquote>

<Blockquote bg class="p-4">
  Prices change from time to time, so even the price on official store website is not 100% correct.
  Same applies here too.
</Blockquote>

<Blockquote bg class="p-4">
  Reduce! Reuse! Recycle!
</Blockquote>

<!-- <Toast text="Reduce! Reuse! Recycle!" counter="3"></Toast> -->
