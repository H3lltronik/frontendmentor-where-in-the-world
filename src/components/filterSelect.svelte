<div class="position-relative">
    <div class="select" bind:this={select}>
        <span>Filter by Region</span>
    
        <Icon path={mdiChevronDown }></Icon>
    </div>
    
    <div class="select_items mt-2" bind:this={popover}>
        <div class="select_item">Africa</div>
        <div class="select_item">Algo</div>
        <div class="select_item">Mas</div>
    </div>
</div>

<script>
    import Icon from 'mdi-svelte';
    import { onMount } from 'svelte';
    import { mdiChevronDown } from '@mdi/js';
    import tippy from 'tippy.js';

    let popover = null;
    let select = null;

    onMount(() => {
        tippy (select, {
            content: popover,
            placement: 'bottom',
            arrow:'true',
    		trigger:'click',
            interactive: true
        });
    });


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