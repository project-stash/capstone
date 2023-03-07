import myImage from '../logo.png'
import './header.css';
function Header(){
    return (
        <header>
            <img src={myImage} alt="Little Lemon logo" width={300} height="auto"></img>
        </header>
    )
}

export default Header