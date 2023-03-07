import React from 'react'
import Header from "./components/header.js";
import Main from "./components/main.js";
import Footer from "./components/footer.js";
import Nav from "./components/nav.js";
function App() {
  return (
    <React.Fragment>
      <Header/>
      <Nav />
      <Main/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
