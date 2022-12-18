export const GET_CATS_FROM_API = "GET_CATS_FROM_API"
export const GET_DOGS_FROM_API = "GET_DOGS_FROM_API"
export const SORT_RANDOMLY = "SORT_RANDOMLY"
export const SET_ANIMAL_FILTERS = "SET_ANIMAL_FILTERS"










export function getDogsFromApi (dogs) {
    return {type: GET_DOGS_FROM_API, dogs}
}

export function getCatsFromApi (cats) {
    return {type: GET_CATS_FROM_API, cats}
}

export function sortRandomly () {
    return {type: SORT_RANDOMLY, }
}

export function setAnimalFilters (animal) {
    return {type: SET_ANIMAL_FILTERS, animal}
}


