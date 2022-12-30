import {Link} from "react-router-dom";

export default function Header(props){
    return(
        <div className={"header  "}>
           <div className="container flex_wrap_header">
               <Link to={"/"} className="logo">
                   <img src={require('../assets/logo.png')} alt=""/>
               </Link>

               <button onClick={props.onAddClick} className={"button add_btn"}>add photo</button>
               <input className={"search_input"} onChange={props.onSearchChange}placeholder={"breed"} type="text"/>
               {props.showButton ?  <button  onClick={props.onFiltersClick} className={"button filter_btn"}>filter</button> : null
               }
           </div>

        </div>
    )
}