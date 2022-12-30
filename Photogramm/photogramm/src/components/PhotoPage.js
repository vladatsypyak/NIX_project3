import {Link, useParams} from "react-router-dom";
import {store} from "../redux/store";
import Slide from "./Slide";

export default function PhotoPage() {
    const {id} = useParams();
    console.log(id)
    console.log(store.getState().photos)
    const item = store.getState().photos.filter(el =>  {
        if(el){
            return   el.id == id
        }

    })[0]
    console.log(item)
    return (
        <div>
            <div className="photo_page_header">
                <div className="container">
                    <Link to={"/"} className="logo">
                        <img src={require('../assets/logo.png')} alt=""/>
                    </Link>
                </div>
            </div>
            <div className={"photo_page container"}>

                <Slide/>
                <div className="description_wrap">
                    <p className={"desc_title"}>Breed: {item.name}</p>
                    <p className={"desc_title"}>Temper: {item.temperament}</p>

                </div>
            </div>
        </div>
    )
}