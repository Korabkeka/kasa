import { Link } from "react-router-dom";


function NavigationComp(){
    return(
        <nav>
            <Link to="/">Acceuil</Link>
            <Link to="about">A Propos</Link>
        </nav>
    )
}

export default NavigationComp