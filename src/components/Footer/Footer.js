import './Footer.css'
import logo from "../../assets/Asset 20@4x.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={logo} alt="Little Lemon Logo" />
      </div>
      <div>
        <p>©Copyright 2022 - Little Lemon</p>
      </div>
    </footer>
  );
};

export default Footer;
