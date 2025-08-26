<script lang="ts">
  /*
    https://flowbite-svelte.com/docs/typography/heading#highlighted-heading
    TODO: FIXME: fix white text on white background
    */

  import Head from "$lib/components/Head.svelte";
  import { projectName } from '$lib/state.svelte.ts';

  import { Skeleton, ImagePlaceholder } from "flowbite-svelte";
  import { Heading, P, Span } from "flowbite-svelte";
</script>

<Head></Head>

<Heading tag="h2" class="mb-4"> Fast! <Span highlight="blue">Zack!</Span> {projectName}.</Heading>

<P> {projectName}. </P>

<ImagePlaceholder class="py-2 dark" />
<Skeleton class="py-4 dark" />
