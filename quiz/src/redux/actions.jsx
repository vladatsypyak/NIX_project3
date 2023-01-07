export const NEXT_ROUND = "NEXT_ROUND"
export const ADD_ANSWER_TO_TOTAL_RESULT = "ADD_ANSWER_TO_TOTAL_RESULT"
export const COUNT_TIME = "COUNT_TIME"





export function nextRound () {
    return {type: NEXT_ROUND}
}

export function addAnswerToTotalResult (result, answer) {
    return {type: ADD_ANSWER_TO_TOTAL_RESULT, result, answer}
}

export function countTime(time) {
    return {type: COUNT_TIME, time}
}

