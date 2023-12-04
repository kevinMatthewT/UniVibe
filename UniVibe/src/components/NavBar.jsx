import logo from "../assets/images/Univibe.png"
import "../styles/NavBarStyles.css"
import icon from "../assets/images/UserIcon.png"

function NavBar(){
    return(
        <div className="NavBarContainer">
            <img src={logo} className="image"/>
                <ul>
                <li></li>
                
                <li><div className="navbarElements"><a href=""><img src={icon}/></a></div></li>
                <li><div className="navbarElements">hello</div></li>
                </ul>
        </div>
    );
}

export default NavBar