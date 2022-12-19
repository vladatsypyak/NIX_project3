import {ADD_ANSWER_TO_TOTAL_RESULT, COUNT_TIME, NEXT_ROUND} from "./actions";

const initialState = {
    quizData: [{
        question: "She ___ a doctor",
        options: ["is", "am", "were", "was"],
        correct: "is"
        },
        {
            question: "It ___ a cat",
            options: ["am", "were", "is", "was"],
            correct: "is"
        },
        {
            question: "He ___ a fireman",
            options: ["am", "is", "were", "been"],
            correct: "is"
        },
        {
            question: "I ___ a teacher",
            options: ["am", "is", "were", "was"],
            correct: "am"
        },
        {
            question: "We ___ children",
            options: ["am", "is", "were", "are"],
            correct: "are"
        }],
    currentRound: 0,
    result: [],
    correctAnswers: 0,
    time: 0
}

function quizApp(state = initialState, action) {
    switch (action.type) {
        case NEXT_ROUND:
            return Object.assign({}, state, {
               currentRound: state.currentRound + 1
            });
        case ADD_ANSWER_TO_TOTAL_RESULT:

            return Object.assign({}, state, {
                result: [...state.result, action.result],
                correctAnswers: action.result ? state.correctAnswers + 1 : state.correctAnswers
            });
        case COUNT_TIME:
            return Object.assign({}, state, {
                time: action.time,
            });
        default:
            return state
    }
}

export default quizApp