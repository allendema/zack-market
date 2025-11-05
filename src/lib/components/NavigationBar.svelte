<script lang="ts">
    /*
    https://flowbite-svelte.com/docs/components/darkmode
    https://flowbite-svelte.com/docs/components/navbar#navbar-with-dropdown
    https://flowbite-svelte.com/docs/components/mega-menu#default-mega-menu
    */

    import { resolve } from '$app/paths';

    import { stores, projectName } from '$lib/state.svelte.ts';
    import { listingTypes } from '$lib/state.svelte.ts';

    import { Navbar, NavLi, NavUl, NavBrand, NavHamburger, Dropdown, DropdownItem, DropdownDivider } from "flowbite-svelte";
    import { ChevronDownOutline } from "flowbite-svelte-icons";

</script>

<Navbar>
  <NavBrand href={resolve("/")}>
    <img src="/favicon.svg" class="xs me-3 h-3 xs:h-4" alt="Logo" />
    <span class="self-center text-sm font-semibold whitespace-nowrap">{projectName}</span>
  </NavBrand>
  <NavHamburger />
  <NavUl activeUrl={resolve("/")}>
    <NavLi class="font-semibold text-black dark:md:text-black" href="/">Home</NavLi>

    {#each stores as store (store)}
        <NavLi class="cursor-pointer font-semibold bg-white text-gray-900 dark:text-black dark:md:text-black dark:hover:bg-yellow-500 dark:md:text-black"> 
        <!--<NavLi class="font-semibold bg-white text-gray-900 dark:bg-gray-800 dark:text-black xl">-->
        {store}<ChevronDownOutline class="ms-2 inline h-6 w-6" />
        </NavLi>

        <Dropdown simple class="w-44">
            {#each listingTypes as listingType (listingType)}
                <DropdownItem data-sveltekit-reload href="/{store.toLowerCase()}/{listingType}">{listingType.charAt(0).toUpperCase() + listingType.slice(1)}</DropdownItem>
                <DropdownDivider />
            {/each}
        </Dropdown>

    {/each}

    <NavLi class="cursor-pointer font-semibold bg-white text-gray-900 dark:text-black dark:md:text-black" href="/about">About</NavLi>
    <!--<NavLi class="cursor-pointer font-semibold bg-white text-gray-900 dark:text-black dark:md:text-black" href="/contact">Contact</NavLi> -->
    <NavLi class="cursor-pointer font-semibold bg-white text-gray-900 dark:text-black dark:md:text-black" href="/faq">FAQ</NavLi>


  </NavUl>
</Navbar>
