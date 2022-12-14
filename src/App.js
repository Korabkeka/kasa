import './App.css';
import MyHeader from './MyHeader';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import About from './About';
import NotFound from './NotFound';
import Location from './Location';
import Footer from "./Footer";


function App() {
  return (
    <div className="App">
      
      <Router>
        <MyHeader/>
        <Routes>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/:id' element={<Location/>}/>
        </Routes>  
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
