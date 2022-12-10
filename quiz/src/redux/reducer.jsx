import {ADD_ANSWER_TO_TOTAL_RESULT, NEXT_ROUND} from "./actions";

const initialState = {
    quizData: [{
        question: "She ___ a doctor",
        options: ["is", "am", "were", "was"],
        correct: "is"
        },
        {
            question: "It ___ a doctor",
            options: ["am", "were", "is", "was"],
            correct: "is"
        },
        {
            question: "He ___ a doctor",
            options: ["am", "is", "were", "was"],
            correct: "is"
        },
        {
            question: "I ___ a doctor",
            options: ["am", "is", "were", "was"],
            correct: "am"
        },
        {
            question: "We ___ a doctor",
            options: ["am", "is", "were", "are"],
            correct: "are"
        }],
    currentRound: 0,
    result: []
}

function quizApp(state = initialState, action) {
    switch (action.type) {
        case NEXT_ROUND:
            return Object.assign({}, state, {
               currentRound: state.currentRound + 1
            });
        case ADD_ANSWER_TO_TOTAL_RESULT:
            return Object.assign({}, state, {
                result: [...state.result, action.result]
            });
        default:
            return state
    }
}

export default quizApp