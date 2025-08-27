<script lang="ts">
  import './layout.css';
  import '../app.css';

  import NavigationBar from "$lib/components/NavigationBar.svelte";
  import Sidebar from "$lib/components/Sidebar.svelte";
  import SearchBar from "$lib/components/SearchBar.svelte";
  import Sitemap from "$lib/components/Sitemap.svelte";
  import Footer from "$lib/components/Footer.svelte";

  import { DarkMode } from "flowbite-svelte";

</script>

<DarkMode class="text-primary-500 dark:text-primary-600 border dark:border-gray-800" />

<NavigationBar></NavigationBar>

<Sidebar></Sidebar>

<SearchBar></SearchBar>

<slot />

<Sitemap></Sitemap>

<Footer></Footer>
