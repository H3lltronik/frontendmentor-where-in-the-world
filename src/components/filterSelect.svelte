<div class="position-relative elevation common-transition">
    <div class="select" bind:this={select}>
        {#if $regionFilter}
            <span>{$regionFilter}</span> 
        {:else}
            <span>Filter by Region</span>
        {/if}
    
        <Icon path={mdiChevronDown }></Icon>
    </div>
    
    <div class="select_items mt-2 elevation common-transition" bind:this={popover}>
        {#each regions as region}
            <div class="select_item" on:click={() => selectRegionFilter (region)}>{region}</div>
        {/each}
    </div>
</div>

<script lang="ts">
    import tippy from 'tippy.js';
    import Icon from 'mdi-svelte';
    import { onMount } from 'svelte';
    import 'tippy.js/animations/shift-away.css';
    import { mdiChevronDown } from '@mdi/js';
    import {regions, regionFilter} from '../store'

    let popover = null;
    let select = null;
    let tippyIntance = null;

    onMount(() => {
        tippyIntance = tippy (select, {
            content: popover,
            placement: 'bottom',
    		trigger:'click',
            animation: 'shift-away',
            interactive: true
        });
    });

    const selectRegionFilter = (regionFiler: string) => {
        regionFilter.update(n => n = regionFiler);
        tippyIntance?.hide();
    }


</script>

<style lang="scss">
    .select {
        display: flex;
        padding: 0 15px;
        align-items: center;
        color: var(--text-color);
        width: 200px; height: 55px;
        justify-content: space-between;
        &, &_items {
            border-radius: 5px;
            background-color: var(--header-color);
        }
        &_items {
            width: 200px;
            padding: 10px 0;
        }
        &_item {
            cursor: pointer;
            padding: 0 25px;
            color: var(--text-color);
            &:hover {
                background-color: var(--hover-color);
            }
        }
    }
</style>