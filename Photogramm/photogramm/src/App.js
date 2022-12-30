import './App.css';
import Header from "./components/Header";
import {Link, Route, Routes} from "react-router-dom"
import {useEffect, useState} from "react";
import {store} from "./redux/store";
import {getCatsFromApi, getDogsFromApi, sortRandomly, setAnimalFilters, addPhoto} from "./redux/actions";
import Photos from "./components/Photos";
import Filters from "./components/Filters";
import PaginatedItems from "./components/Pagination";
import ImageUploading from 'react-images-uploading';
import UploadAnimal from "./components/UploadAnimal";
import PhotoPage from "./components/PhotoPage";
import Main from "./components/Main";



function App() {


    return (
        <div className="App">

            <Routes>
                <Route path="/" element={<Main />}/>

                <Route path="photo/:id" element={<PhotoPage />}/>
            </Routes>
        </div>
    );
}

export default App;
