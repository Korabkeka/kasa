import { useState, useEffect } from "react"
import Data from "./logements.json"
import { useParams } from 'react-router-dom'
import NotFound from "./NotFound";
import Carousel from "./Carousel";
import Hote from "./Hote";
import Stars from "./Stars";
import Article from "./Article";


function Location(){
    let [location, setLocation] = useState({});
    let {id} = useParams();
    useEffect(()=>{
            let data = Data.find(el => el.id === id)
            if(data !== undefined){
                setLocation(data);
            }
    }, []);
    return (
        <div>
            {
                location.id ? (
                    <>
                        <Carousel urls={location.pictures}/>
                        <h1>{location.title}</h1>
                        <p>{location.location} </p>
                        <div>
                            {
                                location.tags.map((tag, i)=>{
                                    return <span key={i}>{tag}</span>
                                })
                            }
                        </div>
                        <Hote hostName={location.host.name} profileImg={location.host.picture} />
                        <Stars rating={location.rating}/>
                        <Article category="Description" content={location.description}/>
                        <Article category="Equipement" content={location.equipments} />
                    </>
                ) : (<NotFound/>)
            }
        </div>
    )
}

export default Location;