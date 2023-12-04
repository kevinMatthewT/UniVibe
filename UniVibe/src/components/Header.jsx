import logo from "../assets/images/Univibe.png"
import "../styles/HeaderStyles.css"
import NavBar  from "./NavBar";

function Header(){
    return(
        <div className="HeaderContainer">
            <header>

                <img src={logo} className="image"/>

                <div >User</div>
                
            </header>
        </div>
    );
}

export default Header