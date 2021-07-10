
export const loadAllContries = async () : Promise<Country.RootObject[]> => {
    return await fetch("https://restcountries.eu/rest/v2/all")
                 .then(res => res.json())
}
export const loadContryByName = async (name: string) : Promise<Country.RootObject> => {
    return await fetch(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
                 .then(res => res.json())
                 .then(res => res[0])
}