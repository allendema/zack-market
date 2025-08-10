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
    import Footer from "$lib/components/Footer.svelte";
    import Sitemap from "$lib/components/Sitemap.svelte";
    import Toast from "$lib/components/Toast.svelte";
    import Sidebar from "$lib/components/Sidebar.svelte";
    import NavigationBar from "$lib/components/NavigationBar.svelte";

    import { Skeleton, ImagePlaceholder} from "flowbite-svelte";
    import { Heading, P, Span, Blockquote } from "flowbite-svelte";

</script>

<Head></Head>

<Heading tag="h2" class="mb-4 dark">
  <Span highlight="blue">Frequently Asked Questions</Span>
</Heading>

<!-- <Skeleton class="py-4 dark" /> -->

<NavigationBar/>

<Sidebar/>

<P>FAQ</P>

<Blockquote
   bg
   class="p-4"
>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quas commodi accusamus dignissimos qui totam iste rem necessitatibus? Cumque minus et animi nostrum deserunt provident excepturi laboriosam ipsum minima nisi!
</Blockquote>

<Blockquote
   bg
   class="p-4"
>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quas commodi accusamus dignissimos qui totam iste rem necessitatibus? Cumque minus et animi nostrum deserunt provident excepturi laboriosam ipsum minima nisi!
</Blockquote>

<Blockquote
   bg
   class="p-4"
>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quas commodi accusamus dignissimos qui totam iste rem necessitatibus? Cumque minus et animi nostrum deserunt provident excepturi laboriosam ipsum minima nisi!
</Blockquote>
<Blockquote
   bg
   class="p-4"
>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quas commodi accusamus dignissimos qui totam iste rem necessitatibus? Cumque minus et animi nostrum deserunt provident excepturi laboriosam ipsum minima nisi!
</Blockquote>

<Blockquote
   bg
   class="p-4"
>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quas commodi accusamus dignissimos qui totam iste rem necessitatibus? Cumque minus et animi nostrum deserunt provident excepturi laboriosam ipsum minima nisi!
</Blockquote>

<Blockquote
   bg
   class="p-4"
>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quas commodi accusamus dignissimos qui totam iste rem necessitatibus? Cumque minus et animi nostrum deserunt provident excepturi laboriosam ipsum minima nisi!
</Blockquote>

<ImagePlaceholder/>

<Toast text="Reduce! Reuse! Recycle!" counter="3"> </Toast>

<Sitemap></Sitemap>

<Footer></Footer>
