import { loadAllContries } from "../api"
import { countries } from "../store"

export const loadAllCountriesIntoStore = async () => {
    const allCountries = await loadAllContries ()
    countries.set (allCountries);
}