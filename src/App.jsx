import './App.css';
import Section from './Components/Section';
import Home from './Components/Home';
import {BrowserRouter, Routes,  Route } from 'react-router-dom';
import Search from './Components/Search';


function App() {
  return (
    <BrowserRouter>
      <Routes>    
         <Route path='/' element={<Section/>}>
          <Route path='/search' element={<Search/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;

