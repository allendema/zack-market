<script lang="ts">
    /*
    Mod from:
    https://flowbite-svelte.com/docs/forms/search-input#search-with-dropdown
    https://flowbite-svelte.com/docs/forms/search-input#location-search

    https://svelte.dev/docs/svelte/$props#Updating-props
    https://svelte.dev/docs/svelte/$props#Fallback-values
    */

    import { page } from "$app/state";
    import { goto } from "$app/navigation";
    import { base as baseUrl} from '$app/paths';
    import { redirect } from '@sveltejs/kit';
    import { resolve } from '$app/paths';

    // import { redirect } from '@sveltejs/kit';
    import { Search, Button, Dropdown, DropdownItem } from "flowbite-svelte";
    import { SearchOutline, ChevronDownOutline } from "flowbite-svelte-icons";

    let activeUrl = $derived(page.url.pathname);

    import { stores } from '$lib/state.svelte.ts';

    let loading = $state(false);
    let error = $state('');
    let products = $state([]);

    const items = [
        { label: "All" },
        ...stores.map(storeName => ({ label: storeName }))
    ];

    let selectCategory = $state("All Stores");

    //let { query = $bindable(), handleSubmit = handleSubmitDefault } = $props();
    let { query = $bindable() } = $props();

    /*
    @component
    updates the url when user inputs a new query. It will show up on hover for
    JavaScript/TypeScript projects using a LSP-compatible editor.

    - updates the url when user inputs a new query
    - 'goto' will only update the visible url but not 'render' the url path
    - You can use markdown here.
    - You can use code blocks here.
    */
    async function handleSubmit(e) {
        e.preventDefault();
        const newQuery = query;

        $: if (!newQuery == "") {
            if (selectCategory.toLowerCase() == "all stores") {
                    selectCategory = "lidl";
                }
                // await goto(`${baseUrl}/${selectCategory.toLowerCase()}/search/${encodeURIComponent(query)}`);
                // await goto(`${baseUrl}/${selectCategory.toLowerCase()}/search/${encodeURIComponent(query)}`, { replaceState: true });
                // 'goto' will only update the visible url but not 'render' the url path when doing multiple searches from differen routes

                // updates the url when user inputs a new query, this will fetch everything again (from cache)
                window.location.href = `${baseUrl}/${selectCategory.toLowerCase()}/search/${encodeURIComponent(query)}`;
                //await redirect(303, `${baseUrl}/${selectCategory.toLowerCase()}/search/${encodeURIComponent(query)}`);
                window.location.href = resolve(`/${selectCategory.toLowerCase()}/search/${encodeURIComponent(query)}`);
                return; // Prevent further execution
        }
    }

</script>

<form class="flex" onsubmit={handleSubmit} >
  <div class="relative">
    <Button class="border-primary-700 rounded-e-none border border-e-0 whitespace-nowrap">
      {selectCategory}
      <ChevronDownOutline class="ms-2.5 h-6 w-6" />
    </Button>
    <Dropdown {activeUrl} simple class="w-40">
      {#each items as { label }}
        <DropdownItem
          onclick={() => {
            selectCategory = label;
          }}
          class="{selectCategory === label ? "underline" : ""} cursor-pointer"
        >
          {label}
        </DropdownItem>
      {/each}
    </Dropdown>
  </div>
  <Search size="md" classes={{ input: "rounded-none py-1.5" }} placeholder="Search..." bind:value={query} clearable/>
  <Button class="rounded-s-none p-2!" onclick={handleSubmit}>
    <SearchOutline class="h-6 w-6" />
  </Button>
</form>
