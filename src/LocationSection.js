import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import Data from './logements.json'


function LocationSection(){
    let [locations, setLocations] = useState([]);
    useEffect(() => {
        try{
            setLocations(Data)
        }catch(e){
            console.log(e)
        }
        
    }, [])
    
    return (
        <div>{
            locations.map((location)=>{
               return (<Link key={location.id} to={location.id}>
                <img src={location.cover} alt={`location: ${location.id}`}/>
                <p>{location.title}</p>
               </Link>)
            })
        }</div>
    )
}

export default LocationSection;