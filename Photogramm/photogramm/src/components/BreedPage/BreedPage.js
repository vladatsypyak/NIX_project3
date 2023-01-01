import {Link, useParams} from "react-router-dom";
import {store} from "../../redux/store";
import Slide from "./Slide/Slide";
import "./BreedPage.css"
import Logo from "../shared/Logo/Logo";

export default function BreedPage() {
    const {id} = useParams();
    const item = store.getState().photos.filter(el =>  {
        if(el){
            return   el.id == id
        }
    })[0]
    return (
        <div>
            <div className="photo_page_header">
                <div className="container">
                    <Logo/>
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