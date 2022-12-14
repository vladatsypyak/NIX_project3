import {useEffect, useState} from "react";
import {store} from "../redux/store";
import {countTime} from "../redux/actions";

function Timer(props) {
    const [time, setTime] = useState(15)
    // const [timerOn, setTimerOn] = useState(true);
    useEffect(() => {
        let timer = setInterval(() => {
                setTime((time)=>time - 1);
                store.dispatch(countTime(time))
            }, 1000);

        if (time === 0 || !props.isTimerOn) {
            console.log(1)
            clearInterval(timer)
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