
import Photo from "./Photo";
import "./Photos.css"

export default function Photos(props) {

    return (
        <div className={"photos_container"}>
            {props.photos.map((el) => {
                if (!el) return
                return <Photo classname={"photo "} el={el}/>
            })}
        </div>
    )
}