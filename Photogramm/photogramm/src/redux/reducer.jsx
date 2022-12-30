import {
    ADD_ANIMAL,
    ADD_PHOTO,
    GET_CATS_FROM_API,
    GET_DOGS_FROM_API,
    SET_ANIMAL_FILTERS,
    SORT_RANDOMLY
} from "./actions";

const initialState = {
    photos: [
        {
            breed: "Procyon Lotor",
            name: "Procyon Lotor",
            images: [{ url: "https://i.natgeofe.com/n/8271db90-5c35-46bc-9429-588a9529e44a/raccoon_thumb_3x2.JPG"
            }]
            ,
            id: "1",
            temperament: "active, angry",
            animal: "other"

        },
        {
            breed: "Marble Fox",
            name: "Marble Fox",
            images: [{ url: "https://petcomments.com/i/r/630x-/media/p/78/marble-fox-tb.jpg"
            }, { url: "https://i.natgeofe.com/n/8271db90-5c35-46bc-9429-588a9529e44a/raccoon_thumb_3x2.JPG"
            }]
            ,
            id: "2",
            temperament: "stubborn, independent",
            animal: "other"

        },
       
    ],
    filters: []

}

function photoGramm(state = initialState, action) {
    switch (action.type) {
        case GET_DOGS_FROM_API:
            return Object.assign({}, state, {
                photos: [...action.dogs.map((el) => {
                    if (el && el.image && el.image.url) {
                        return {
                            breed: el.name,
                            name: el.name,
                            images: [el.image],
                            id: el.id,
                            temperament: el.temperament,
                            animal: "dog"

                        }
                    }

                }), ...state.photos]
            });
        case GET_CATS_FROM_API:
            return Object.assign({}, state, {
                photos: [...action.cats.map((el) => {
                    if (el && el.image && el.image.url) {
                        return {
                            breed: el.name,
                            images: [el.image],
                            id: el.id,
                            temperament: el.temperament,
                            animal: "cat",
                            name: el.name
                        }
                    }
                }), ...state.photos]
            });
        case SORT_RANDOMLY:
            return Object.assign({}, state, {
                photos: [...state.photos.sort((a, b) => 0.5 - Math.random())]
            });
        case SET_ANIMAL_FILTERS:
            if (state.filters.includes(action.animal)) {
                return Object.assign({}, state, {

                    filters: state.filters.filter((el) => el !== action.animal)
                })
            }
            return Object.assign({}, state, {

                filters: [...state.filters, action.animal]
            })
        case ADD_ANIMAL:
            console.log(action.photo)
            return Object.assign({}, state, {
                photos: [action.photo, ...state.photos]
            })
        case ADD_PHOTO:
            console.log(action.photo)
            return Object.assign({}, state, {
                photos: state.photos.map(obj => {
                    if(obj){
                        if(action.id == obj.id){
                            console.log("+")
                            obj.images = [ ...obj.images, {url: action.photo}]
                        }
                    }

                    return obj
                })
            })



        default:
            return state
    }
}

export default photoGramm