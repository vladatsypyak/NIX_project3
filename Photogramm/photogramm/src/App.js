import './App.css';
import Header from "./components/Header";
import {Link, Route, Routes} from "react-router-dom"
import {useEffect, useState} from "react";
import {store} from "./redux/store";
import {getCatsFromApi, getDogsFromApi, sortRandomly, setAnimalFilters} from "./redux/actions";
import Photos from "./components/Photos";
import Filters from "./components/Filters";
import PaginatedItems from "./components/Pagination";
import ImageUploading from 'react-images-uploading';



function App() {
    const [data, setData] = useState(store.getState().photos)
    const [showFilter, setShowFilter] = useState(false)

    useEffect(() => {

        fetch('https://api.thedogapi.com/v1/breeds', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(r => store.dispatch(getDogsFromApi(r)))
            .then(()=> store.dispatch(sortRandomly()))
            .then(() => setData(store.getState().photos))
            .then(()=> console.log(data))
            .catch(err => console.error(err))


        fetch('https://api.thecatapi.com/v1/breeds', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(r => store.dispatch(getCatsFromApi(r)))
            .then(()=> store.dispatch(sortRandomly()))
            .then(() => setData(store.getState().photos))
            .catch(err => console.error(err))
    }, [])



    function onFiltersClick() {
        setShowFilter(true)
    }
    function onCloseFiltersClick() {
        setShowFilter(false)

    }

    function handleBreedFilterChange(breed) {
        if(breed === "all"){
            setData(store.getState().photos)
            return
        }
        console.log(breed)
        let selectedAnimals = store.getState().photos.filter((el)=>{
            if (el){
                return el.name === breed
            }
        })
        setData(selectedAnimals)

    }
    function handleAnimalFilterChange(animal) {

        store.dispatch(setAnimalFilters(animal))
        let selectedAnimals = []

         selectedAnimals = store.getState().photos.filter((el)=>{
            if (el){
                return store.getState().filters.includes(el.animal)
            }
        })
        setData(selectedAnimals)

        if(store.getState().filters.length === 0){
            console.log(7)
            setData(store.getState().photos)

        }
    }

    function onSearchChange(e) {
        setData(searchByBreed(e.target.value))
    }

    function searchByBreed(breed) {
        return store.getState().photos.filter((el) => {
               if(el){

                   const regex = new RegExp(breed.toUpperCase(), 'g'); // correct way
                   return regex.test(el.breed.toUpperCase())
               }
            }
        )
    }


    return (
        <div className="App">
            <Header showButton={!showFilter} onFiltersClick={onFiltersClick} onSearchChange={onSearchChange} />
            {showFilter ? <Filters onCloseFiltersClick={onCloseFiltersClick} handleAnimalFilterChange={handleAnimalFilterChange} handleBreedFilterChange={handleBreedFilterChange} /> : null}
            {data.length > 0 ? <PaginatedItems itemsPerPage={15} photos={data}/> : null}

            <Routes>
                {/*<Route path="/" element={}/>*/}
            </Routes>
        </div>
    );
}

export default App;
