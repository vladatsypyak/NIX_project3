import "./Quiz.css"

function QuizItem(props) {
    return <div  onClick={(e) => props.onOptionClick(props.text, e.currentTarget)}
                 className={props.className}>
        <p>{props.text}</p>
    </div>
}

export default QuizItem