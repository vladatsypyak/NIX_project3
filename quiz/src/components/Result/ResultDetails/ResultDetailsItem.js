import ("../Result.css")
export default function ResultDetailsItem(props){
    let chosenAnswerClassname = props.correctAnswer === props.chosenAnswer ? "result_details_chosen correct" : "result_details_chosen wrong"
    return (
        <div className={"result_details_item"}>
            <p className={"result_details_question"}><span>{props.number}</span> {props.question}</p>
            <div className="result_details_item_flex_wrap">
                <p className={""}>Correct answer: <span className={"bold"}>{props.correctAnswer}</span></p>
                <div className={chosenAnswerClassname}>
                    <p>Chosen: <span className={"bold"}>{props.chosenAnswer}</span></p>
                    <img src={require(`../../../assets/${props.correctAnswer === props.chosenAnswer ? "correct" : "wrong"}.png`)} alt=""/>
                </div>

            </div>
        </div>
    )
}