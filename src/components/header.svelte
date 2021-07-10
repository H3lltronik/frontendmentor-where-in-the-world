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

<script lang="ts">
    import Icon from 'mdi-svelte';
    import { onMount } from 'svelte';
    import {currentTheme} from '../store'
    import { switchTheme, toggleTheme, themeIcon } from '../utils';
    let icon = null;

    currentTheme.subscribe(() => { icon = themeIcon() })
    
    onMount (() => {switchTheme ('dark');})
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
</style>