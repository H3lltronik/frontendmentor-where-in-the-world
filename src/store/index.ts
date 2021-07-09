import { writable } from "svelte/store";

export const countries = writable<Country.RootObject[]>([]);