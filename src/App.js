import './App.css';
import React from 'react'
import Header from "./components/header.js";
import Nav from "./components/nav.js";
import Main from "./components/main.js";
import Footer from "./components/footer.js"
function App() {
  return (
    <React.Fragment>
      <Header/>
      <Nav/>
      <Main/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
