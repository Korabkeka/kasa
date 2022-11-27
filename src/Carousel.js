import { useState } from "react"


function Carousel({urls}){
    const [index, setIndex] = useState(0);
    const length = urls.length;

    const prevImg = () => {
        setIndex(index === 0 ? length - 1 : index - 1 );
    }

    const nextImg = () => {
        setIndex(index === length - 1 ? 0 : index + 1);
    }
    
    return (
        <>
            <img src={urls[index]} alt=" preview appartement"/>
            <button onClick={prevImg}>previous</button>
            <button onClick={nextImg}>next</button>
        </>
    )
}

export default Carousel;