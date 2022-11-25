import { useState, useEffect } from "react"
import Data from "./logements.json"
import { useParams } from 'react-router-dom'
import NotFound from "./NotFound";


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
                        {location.id}
                    </>
                ) : (<NotFound/>)
            }
        </div>
    )
}

export default Location;