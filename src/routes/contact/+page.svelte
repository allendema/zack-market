<script>
  import Head from "$lib/components/Head.svelte";
  import { projectName } from '$lib/state.svelte.ts';
  import Footer from "$lib/components/Footer.svelte";

  import { Heading, Span } from "flowbite-svelte";
</script>

<Head></Head>

<Heading tag="h2" class="mb-4">
  <Span highlight="blue">Fast! Zack! {projectName}.</Span>
</Heading>

<Footer> </Footer>
