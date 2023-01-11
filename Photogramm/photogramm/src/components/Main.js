import {useEffect, useState} from "react";
import {store} from "../redux/store";
import {changeIsSorted, getCatsFromApi, getDogsFromApi, setAnimalFilters, sortRandomly} from "../redux/actions";
import Header from "./Header/Header";
import Filters from "./MainPage/Filters/Filters";
import UploadAnimal from "./MainPage/UploadAnimal/UploadAnimal";
import PaginatedItems from "./Pagination/Pagination";

export default function Main() {
    const [data, setData] = useState(store.getState().photos)
    const [showFilter, setShowFilter] = useState(false)
    const [showAdd, setShowAdd] = useState(false)

    useEffect(() => {
        if (!store.getState().isSorted) {
            console.log("ef")

            fetch('https://api.thedogapi.com/v1/breeds', {
                method: 'GET',
            })
                .then(response => response.json())
                .then(r => store.dispatch(getDogsFromApi(r)))
                .then(() => store.dispatch(sortRandomly()))
                .then(() => setData(store.getState().photos))
                .catch(err => console.error(err))


            fetch('https://62f39271a84d8c968126c2df.mockapi.io/cats_breed', {
                method: 'GET',
            })
                .then(response => response.json())
                .then(r => {
                    store.dispatch(getCatsFromApi(r))
                })
                .then(() => store.dispatch(sortRandomly()))
                .then(() => setData(store.getState().photos))
                .then(() => store.dispatch(changeIsSorted()))
                .catch(err => console.error(err))
        }


    }, [])

    function onFiltersClick() {
        setShowFilter(true)
    }

    function onCloseFiltersClick() {
        setShowFilter(false)

    }

    function handleBreedFilterChange(breed) {
        if (breed === "all") {
            setData(store.getState().photos)
            return
        }
        let selectedAnimals = store.getState().photos.filter((el) => {
            if (el) {
                return el.name === breed
            }
        })
        setData(selectedAnimals)

    }


    function handleAnimalFilterChange(animal) {

        store.dispatch(setAnimalFilters(animal))
        let selectedAnimals = []

        selectedAnimals = store.getState().photos.filter((el) => {
            if (el) {
                return store.getState().filters.includes(el.animal)
            }
        })
        setData(selectedAnimals)

        if (store.getState().filters.length === 0) {
            setData(store.getState().photos)
        }
    }

    function onSearchChange(e) {
        setData(searchByBreed(e.target.value))
    }

    function searchByBreed(breed) {
        return store.getState().photos.filter((el) => {
                if (el) {
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
            <Header onAddClick={onAddClick} showButton={!showFilter} onFiltersClick={onFiltersClick}
                    onSearchChange={onSearchChange}/>

            {showFilter ?
                <Filters onCloseFiltersClick={onCloseFiltersClick}
                         handleAnimalFilterChange={handleAnimalFilterChange}
                         handleBreedFilterChange={handleBreedFilterChange}
                         data={data}/>

                : null}
            {showAdd ? <UploadAnimal onSubmitClick={onSubmitClick} onChange={onDataChange}/> : null}
            {data.length > 0 ? <PaginatedItems itemsPerPage={15} photos={data}/> : null}
        </div>
    )
}