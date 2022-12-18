export default function Header(props){
    return(
        <div className={"header flex_wrap"}>
            {/*<button className={"button"}>add photo</button>*/}
            <input className={"search_input"} onChange={props.onSearchChange}placeholder={"breed"} type="text"/>
            {props.showButton ?  <button  onClick={props.onFiltersClick} className={"button"}>filter</button> : null
            }
        </div>
    )
}