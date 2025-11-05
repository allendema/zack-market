<script lang="ts">
  /*
    https://flowbite-svelte.com/docs/typography/heading#highlighted-heading
    TODO: FIXME: fix white text on white background
    */

  import Head from "$lib/components/Head.svelte";
  import { projectName } from '$lib/state.svelte.ts';

  import { A, P, Heading, Span, Blockquote } from "flowbite-svelte";

</script>

<Head></Head>

<Heading tag="h2" class="mb-4"> Fast! <Span highlight="blue">Zack!</Span> {projectName}.</Heading>

<P> {projectName}. </P>

<Blockquote bg class="p-4">
  What?
</Blockquote>

<Blockquote bg class="p-4">
 Frontend for showing products, deals, brands, etc. of different markets/stores.
</Blockquote>

<Blockquote bg class="p-4">
  Why?
</Blockquote>

<Blockquote bg class="p-4">
  Playing with Svelte <A color="blue" class="font-medium hover:underline" href="https://svelte.dev">https://svelte.dev </A>
</Blockquote>

<Blockquote bg class="p-4">
  How?
</Blockquote>
<Blockquote bg class="p-4">
  Consuming the OpenAPI of <A color="blue" class="font-medium hover:underline" href="https://github.com/allendema/zack-market-dl?tab=readme-ov-file#readme">zack-market-dl </A>.
</Blockquote>

<Blockquote bg class="p-4">
  Reduce! Reuse! Recycle!
</Blockquote>


