
import {useState} from "react";
import {store} from "./redux/store";
import Result from "./components/Result/Result";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Start from "./components/Start";
import Quiz from "./components/Quiz/Quiz";


function App() {

    const [showResult, setShowResult] = useState(false)
    const [showQuiz, setShowQuiz] = useState(false)
    const [currenRound, setCurrentRound] = useState(store.getState().currentRound)
    const initialTime = 30


    return (
        <div className="App">
            <div className="container">
                {!showQuiz ? <Start onClick={() => setShowQuiz(true)}/> :
                    <div>
                        <ProgressBar width={ currenRound / 5 * 100}/>
                        {showResult ?
                            <div className={"final_result"}>
                                <Result result={store.getState().correctAnswers}
                                        initialTime={initialTime}/>
                            </div>
                            :
                            <Quiz showResult={()=>setShowResult(true)} setRound={()=>setCurrentRound(store.getState().currentRound)} />

                        }
                    </div>
                }
            </div>
        </div>
    );
}

export default App;
