import IMG from './images/IMG.png'
import './Hero.css'

function Hero(){

    return (
        <div className='hero__banner'>
            <img src={IMG} alt="hero banner" className='hero__image'/>
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
        
    )
}

export default Hero;