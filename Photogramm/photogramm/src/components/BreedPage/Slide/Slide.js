import {useParams} from "react-router-dom";
import {store} from "../../../redux/store";
import {useState} from "react";
import UploadPhotoModal from "../Modal/UploadPhotoModal";
import BtnSlider from "./BtnSlider";
import "./Slider.css"

export default function Slide(props) {
    const {id} = useParams();
    const [slideIndex, setSlideIndex] = useState(0)
    const [photos, setPhotos] = useState(store.getState().photos.filter(el => el?.id == id)[0].images)
    const [showAddModal, setShowAddModal] = useState(false)
    console.log(photos)
    function getPrevBtnImage(index) {
      return  index === 0 ? photos.length - 1 : index - 1
    }
    function getNextBtnImage(index) {
        return  index === photos.length - 1 ? 0 : index + 1
    }
    const nextSlide = () => {
        if (slideIndex !== photos.length - 1) {
            setSlideIndex((slideIndex) => slideIndex + 1)
        } else  {
            setSlideIndex(0)
        }
    }

    const prevSlide = () => {

        if (slideIndex !== 0) {
            setSlideIndex(slideIndex - 1)
        } else if (slideIndex === 0) {
            setSlideIndex(photos.length - 1)
        }

    }
    function onModalCloseClick() {
        setShowAddModal(false)
    }

    function onAddClick() {
        setShowAddModal(true)
    }

    function onChange() {
        setPhotos([...store.getState().photos.filter(el => el?.id == id)[0].images])
        setShowAddModal(false)
    }

    return (
        <div className={"breed_images_wrap"}>
            {photos.length > 1 &&      <BtnSlider moveSlide={prevSlide} direction={"prev"} image={photos[getPrevBtnImage(slideIndex)].url}/>
            }
            {showAddModal ? <UploadPhotoModal id={id} onCloseClick={onModalCloseClick} onChange={onChange}/> : null}

            <div
                className={"slide"}>
                <div onClick={onAddClick} className="add_photo_btn">+</div>

                <img src={photos[slideIndex].url} alt=""/>
            </div>
            { photos.length > 1 && <BtnSlider moveSlide={nextSlide} direction={"next"} image={photos[getNextBtnImage(slideIndex)].url}/>}



        </div>
    )
}