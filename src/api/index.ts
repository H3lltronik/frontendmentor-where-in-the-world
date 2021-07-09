
export const loadAllContries = async () : Promise<Country.RootObject[]> => {
    return await fetch("https://restcountries.eu/rest/v2/all")
                 .then(res => res.json())
}