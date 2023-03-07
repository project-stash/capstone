import './footer.css'
import logo from '../s_logo.png';
function Footer(){
    return (
        <footer>
            <div>
                <img src={logo} alt="Little Lemon Logo"/>
            </div>
            <div>
                <p>©Copyright 2023 - Little Lemon</p>
            </div>
        </footer>
    )
}

export default Footer