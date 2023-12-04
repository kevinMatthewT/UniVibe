import logo from "../assets/images/Univibe.png"
import "../styles/NavBarStyles.css"

function NavBar(){
    return(
        <div className="HeaderContainer">
            <header>

                <img src={logo} className="image"/>

                <div >User</div>
                
            </header>
        </div>
    );
}

export default NavBar