import {useEffect, useState} from "react";
import {store} from "../redux/store";
import {countTime} from "../redux/actions";

function Timer(props) {
    const [time, setTime] = useState(props.initialTime)
    useEffect(() => {
        let timer = setInterval(() => {
                setTime((time)=>time - 1);
                store.dispatch(countTime(time - 1))
            }, 1000);

        if (time === 0 || !props.isTimerOn) {
            clearInterval(timer)
        }
        if (time === 0 ) {
            clearInterval(timer)
            props.showResult()
        }
        return () => clearInterval(timer);
    }, [time]);
    return (
        <div className="timer">
            {time}
        </div>
    )
}
export default Timer