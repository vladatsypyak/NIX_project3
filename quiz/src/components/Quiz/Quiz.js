import Timer from "../Timer/Timer";
import {useState} from "react";
import {addAnswerToTotalResult, nextRound} from "../../redux/actions";
import QuizItem from "./QuizItem";
import {store} from "../../redux/store";
import "./Quiz.css"

function Quiz(props) {

    const state = store.getState()

    const [question, setQuestion] = useState(state.quizData[0].question)
    const [options, setOptions] = useState(state.quizData[0].options)
    const [chosenOption, setChosenOption] = useState("")
    const [timer, setTimer] = useState(true)

    const initialTime = 30

    function onNextClick() {
        store.dispatch(addAnswerToTotalResult(checkOptionIsCorrect(chosenOption), chosenOption))
        store.dispatch(nextRound())
        const round = store.getState().currentRound
        if (round > 4) {
            setTimer(false)
            props.showResult()
        } else {
            setQuestion(state.quizData[round].question)
            setOptions(state.quizData[round].options)
            setChosenOption("")
        }
        props.setRound()
    }


    function onOptionClick(text, e) {
        e.classList.toggle("chosen")
        setChosenOption(text)
    }

    function checkOptionIsCorrect(option) {
        const round = store.getState().currentRound
        return (option === state.quizData[round].correct)
    }
    return (
        <div className="quiz_container">
        <Timer showResult={()=>props.showResult()} isTimerOn={timer} initialTime={initialTime}/>
        <div className="current_round">
            {store.getState().currentRound + 1} <span className={"of"}>of</span> 5
        </div>
        <p className={"question"}>{question}</p>
        <div className="options">
            {
                options.map((el) => {
                    return <QuizItem text={el}
                                     className={`quiz ${el === chosenOption ? "chosen" : null}`}
                                     onOptionClick={onOptionClick}/>
                })
            }
        </div>
        <button className={"next"} onClick={onNextClick}>Next</button>

    </div>
    )
}

export default Quiz