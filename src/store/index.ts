import { loadAllContries } from "../api";
import { derived, readable, writable } from "svelte/store";

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

export const filteredCountries = derived(
    [countries, regionFilter, nameFilter], 
    ([$countries, $regionFilter, $nameFilter]) => {
        let filtered = $countries;

        if ($regionFilter != 'All')
            filtered = filtered.filter (c => c.region == $regionFilter);

        filtered = filtered.filter(c => 
            c.name.toLocaleLowerCase().indexOf($nameFilter.toLocaleLowerCase()) > -1
        );

        return filtered;
    }
)
