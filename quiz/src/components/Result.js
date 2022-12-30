import {store} from "../redux/store";
import Chart from "./Chart";

function Result(props) {
    return <div className={"result_wrap"}>
        <p><span className={"underline"}>Total result:</span> <span className={"bold"}>{props.result}</span> of <span className={"bold"}>5</span> correct answers</p>
        <p><span className={"underline"}>Total time:</span> {props.initialTime - store.getState().time}s</p>
        <Chart correct={store.getState().correctAnswers}/>

    </div>
}

export default Result