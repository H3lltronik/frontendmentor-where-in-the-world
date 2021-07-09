<header class="col-12 header">
    <div class="row justify-content-center align-items-center h-100">
        <div class="content-container container">
            <div class="row justify-content-between align-items-center">
                <div class="col-auto">
                    <h1>Where in the world?</h1>
                </div>

                <div class="col-auto">
                    <div class="d-flex align-items-center">
                        <div class="me-2">
                            <Icon path={ mdiWeatherNight }></Icon>
                        </div>
                        <span>Dark Mode</span>
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
                on:input={e => nameFilter.update (val => val = e.target.value)}
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
    import { mdiMagnify, mdiWeatherNight  } from '@mdi/js';
    import FilterSelect from "./filterSelect.svelte";
    import {nameFilter} from '../store'

</script>

<style lang="scss">
    .header {
        height: 80px;
        color: white;
        background-color: var(--header-color);
    }

    .search {
        border-radius: 5px;
        padding-left: 60px;
        color: var(--text-color);
        width: 480px; height: 55px;
        outline: none; border: none;
        background-color: var(--header-color);
        &::placeholder {
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