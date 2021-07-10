<div class="country elevation px-0 transform-transition">
    <Link to={`/details/${urlName()}`}>
        <div class="country_bg common-transition">
            <div class="country_flag">
                <img class="img-fluid" src={country.flag} alt="">
            </div>
        
            <div class="px-4 py-3">
                <div class="">
                    <h2 class="country_title common-transition">{country.name}</h2>
                </div>
                <div class="country_info mt-4 common-transition">
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
    </Link>
</div>

<script lang="ts">
    export let country: Country.RootObject;
    import { Link } from "svelte-navigator";
    const urlName = () => {
        return encodeURIComponent(country.name.toLocaleLowerCase())
    }
</script>

<style lang="scss">
    .country {
        height: 330px;
        max-width: 300px;
        &_bg {
            height: 100%;
            background-color: var(--header-color);
        }
        &_flag {
            width: 100%;
            height: 160px;
            img {
                object-fit: cover;
                width: 100%; height: 100%;
            }
        }
        &_title, &_info {
            color: var(--text-color)
        }
        &_title {
            font-size: 25px;
        }
        &_info {
            font-size: 14px;
        }

        &:hover {
            transform: scale(1.1);
        }
    }
</style>