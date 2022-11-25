import { Link } from "react-router-dom";


function NotFound(){

    return (
        <div>
            <h1>404 NOT FOUND</h1>

            <Link to="/">Go Back to home page</Link>
        </div>
    )
}

export default NotFound;