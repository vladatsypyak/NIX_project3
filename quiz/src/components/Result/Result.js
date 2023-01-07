import {store} from "../../redux/store";
import Chart from "../Chart";
import {useState} from "react";
import ResultDetails from "./ResultDetails/ResultDetails";

function Result(props) {
    const [showResultDetails, setShowResultDetails] = useState(false)
    return <div className={"result_wrap"}>
        <p><span className={"result_text underline"}>Total result:</span> <span className={"bold"}>{props.result}</span> of <span className={"bold"}>5</span> correct answers</p>
        <p><span className={"result_text underline"}>Total time:</span> {props.initialTime - store.getState().time}s</p>
        <Chart correct={store.getState().correctAnswers}/>
        <button  onClick={()=> setShowResultDetails(!showResultDetails)} className={"show_result_info_btn"}>
            <img src={require(`../../assets/${showResultDetails ? "hide" : "show"}.png`)} alt={"toggle details"}/>
            {showResultDetails ? "Hide details" : "Show details"} </button>
        {showResultDetails && <ResultDetails/>}
    </div>
}

export default Result