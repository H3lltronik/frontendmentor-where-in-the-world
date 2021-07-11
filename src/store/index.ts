import { loadAllContries } from "../api";
import { derived, readable, writable } from "svelte/store";
import { paginate } from "..//utils";
import {itemsPerPage} from '../config'

export const regions = [
    "All",
    "Africa", 
    "Americas", 
    "Asia", 
    "Europe", 
    "Oceania"
];
export const countries = readable<Country.RootObject[]>([], (set) => {
    (async function () {
        set (await loadAllContries ())
    })()
});
export const nameFilter = writable<string>("");
export const regionFilter = writable<string>("All");

export const currentTheme = writable<Theme|null>(null);

export const loading = writable<boolean>(false)
export const page = writable<number>(1)

export const filteredCountries = derived(
    [countries, regionFilter, nameFilter], 
    ([$countries, $regionFilter, $nameFilter]) => {
        page.set (1);
        let filtered = $countries;

        if ($regionFilter != 'All')
            filtered = filtered.filter (c => c.region == $regionFilter);

        filtered = filtered.filter(c => 
            c.name.toLocaleLowerCase().indexOf($nameFilter.toLocaleLowerCase()) > -1
        );

        return filtered;
    }
)

export const paginatedFilteredCountries = derived(
    [filteredCountries, page],
    ([$filteredCountries, $page]) => {
        const paginated = paginate<Country.RootObject>($filteredCountries, itemsPerPage * $page, 1);
        return paginated;
    }
);