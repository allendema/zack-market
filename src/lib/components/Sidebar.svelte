<script lang="ts">

    /*
    Mods from:
    https://flowbite-svelte.com/docs/components/sidebar#adding-links-and-active-class
    https://flowbite-svelte.com/docs/components/sidebar#always-open
    */

    import { page } from "$app/state";

    import { stores } from '$lib/state.svelte.ts';
    import { listingTypes } from '$lib/state.svelte.ts';

    import { Sidebar, SidebarGroup, SidebarItem, SidebarButton, uiHelpers } from "flowbite-svelte";
    import { SidebarDropdownWrapper, DropdownItem, DropdownDivider } from "flowbite-svelte";
    import { ChartOutline, GridSolid, MailBoxSolid, UserSolid, StoreSolid } from "flowbite-svelte-icons";

    let activeUrl = $state(page.url.pathname);
    const SidebarUi = uiHelpers();
    let isSidebarOpen = $state(true);
    const closeSidebar = SidebarUi.close;

    $effect(() => {
        isSidebarOpen = SidebarUi.isOpen;
        activeUrl = page.url.pathname;
    });

    const spanClass = "flex-1 ms-3 whitespace-nowrap";
    const activeClass = "flex items-center p-2 text-base font-normal text-white bg-primary-600 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-primary-800 dark:hover:bg-primary-800";
    const nonActiveClass = "flex items-center p-2 text-base font-normal text-green-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-green-700";

</script>


<SidebarButton onclick={SidebarUi.toggle} class="mb-2" />
<div class="relative">
    <Sidebar alwaysOpen {activeUrl} backdrop={false} isSingle={false} isOpen={isSidebarOpen} closeSidebar={closeSidebar} params={{ x: -50, duration: 50 }} classes={{ nonactive: {nonActiveClass}, active: {activeClass} }} position="fixed" class="z-50 h-full">

    <SidebarGroup>
    {#each stores as store, index}
        <SidebarItem label={store} {spanClass} href="/{store.toLowerCase()}">
            {#snippet icon()}
                <StoreSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
            {/snippet}
        </SidebarItem>

        <!-- Only keep the first store dropdown open to illustrate that each store can be "opened". -->
        <SidebarDropdownWrapper isOpen={index == 0}>
            {#each listingTypes as listingType}
                <DropdownDivider> </DropdownDivider>
                <SidebarItem label={listingType} href="/{store.toLowerCase()}/{listingType}"/>
            {/each}
        </SidebarDropdownWrapper>
    {/each}
    </SidebarGroup>

    </Sidebar>

</div>
