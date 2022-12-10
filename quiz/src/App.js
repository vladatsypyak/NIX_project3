import './App.css';
import {useState} from "react";
import {store} from "./redux/store";
import {addAnswerToTotalResult, nextRound} from "./redux/actions";
import Quiz from "./components/Quiz";

function App() {
    const state = store.getState()

    const [question, setQuestion] = useState(state.quizData[0].question)
    const [options, setOptions] = useState(state.quizData[0].options)
    const [chosenOption, setChosenOption] = useState("")
    function onNextClick() {
        store.dispatch(addAnswerToTotalResult(checkOptionIsCorrect(chosenOption)))
        store.dispatch(nextRound())
        const round = store.getState().currentRound
        setQuestion(state.quizData[round].question)
        setOptions(state.quizData[round].options)
        setChosenOption("")
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
        <div className="App">
            <div className="container">
                <p>{question}</p>
                <div className="options">
                    {
                        options.map((el)=>{
                            return <Quiz text={el}
                                         className={`quiz ${el === chosenOption ? "chosen" : null }`}
                                         onOptionClick={onOptionClick} />
                        })
                    }
                </div>
                <button onClick={onNextClick}>Next</button>
            </div>
        </div>
    );
}

export default App;
