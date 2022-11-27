import Logo from "./Logo";
import NavigationComp from "./NavigationComp"
import "./MyHeader.css";

function MyHeader(){
    return (
        <header>
            <Logo color="#FF6060"/>
            <NavigationComp/>
        </header>
    )
}
export default MyHeader;