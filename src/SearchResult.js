import Pet from "./Pet";

const SearchResult = ({pets}) => {
    return (
        <div className = "search">
            {
                !pets.length ? (<h2>No Pets Found!</h2>) : 
                (
                    pets.map(pet => (
                    <Pet
                    key = {pet.id}
                    id = {pet.id}
                    name = {pet.name}
                    animal = {pet.animal}
                    breed = {pet.breed}
                    location = {pet.city}
                    images = {pet.images} />     
                ))
                )
            }
        </div>
    )
};

export default SearchResult;