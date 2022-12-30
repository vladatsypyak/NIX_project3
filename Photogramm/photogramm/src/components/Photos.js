import {useState} from "react";
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Photo from "./Photo";

export default function Photos(props) {
    function countRows() {
        let length = props.photos.length;
        if (length === 0) return 0;
        if (length <= 3) return 2;
        if (length <= 5) return 3;
        if (length <= 7) return 4;
        if (length <= 8) return 5;
        if (length <= 10) return 6;
        if (length <= 12) return 7;
        if (length <= 13) return 8;
        if (length <= 15) return 9;
        return length/2.5;
    }

    let rowsAmount = countRows();

    function getPhotosWithClasses() {
        let mediumNextIndex = 0
        return props.photos.map((el, i) => {
            if(!el)return

            if (i >= 3 && (i - 3) % 5 === 0) {
                return <Photo classname={"photo big"} el={el}/>
            }

            if(mediumNextIndex === i) {
                mediumNextIndex += i % 2 !== 0 ? 3 : 7;
                return <Photo classname={"photo medium"} el={el}/>

            }
            return <Photo classname={"photo "} el={el}/>

        });
    }

    return (
        <div style={{gridTemplateRows: `repeat(${rowsAmount} , 140px)`}} className={"photos_container"}>
            {getPhotosWithClasses()}
        </div>
    )
}