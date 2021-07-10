<header class="col-12 header elevation common-transition">
    <div class="row justify-content-center align-items-center h-100">
        <div class="content-container container">
            <div class="row justify-content-between align-items-center">
                <div class="col-auto">
                    <h1 class="header_title">Where in the world?</h1>
                </div>

                <div class="col-auto">
                    <div class="d-flex align-items-center cursor-pointer" on:click={toggleTheme}>
                        <div class="me-2">
                            <Icon path={ icon }></Icon>
                        </div>
                        <div class="text-capitalize">
                            <span>{$currentTheme} </span>
                            <span>Mode</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>

<div class="content-container container px-5 mt-4 mt-lg-5">
    <div class="row justify-content-between align-items-center">
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
</div>

<script lang="ts">
    import Icon from 'mdi-svelte';
    import { onMount } from 'svelte';
    import {nameFilter, currentTheme} from '../store'
    import { mdiMagnify } from '@mdi/js';
    import FilterSelect from "./filterSelect.svelte";
    import { switchTheme, toggleTheme, themeIcon } from '../utils';
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
    .header {
        height: 80px;
        color: var(--text-color);
        background-color: var(--header-color);
        &_title {
            font-size: 30px;
        }
    }

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
</style>