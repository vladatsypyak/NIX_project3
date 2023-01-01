import {useState} from "react";
import {Link} from "react-router-dom";
import "./Photos.css"

export default function Photo(props) {
    const [showDesc, setShowDesc] = useState(false)

    function onHover() {
        setShowDesc(true)
    }

    function onLeave() {
        setShowDesc(false)
    }

    function handleClick() {

    }
    return <div onMouseEnter={onHover} onMouseLeave={onLeave} className={props.classname}>
        <Link to={`photo/${props.el.id}`}>
            <img

                onClick={handleClick} src={props.el.images[0].url} alt={props.el.name}/>
            {showDesc ? <div className={"desc"}>
                <p> breed: {props.el.name}</p>
                <p> temper: {props.el.temperament}</p>
            </div> : null}
        </Link>


    </div>
}