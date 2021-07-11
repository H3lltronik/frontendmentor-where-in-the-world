<div class="page h-100 pb-5">
    <div class="row justify-content-between align-items-center px-5 pt-4 pt-lg-5">
        <div class="col-12 col-sm-9 col-md-6 col-lg-5 col-xl-3">
            <div class="search_box elevation">
                <div class="search_icon">
                    <Icon path={mdiMagnify}></Icon>
                </div>
                <input class="search" type="text" placeholder="Search for a country..." 
                on:input={updateNameFilter} aria-label="Search for a country..."
                >
            </div>
        </div>
        
        <div class="col-auto mt-5 mt-md-1 mt-lg-0">
            <FilterSelect></FilterSelect>
        </div>
    </div>
    
    <div bind:this={mainScroll} class="row  mt-4 countries">
        <div class="position-relative col-12">
            <div class="row gy-5">
                {#each $paginatedFilteredCountries as country, index}
                    <div class="col-12 col-md-6 col-lg-4 col-xxl-3">
                        <div class="row justify-content-center">
                            <Country {country}></Country>
                        </div>
                    </div> 
                {/each}
            </div>
            <div bind:this={endMainScroll} class="end-scroll"></div>
        </div>
    </div>
</div>

<script lang="ts">
    import Icon from 'mdi-svelte';
    import { mdiMagnify } from '@mdi/js';
    import { onMount } from 'svelte';
    import Country from '../components/country.svelte';
    import { themeIcon, observeForEndScroll } from '../utils';
    import FilterSelect from "../components/filterSelect.svelte";
    import { currentTheme, paginatedFilteredCountries ,nameFilter, page, regionFilter } from "../store";

    let timeout = null;
    let icon = null;

    let mainScroll = null;
    let endMainScroll = null;

    onMount(() => { 
        observeForEndScroll(mainScroll, {
            endElement: endMainScroll,
            callback: () => { 
                page.update(p => p + 1) 
            }
        }) 
    })

    const resetScroll = () => {
        if (mainScroll) {
            mainScroll.scroll(0, 0);
        }
    }

    regionFilter.subscribe(resetScroll);
    nameFilter.subscribe(resetScroll);

    currentTheme.subscribe(() => { icon = themeIcon() })

    const updateNameFilter = (e) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            nameFilter.update (val => val = e.target.value)
        }, 500);
    }
</script>

<style lang="scss">
    .search {
        width: 100%;
        border-radius: 5px;
        padding-left: 60px;
        max-width: 480px; height: 55px;
        outline: none; border: none;
        background-color: var(--header-color);
        &::placeholder {
            color: var(--placeholder-color);
        }
        &_box, & {
            color: var(--text-color);
        }
        &_box {
            position: relative;
        }
        &_icon {
            left: 20px; top: 50%;
            position: absolute;
            transform: translateY(-50%);
        }
    }

    .page {
        flex: 1;
        display: flex;
        overflow: hidden;
        flex-direction: column;
    }
    
    .countries {
        flex: 1;
        overflow-y: auto;
        overflow-x: hidden;
        position: relative;
    }
    
    .end-scroll {
        top: 80%;
        width: 100%;
        height: 2px;
        position: absolute;
    }
</style>