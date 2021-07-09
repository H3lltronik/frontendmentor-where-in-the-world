<div class="content-container container">
    <div class="row gy-5 mt-4">
        {#each $countries as country}
            <div class="col-12 col-md-6 col-lg-4 col-xxl-3">
                <div class="row justify-content-center">
                    <Country {country}></Country>
                </div>
            </div> 
        {/each}
    </div>
</div>

<script lang="ts">
    import { onMount } from "svelte";
    import Country from './country.svelte'
    import { loadAllCountriesIntoStore } from '../store/lib';
    import { countries } from "../store";

    onMount(async () => {
        loadAllCountriesIntoStore ()
    });
</script>

<style>

</style>