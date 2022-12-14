import {GET_CATS_FROM_API, GET_DOGS_FROM_API} from "./actions";

const initialState = {
    photos: [{
        src: "She ___ a doctor",
        options: ["is", "am", "were", "was"],
        correct: "is"
        },
        ],

}

function photoGramm(state = initialState, action) {
    switch (action.type) {
        case GET_DOGS_FROM_API:
            return Object.assign({}, state, {
              photos: [...action.dogs.map((el)=>{
                  return {
                      breed: el.bred_for,
                      breed_group: el.breed_group,
                      name: el.name,
                      image:el.image,
                      id: el.id,
                      temperament: el.temperament,
                      animal:  "dog"

                  }
              }), ...state.photos]
            });
        case GET_CATS_FROM_API:
            return Object.assign({}, state, {
                photos: [...action.cats.map((el)=>{
                    return {
                        breed: el.name,
                        image:el.image,
                        id: el.id,
                        temperament: el.temperament,
                        animal:  "cat"
                    }
                }), ...state.photos]
            });

        default:
            return state
    }
}

export default photoGramm