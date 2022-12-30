import {useEffect, useState} from "react";
import {store} from "../redux/store";
import {getCatsFromApi, getDogsFromApi, setAnimalFilters, sortRandomly} from "../redux/actions";
import Header from "./Header";
import Filters from "./Filters";
import UploadAnimal from "./UploadAnimal";
import PaginatedItems from "./Pagination";

export default function  Main(){
    const [data, setData] = useState(store.getState().photos)
    const [showFilter, setShowFilter] = useState(false)
    const [showAdd, setShowAdd] = useState(false)

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

    console.log(store.getState().photos)


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
    function onDataChange() {
        setData(store.getState().photos)
    }
    function onAddClick() {
        setShowAdd(!showAdd)
    }
    function onSubmitClick() {
        setShowAdd(false)

    }
    return (
        <div>
            <Header onAddClick={onAddClick} showButton={!showFilter} onFiltersClick={onFiltersClick} onSearchChange={onSearchChange} />

            {showFilter ? <Filters onCloseFiltersClick={onCloseFiltersClick} handleAnimalFilterChange={handleAnimalFilterChange} handleBreedFilterChange={handleBreedFilterChange} /> : null}
            {showAdd ? <UploadAnimal onSubmitClick={onSubmitClick} onChange={onDataChange} /> : null}
            {data.length > 0 ? <PaginatedItems itemsPerPage={15} photos={data}/> : null}
        </div>
    )
}