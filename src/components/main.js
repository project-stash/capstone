import { Routes, Route } from 'react-router-dom';
import './main.css';
import bookingpage from './bookingpage.js'
import homepage from './homepage.js'
function Main(){
    return (
        <main>
            <Routes>
                <Route path="/booking" element={<bookingpage />} />
                <Route path="/" element = {<homepage />} />
            </Routes>
        </main>
    )
}

export default Main