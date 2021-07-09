<div class="content-container container">
    <div class="row gy-5 mt-4">
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
    import Country from './country.svelte'
    import { filteredCountries } from "../store";
</script>

<style>

</style>