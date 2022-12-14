import {store} from "../redux/store";

function Result(props) {
    return <div className={"result_wrap"}>
        <p><span className={"underline"}>Total result:</span> <span className={"bold"}>{props.result}</span> of <span className={"bold"}>5</span> correct answers</p>
        <p><span className={"underline"}>Total time:</span> {props.initialTime - store.getState().time}s</p>
    </div>
}

export default Result