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
                    name = {pet.name}
                    animal = {pet.animal}
                    breed = {pet.breed} />     
                ))
                )
            }
        </div>
    )
};

export default SearchResult;