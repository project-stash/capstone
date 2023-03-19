import './Header.css'
import logo from '../../assets/Asset 16@4x.png'

const Header = () => {
    return ( 
        <header className='header'>
            <img src={logo} alt="Little Lemon Logo" />
        </header>
     );
}
 
export default Header;