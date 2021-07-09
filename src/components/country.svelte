<div class="country elevation px-0">
    <div class="country_flag">
        <img class="img-fluid" src={country.flag} alt="">
    </div>

    <div class="px-4 py-3">
        <div class="">
            <h2 class="country_title">{country.name}</h2>
        </div>
        <div class="country_info mt-4">
            <div class="">
                <strong>Population:</strong>
                <span>{country.population}</span>
            </div>
            <div class="">
                <strong>Region:</strong>
                <span>{country.region}</span>
            </div>
            <div class="">
                <strong>Capital:</strong>
                <span>{country.capital}</span>
            </div>
        </div>
    </div>
</div>

<script lang="ts">
    export let country: Country.RootObject;
</script>

<style lang="scss">
    .country {
        height: 330px;
        max-width: 300px;
        background-color: var(--header-color);
        &_flag {
            width: 100%;
            height: 160px;
            img {
                object-fit: cover;
                width: 100%; height: 100%;
            }
        }
        &_title {
            font-size: 25px;
        }
        &_info {
            font-size: 14px;
        }
    }
</style>