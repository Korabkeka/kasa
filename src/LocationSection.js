import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import Data from './logements.json'
import './LocationSection.css'


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
        <section className="appartment__section">{
            locations.map((location)=>{
               return (<article key={location.id} className="article__link"><Link  to={location.id} >
                <img src={location.cover} alt={`location: ${location.id}`}/>
                <p>{location.title}</p>
               </Link></article>)
            })
        }</section>
    )
}

export default LocationSection;