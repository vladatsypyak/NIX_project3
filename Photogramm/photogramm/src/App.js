import './App.css';
import Header from "./components/Header/Header";
import {Link, Route, Routes} from "react-router-dom"
import {useEffect, useState} from "react";
import {store} from "./redux/store";
import {getCatsFromApi, getDogsFromApi, sortRandomly, setAnimalFilters, addPhoto} from "./redux/actions";
import Photos from "./components/MainPage/Photos/Photos";
import Filters from "./components/MainPage/Filters/Filters";
import PaginatedItems from "./components/Pagination/Pagination";
import ImageUploading from 'react-images-uploading';
import UploadAnimal from "./components/MainPage/UploadAnimal/UploadAnimal";
import BreedPage from "./components/BreedPage/BreedPage";
import Main from "./components/Main";



function App() {


    return (
        <div className="App">

            <Routes>
                <Route path="/" element={<Main />}/>

                <Route path="photo/:id" element={<BreedPage />}/>
            </Routes>
        </div>
    );
}

export default App;
