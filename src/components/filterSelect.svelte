<div class="position-relative">
    <div class="select" bind:this={select}>
        {#if $regionFilter}
            <span>{$regionFilter}</span> 
        {:else}
            <span>Filter by Region</span>
        {/if}
    
        <Icon path={mdiChevronDown }></Icon>
    </div>
    
    <div class="select_items mt-2" bind:this={popover}>
        {#each regions as region}
            <div class="select_item" on:click={() => selectRegionFilter (region)}>{region}</div>
        {/each}
    </div>
</div>

<script lang="ts">
    import Icon from 'mdi-svelte';
    import { onMount } from 'svelte';
    import { mdiChevronDown } from '@mdi/js';
    import {regions, regionFilter} from '../store'
    import tippy from 'tippy.js';

    let popover = null;
    let select = null;

    onMount(() => {
        tippy (select, {
            content: popover,
            placement: 'bottom',
    		trigger:'click',
            interactive: true
        });
    });

    const selectRegionFilter = (regionFiler: string) => {
        regionFilter.update(n => n = regionFiler)
    }


</script>

<style lang="scss">
    .select {
        display: flex;
        padding: 0 15px;
        align-items: center;
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
            &:hover {
                background-color: var(--hover-color);
            }
        }
    }
</style>