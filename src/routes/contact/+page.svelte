<script>
  import Head from "$lib/components/Head.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { projectName } from '$lib/state.svelte.ts';

  import { Banner, Skeleton, ImagePlaceholder, Button } from "flowbite-svelte";
  import { Heading, P, Span } from "flowbite-svelte";
</script>

<Head></Head>

<Heading tag="h2" class="mb-4">
  Fast! <Span highlight="blue">Zack!</Span> {projectName}.
</Heading>
<P>{projectName}.</P>

<ImagePlaceholder class="py-2" />
<Skeleton class="py-4" />

<Footer></Footer>
