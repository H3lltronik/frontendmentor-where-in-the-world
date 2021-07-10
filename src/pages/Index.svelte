<div class="page h-100">
    <div class="row justify-content-between align-items-center px-5 pt-4 pt-lg-5">
        <div class="col-auto">
            <div class="search_box elevation">
                <div class="search_icon">
                    <Icon path={mdiMagnify}></Icon>
                </div>
                <input class="search" type="text" placeholder="Search for a country..." 
                on:input={updateNameFilter}
                >
            </div>
        </div>
        
        <div class="col-auto">
            <FilterSelect></FilterSelect>
        </div>
    </div>
    
    <div class="row gy-5 mt-4 countries">
        {#each $filteredCountries as country}
            <div class="col-12 col-md-6 col-lg-4 col-xxl-3">
                <div class="row justify-content-center">
                    <Country {country}></Country>
                </div>
            </div> 
        {/each}
    </div>
</div>

<script lang="ts">
    import Icon from 'mdi-svelte';
    import { onMount } from 'svelte';
    import { mdiMagnify } from '@mdi/js';
    import { filteredCountries } from "../store";
    import {nameFilter, currentTheme} from '../store'
    import Country from '../components/country.svelte'  
    import FilterSelect from "../components/filterSelect.svelte";
    import { switchTheme, themeIcon } from '../utils';
    let timeout = null;
    let icon = null;

    currentTheme.subscribe(() => { icon = themeIcon() })
    
    onMount (() => {switchTheme ('dark');})

    const updateNameFilter = (e) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            nameFilter.update (val => val = e.target.value)
        }, 500);
    }
</script>

<style lang="scss">
    .search {
        border-radius: 5px;
        padding-left: 60px;
        width: 480px; height: 55px;
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
        &::-webkit-scrollbar-thumb {
            background-color: var(--header-color);
        }

        &::-webkit-scrollbar-track {
            background: white;
        }

        &::-webkit-scrollbar {
            width: 20px;
        }
    }
</style>