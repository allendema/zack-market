<script lang="ts">
    /*
    Mod from:
    https://flowbite-svelte.com/blocks/application/dashboard-footer
    https://flowbite-svelte.com/docs/components/footer#sitemap-links
    */
    import { FooterCopyright, FooterIcon, FooterLinkGroup, FooterLink, Tooltip } from "flowbite-svelte";
    import { Footer as FlowbiteFooter } from "flowbite-svelte";
    import { LaptopCodeOutline } from "flowbite-svelte-icons";

</script>

<FlowbiteFooter>
    <div class="bg-gray-100 px-4 py-6 md:flex-auto md:items-center md:justify-between dark:bg-gray-800 dark">
        <FooterCopyright class="text-sm text-gray-900 dark:text-gray-200 sm:text-center" href="https://github.com/allendema" by="Allen Dema" />
        <div class="mt-4 flex space-x-6 sm:justify-center md:mt-0 rtl:space-x-reverse">

        <FooterIcon href="https://github.com/allendema">
            <Tooltip placement="bottom"> @allendema </Tooltip>
            <LaptopCodeOutline class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />
            <p>github</p>
        </FooterIcon>

        <FooterIcon href="https://codeberg.org/allendema">
            <Tooltip placement="bottom"> @allendema </Tooltip>
            <LaptopCodeOutline class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />
            <p>codeberg</p>
        </FooterIcon>

        <FooterIcon href="xmpp:allen@tchncs.de">
            <Tooltip placement="bottom"> allen@tchncs.de </Tooltip>
            <LaptopCodeOutline class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />
            <p>xmpp - allen@tchncs.de</p>
        </FooterIcon>

        </div>
    </div>
</FlowbiteFooter>
