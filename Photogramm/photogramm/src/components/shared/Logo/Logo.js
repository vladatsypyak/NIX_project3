import {Link} from "react-router-dom";
import "./Logo.css"

export default function Logo(){
    return(
        <Link to={"/"} className="logo">
            <img src={require('../../../assets/logo.png')} alt=""/>
        </Link>
    )
}