import {store} from "../../../redux/store";
import {addAnimal, addPhoto} from "../../../redux/actions";
import {useState} from "react";
import "./UploadAnimal.css"

export default function UploadAnimal(props) {
    const [animal, setAnimal] = useState("")
    const [breed, setBreed] = useState("")
    const [temper, setTemper] = useState("")
    const [photo, setPhoto] = useState(null)
    const [photoUploaded, setPhotoUploaded] = useState(false)


    function handleSubmitClick() {
        let animalCategory = animal === "cat" || animal === "dog" ? animal : "other"
        store.dispatch(addAnimal({
            name: temper,
            breed: breed,
            animal: animalCategory,
            temper: temper,
            id: Math.random() * 100,
            images: [{
                url: photo
            }]
        }));
        console.log(store.getState().photos)
        props.onChange()
        props.onSubmitClick()
    }



    return (
        <div className={"add_file_window"}>
            <input className={"add_file_input"} type="text" onChange={(e) => setAnimal(e.target.value)}
                   placeholder={"animal"}/>
            <input className={"add_file_input"} type="text" onChange={(e) => setBreed(e.target.value)}
                   placeholder={"breed"}/>
            <input className={"add_file_input"} type="text" onChange={(e) => setTemper(e.target.value)}
                   placeholder={"temper"}/>

            <div className="buttons_wrap">
                <div className="flex_wrap">
                    <label htmlFor="animal_upload" className="file_upload_label">
                        Upload Image
                    </label>
                    <input
                        id={"animal_upload"}
                        className={"add_file_btn"}
                        type="file"
                        name="myImage"
                        onChange={(event) => {
                            setPhoto(URL.createObjectURL(event.target.files[0]))
                            setPhotoUploaded(true)
                        }}
                    />
                    {photoUploaded && <img className={"done_mark"} src={require("../../../assets/done.png")}/>}
                </div>
                <button className={"add_file_btn black_btn"}
                        onClick={handleSubmitClick}>submit
                </button>
            </div>

        </div>
    )
}