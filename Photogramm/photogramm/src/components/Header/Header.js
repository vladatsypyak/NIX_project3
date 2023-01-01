import {Link} from "react-router-dom";
import "./Header.css"
import Logo from "../shared/Logo/Logo";

export default function Header(props){
    return(
        <div className={"header  "}>
           <div className="container flex_wrap_header">
               <Logo/>
               <button onClick={props.onAddClick} className={"button add_btn"}>add photo</button>
               <input className={"search_input"} onChange={props.onSearchChange}placeholder={"breed"} type="text"/>
               {props.showButton ?  <button  onClick={props.onFiltersClick} className={"button filter_btn"}>filter</button> : null
               }
           </div>

        </div>
    )
}