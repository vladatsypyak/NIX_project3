import {useState} from "react";
import {store} from "../../../redux/store";
import "./Filters.css"
import CloseBtn from "../../shared/CloseBtn";
export default function Filters(props){
    console.log(props.data)
    function handleChange(e) {
        if (e.target.checked){
            props.handleAnimalFilterChange(e.target.value, true)
        }
        else {
            props.handleAnimalFilterChange(e.target.value, false)
        }
    }
    function sortBreeds(arr) {
        return arr.map(el => el ? el.name : null).sort()
    }
    function handleBreedChange(e) {
        console.log(e.target.value)
        props.handleBreedFilterChange(e.target.value)
    }

    return (
    <div className={"filters_container"}>
        <CloseBtn onClick={props.onCloseFiltersClick} className={"close"}/>
        <div onChange={handleChange} className="filter_container animal_filter">
            <p className={"filter_label"}>Category</p>
            <div className="filter_item">
                <input type="checkbox" id={'cats'} value={"cat"} name={"animal"}/> Cats
            </div>
            <div className="filter_item">
                <input type="checkbox" value={"dog"} name={"animal"}/> Dogs
            </div>
            <div className="filter_item">
                <input type="checkbox" value={"other"} name={"animal"}/> Other
            </div>
        </div>

        <div onChange={handleBreedChange} className="filter_container breed_filter">
            <p className={"filter_label"}>Breed</p>
            <select name="" id="">
                <option>all</option>
                {sortBreeds(props.data).map((el)=> {
                    console.log(el)
                    return <option>{el}</option>
                  // return <option>{el?.breed}</option>
                })}
            </select>
        </div>
    </div>
)
}