import { useState, useEffect } from "react"
import Data from "./logements.json"
import { useNavigate, useParams } from 'react-router-dom'
import NotFound from "./NotFound";


function Location(){
    let [location, setLocation] = useState({});
    let locationId = useParams();
    let navigate = useNavigate();
    useEffect(()=>{
        
            console.log(locationId)
            let data = Data.find(el => el.id === locationId.id)
            if(data !== undefined){
                setLocation(data)
            }else{
                console.log('null')
                navigate(<NotFound/>)
            }
            
        
        console.log(location)
    }, []);
    return (
        <div>
            <div>{location.id}</div>
        </div>
    )
}

export default Location;