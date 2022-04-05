
import { useState, useEffect } from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";

const ANIMALS = ["dog", "fish", "cat", "bird", "rabbit"];
const AGE = ["Baby: 0-1", "Toddler: 2-5","Adult: >6"];


const SearchParams = (props) => {
    const[location, setLocation] = useState("");
    const[animal,setAnimal] = useState("");
    const[breed, setBreed] = useState("");
    const[pets, setPets] = useState([]);
    const[age, setAge] = useState("");
    const[breeds] = useBreedList(animal);

    useEffect(()=>{
        
        requestPets();
    },[])

    async function requestPets(){
        const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);
        const json = await res.json();

        setPets(json.pets);
        console.log(json.pets)
        console.log(pets);
    }

    return(
        <div className="search-params">
            <form
                onSubmit={event =>{
                    event.preventDefault();
                    requestPets();
                }}
            >
                <label htmlFor="location">
                    Location
                </label>
                <input id ="location" 
                onChange={event => setLocation(event.target.value)} 
                value={location} placeholder="Location"/>
                
                <label htmlFor="animal">
                    Animal
                    <select
                    id ="animal" 
                    onChange={(event)=> setAnimal(event.target.value)}
                    onBlur={(event)=> setAnimal(event.target.value)}>
                        <option></option>
                        {ANIMALS.map((animal) => (
                            <option value={animal} key={animal}>
                                {animal}
                            </option>
                        ))}
                    </select>
                </label>

                <label htmlFor="breed">
                    Breed
                    <select 
                    id="breed"
                    onChange={event => setBreed().event.target.value}
                    onBlur={(event)=> setBreed().event.target.value}>
                    
                    <option></option>
                    {
                        breeds.map(breed => (
                            <option value={breed} key={breed}>{breed}</option>
                        ))
                    }
                    </select>

                </label>

                {/* <label htmlFor="age">Age (In human years)</label>
                <select 
                id="age"
                onChange={(event)=> {
                    setAge(event.target.value)
                    }
                }
                onBlur={(event)=> setAge(event.target.value)}>
                
                {AGE.map( age => 
                (<option value={age} key={age}>{age}</option>)                    
                )
                }   
                </select> */}

                <button>Submit</button>
            </form>
            <Results pets={pets} />

        </div>
        

    )
}

export default SearchParams;


