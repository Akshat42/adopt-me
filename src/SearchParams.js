import { useEffect, useState } from "react";
import SearchResult from "./SearchResult";

const ANIMALS = ["dog", "bird", "cat", "reptiles", "fish"];

const SearchParams = () => {
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("dog");
    const [breedList, setBreedList] = useState([]);
    const [pets, setPets] = useState([]);
    const [breed, setBreed] = useState("");

    useEffect(() => {
        requestPets();
    },[]);

    async function requestPets() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );
        const json = await res.json();
        setPets(json.pets);
    }

    useEffect(() => {
        requestBreeds();
    },[animal]);

    async function requestBreeds() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
        )
        const json = await res.json();
        if (json.breeds)
            setBreedList(json.breeds);
        else
            setBreedList([]);
    }

    return (
        <div className = "search-params">
        <form onSubmit = {e => {
            e.preventDefault();
            requestPets();
        }}>
            <label htmlFor = "location">
                <input id = "location" onChange = {e => setLocation(e.target.value)} value = {location} placeholder = "Location" />
            </label>
            <label htmlFor= "animal">
            Animal
            <select 
            id = "animal"
            value = {animal}
            onChange = {e => setAnimal(e.target.value)}
            onBlur = {e => setAnimal(e.target.value)}>
            <option value = ""></option>
            {
                ANIMALS.map(animal => (
                    <option 
                     value = {animal}
                     key = {animal}>{animal}</option>
                ))  
            }
            </select>
            </label>
            <label htmlFor= "breed">
            Breed
            <select 
            id = "breed"
            value = {breed}
            onChange = {e => setBreed(e.target.value)}
            onBlur = {e => setBreed(e.target.value)}>
            <option value = ""></option>
            {
                breedList.map(breed => (
                    <option 
                     value = {breed}
                     key = {breed}>{breed}</option>
                ))  
            }
            </select>
            </label>
            <button>Submit</button>
        </form>
        <SearchResult pets = {pets}/>
        </div>
    )
}

export default SearchParams;