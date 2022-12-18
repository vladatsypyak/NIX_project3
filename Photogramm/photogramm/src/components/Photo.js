import {useState} from "react";

export default function Photo(props) {
    const [showDesc, setShowDesc] = useState(false)

    function onHover() {
        setShowDesc(true)
    }

    function onLeave() {
        setShowDesc(false)
    }

    return <div onMouseEnter={onHover} onMouseLeave={onLeave} className={props.classname}>
        <img src={props.el.image.url} alt={props.el.name}/>
        {showDesc ? <div className={"desc"}>
            <p> breed: {props.el.name}</p>
            <p> temper: {props.el.temperament}</p>
        </div> : null}
    </div>
}