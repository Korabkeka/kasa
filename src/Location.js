import { useState, useEffect, Component } from "react"
import { useSearchParams } from "react-router-dom";
import Data from "./logements.json"
import { redirect } from 'react-router-dom'
import NotFound from "./NotFound";


function Location(){
    let [location, setLocation] = useState({});
    let [searchParam, setSearchParams] = useSearchParams();
    console.log(searchParam.get('id'))
    useEffect(()=>{
        try {
            setLocation(JSON.parse(JSON.stringify(Data)).find(el=> {
                console.log(el.id)
                if(el.id === searchParam.id)return 1
                else return 0
            }));
        } catch (error) {
            console.log(error, searchParam.id)
            redirect(<NotFound/>)
        }
    }, [])
    return (
        <div>
            Hello here is location page
        </div>
    )
}

export default Location;