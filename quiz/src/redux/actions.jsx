export const NEXT_ROUND = "NEXT_ROUND"
export const ADD_ANSWER_TO_TOTAL_RESULT = "ADD_ANSWER_TO_TOTAL_RESULT"





export function nextRound () {
    return {type: NEXT_ROUND}
}

export function addAnswerToTotalResult (result) {
    return {type: ADD_ANSWER_TO_TOTAL_RESULT, result}
}

