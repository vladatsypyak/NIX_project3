export const GET_CATS_FROM_API = "GET_CATS_FROM_API"
export const GET_DOGS_FROM_API = "GET_DOGS_FROM_API"
export const SORT_RANDOMLY = "SORT_RANDOMLY"
export const SET_ANIMAL_FILTERS = "SET_ANIMAL_FILTERS"
export const ADD_ANIMAL = "ADD_ANIMAL"
export const GET_PHOTO = "GET_PHOTO"
export const ADD_PHOTO = "ADD_PHOTO"












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
export function addAnimal (photo) {
    return {type: ADD_ANIMAL, photo}
}
export function addPhoto (photo, id) {
    return {type: ADD_PHOTO, photo, id}
}
export function getPhoto (id) {
    return {type: GET_PHOTO, id}
}




