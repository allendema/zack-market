<script lang="ts">
    /*
    https://flowbite-svelte.com/docs/components/darkmode
    https://flowbite-svelte.com/docs/components/navbar#navbar-with-dropdown
    */

    import { page } from "$app/state";
    import { base as baseUrl} from '$app/paths';

    import { stores } from '$lib/state.svelte.ts';
    import { listingTypes } from '$lib/state.svelte.ts';

    import { Navbar, NavLi, NavUl, NavBrand, NavHamburger, Dropdown, DropdownItem, DropdownDivider } from "flowbite-svelte";
    import { ChevronDownOutline } from "flowbite-svelte-icons";

</script>

<Navbar>
  <NavBrand href={baseUrl}>
    <img src="/favicon.png" class="xs me-3 h-3 xs:h-4" alt="Logo" />
    <span class="self-center text-sm font-semibold whitespace-nowrap">Zack-Market</span>
  </NavBrand>
  <NavHamburger />
  <NavUl activeUrl={baseUrl}>
    <NavLi href="/">Home</NavLi>

    {#each stores as store}
        <NavLi class="cursor-pointer">
        {store}<ChevronDownOutline class="text-primary-800 ms-2 inline h-6 w-6" />
        </NavLi>

        <Dropdown simple class="w-44">
            {#each listingTypes as listingType}
                <DropdownItem href="/{store.toLowerCase()}/{listingType}">{listingType.charAt(0).toUpperCase() + listingType.slice(1)}</DropdownItem>
                <DropdownDivider />
            {/each}
        </Dropdown>

    {/each}

    <NavLi href="/about">About</NavLi>
    <NavLi href="/contact">Contact</NavLi>
    <NavLi href="/faq">FAQ</NavLi>


  </NavUl>
</Navbar>
