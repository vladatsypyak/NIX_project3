export const GET_CATS_FROM_API = "GET_CATS_FROM_API"
export const GET_DOGS_FROM_API = "GET_DOGS_FROM_API"







export function getDogsFromApi (dogs) {
    return {type: GET_DOGS_FROM_API, dogs}
}

export function getCatsFromApi (cats) {
    return {type: GET_CATS_FROM_API, cats}
}


