<script>
  import Head from "$lib/components/Head.svelte";
  import { projectName } from '$lib/state.svelte.ts';

  import { Banner, Skeleton, ImagePlaceholder, Button } from "flowbite-svelte";
  import { Heading, Span } from "flowbite-svelte";
</script>

<Head></Head>

<Heading tag="h2" class="mb-4">
  <Span highlight="blue">Fast! Zack! {projectName}.</Span>
</Heading>

<ImagePlaceholder class="py-2" />
<Skeleton class="py-4" />
