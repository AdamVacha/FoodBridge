import { writable } from "svelte/store"

export interface ShelterModel<T extends Record<PropertyKey, any>> {
    data: T[],
    filtered: T[],
    search: string
}

export const createShelterSearch = <T extends Record<PropertyKey, any>>(data: T[]) => {
    const { subscribe, set, update } = writable<ShelterModel<T>>({
        data: data,
        filtered: data,
        search: '',
    })

    return {
        subscribe,
        set,
        update,
    }
}

export const handeler = <T extends Record<PropertyKey, any>>(shelter: ShelterModel<T>) => {
    const searchTerm = shelter.search.toLowerCase() || ""
    shelter.filtered = shelter.data.filter((item) => {
        return item.searchTerms.toLowerCase().includes(searchTerm)
    })
}