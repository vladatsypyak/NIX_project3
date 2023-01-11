import './App.css';
import {useState} from "react";
import {store} from "./redux/store";
import {addAnswerToTotalResult, nextRound} from "./redux/actions";
import Quiz from "./components/Quiz";
import Result from "./components/Result/Result";
import ProgressBar from "./components/ProgressBar";
import Timer from "./components/Timer";
import Start from "./components/Start";


function App() {
    const state = store.getState()

    const [question, setQuestion] = useState(state.quizData[0].question)
    const [options, setOptions] = useState(state.quizData[0].options)
    const [chosenOption, setChosenOption] = useState("")
    const [showResult, setShowResult] = useState(false)
    const [showQuiz, setShowQuiz] = useState(false)
    const [timer, setTimer] = useState(true)


    const initialTime = 30


    function onNextClick() {
        store.dispatch(addAnswerToTotalResult(checkOptionIsCorrect(chosenOption), chosenOption))
        store.dispatch(nextRound())
        const round = store.getState().currentRound
        if (round > 4) {
            setTimer(false)
            setShowResult(true)
        } else {
            setQuestion(state.quizData[round].question)
            setOptions(state.quizData[round].options)
            setChosenOption("")
        }

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
                {!showQuiz ? <Start onClick={() => setShowQuiz(true)}/> :
                    <div>
                        <ProgressBar width={(store.getState().currentRound ) / 5 * 100}/>
                        {showResult ?
                            <div className={"final_result"}>
                                <Result result={store.getState().correctAnswers}
                                        initialTime={initialTime}/>
                            </div>
                            :
                            <div className="quiz_container">
                                <Timer showResult={()=>setShowResult(true)} isTimerOn={timer} initialTime={initialTime}/>
                                <div className="current_round">
                                    {store.getState().currentRound + 1} <span className={"of"}>of</span> 5
                                </div>
                                <p className={"question"}>{question}</p>
                                <div className="options">
                                    {
                                        options.map((el) => {
                                            return <Quiz text={el}
                                                         className={`quiz ${el === chosenOption ? "chosen" : null}`}
                                                         onOptionClick={onOptionClick}/>
                                        })
                                    }
                                </div>
                                <button className={"next"} onClick={onNextClick}>Next</button>

                            </div>
                        }
                    </div>
                }
            </div>
        </div>
    );
}

export default App;
