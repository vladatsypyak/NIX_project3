import ResultDetailsItem from "./ResultDetailsItem";
import {store} from "../../../redux/store";

export default function ResultDetails(props) {

    return (
        <div className={"result_details_wrap"}>
            {store.getState().quizData.map((el, index) => {
                    return <ResultDetailsItem chosenAnswer={store.getState().result[index].userAnswer}
                                              correctAnswer={store.getState().quizData[index].correct}
                                              question={store.getState().quizData[index].question}
                                              number={index + 1}/>

                }
            )}

        </div>
    )
}