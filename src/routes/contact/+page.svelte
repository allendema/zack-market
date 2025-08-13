<script>
  import Head from "$lib/components/Head.svelte";
  import Footer from "$lib/components/Footer.svelte";

  import { Banner, Skeleton, ImagePlaceholder, Button } from "flowbite-svelte";
  import { Heading, P, Span } from "flowbite-svelte";
</script>

<Head></Head>

<Heading tag="h2" class="mb-4">
  Fast! <Span highlight="blue">Zack!</Span> Zack-Market.
</Heading>
<P>Zack-Market.</P>

<ImagePlaceholder class="py-2" />
<Skeleton class="py-4" />

<Footer></Footer>
