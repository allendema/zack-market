<script lang="ts">
    import { FooterCopyright, FooterIcon } from "flowbite-svelte";
    import { Footer as FlowbiteFooter } from "flowbite-svelte";
    import { LaptopCodeOutline } from "flowbite-svelte-icons";

</script>

<FlowbiteFooter>
    <div class="bg-gray-100 px-4 py-6 md:flex-auto md:items-center md:justify-between dark:bg-gray-800 dark">
        <FooterCopyright class="text-sm text-gray-900 dark:text-gray-200 sm:text-center" href="https://github.com/allendema" by="Allen Dema" />
        <div class="mt-4 flex space-x-6 sm:justify-center md:mt-0 rtl:space-x-reverse">

        <FooterIcon href="https://github.com/allendema">
            <LaptopCodeOutline class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />
            <p>github - allendema</p>
        </FooterIcon>

        </div>
    </div>
</FlowbiteFooter>
