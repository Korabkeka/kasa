import { useState } from "react"
import "./Carousel.css"

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
        <div className="carousel">
            <img src={urls[index]} alt=" preview appartement" className="carousel__image"/>
            {
                length > 1 ? (
                    <>
                    <i onClick={prevImg} className="previous"><svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
</svg></i>
                    <i onClick={nextImg} className="next"><svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
</svg></i>
                    </>
                    
                ) : ''
            }
            
        </div>
    )
}

export default Carousel;