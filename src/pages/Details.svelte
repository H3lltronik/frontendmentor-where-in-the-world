<div class="row align-items-center mt-5 px-3 px-lg-0">
    <div class="col-12">
        <Link to="/" class="">
            <div class="d-inline-block ps-5 ps-xxl-0">
                <div class="country_goback elevation common-transition">
                    <div class=""><Icon path={mdiArrowLeft}></Icon></div>
                    <div class="">Back</div>
                </div>
            </div>
        </Link>
    </div>
    {#if country }
         <div class="col-12">
             <div class="row mt-5 justify-content-around justify-content-xxl-between">
                 <div class="col-12 col-lg-5 col-xxl-5">
                     <div class="country_flag">
                         <img class="" src={country?.flag} alt="flag">
                     </div>
                 </div>
                 <div class="col-12 col-lg-5 col-xxl-6 country_info common-transition">
                     <div class="px-4">
                         <h2 class="mt-4">{country?.name}</h2>
                         <div class="row mt-5">
                             <div class="col-12 col-lg-6">
                                 <div class="">
                                     <strong>Native Name: </strong>
                                     <span>{country?.nativeName}</span>
                                 </div>
                                 <div class="">
                                     <strong>Population: </strong>
                                     <span>{country?.population}</span>
                                 </div>
                                 <div class="">
                                     <strong>Region: </strong>
                                     <span>{country?.region}</span>
                                 </div>
                                 <div class="">
                                     <strong>Subregion: </strong>
                                     <span>{country?.subregion}</span>
                                 </div>
                                 <div class="">
                                     <strong>Capital: </strong>
                                     <span>{country?.capital}</span>
                                 </div>
                             </div>
                             <div class="col-12 col-lg-6">
                                 <div class="">
                                     <strong>Top Level Domain: </strong>
                                     <span>{country?.topLevelDomain}</span>
                                 </div>
                                 <div class="">
                                     <strong>Currencies: </strong>
                                     <span>{country?.currencies.map(c => c.code).join(", ")}</span>
                                 </div>
                                 <div class="">
                                     <strong>Languajes: </strong>
                                     <span>{country?.languages.map(l => l.name).join(", ")}</span>
                                 </div>
                             </div>
                         </div>
                     </div>
     
                     <div class="row gy-3 align-items-center mt-5 common-transition">
                         {#if country?.borders.length > 0 }
                             <div class="col-auto">
                                 <strong>Border Countries: </strong>
                             </div>
                             {#each country.borders as border}
                                 <div class="col-auto ">
                                     <div class="country_border elevation common-transition">
                                         <span>{border}</span>
                                     </div>
                                 </div>
                             {/each}
                         {/if}
                     </div>
                 </div>
             </div>
         </div>
    {/if}
</div>

<script lang="ts">
    import Icon from 'mdi-svelte';
    import { onMount } from "svelte";
    import { mdiArrowLeft } from '@mdi/js';
    import {loadContryByName} from "../api"
    import { Link } from "svelte-navigator";
    import {loading} from '../store'

    export let name = "åland%20islands";

    let country : Country.RootObject = null;
    $: {
        onMount(async () => {
            loading.set(true)
            country = await loadContryByName(name);
            loading.set(false)
        })
    }

</script>

<style lang="scss">
    .country {
        &_info {
            color: var(--text-color);
        }
        &_flag {
            img {
                width: 100%; height: 100%;
                object-fit: cover;
            }
        }

        &_border {
            font-size: 12px;
            font-weight: 100;
            padding: 5px 15px;
            background-color: var(--header-color);
        }
        
        &_goback {
            width: 120px;
            display: flex;
            padding: 10px 25px 10px 20px;
            align-items: center;
            color: var(--text-color);
            justify-content: space-between;
            background-color: var(--header-color);
        }
    }
</style>