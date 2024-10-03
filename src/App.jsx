import './App.css';
import Section from './Components/Section';
import Home from './Components/Home';
import {BrowserRouter, Routes,  Route } from 'react-router-dom';
import Search from './Components/Search';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, InputGroup, FormControl, Button, Row, Card} from 'react-bootstrap'
// import { useEffect } from 'react'


// const CLIENT_ID = "8c8051d7126a4ac1b859a0e252593946";
// const CLIENT_SECRET = "ae0b628934ca468f9c503a437ad11ee"

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

  // useEffect(()=>{
  //   const authParameters = {
  //     method: 'POST',
  //     headers:{
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //     },
  //     body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
  //   } 
  //   fetch('https://api.spotify.com/v1/albums/{id}', authParameters)
  //      .then(result => result.json())
  //     .then(data => console.log(data))
  // }, []) 
    // <div className='App'>
    //   <Container>
    //     <InputGroup className='mb-3' size='lg'>
    //       <FormControl className=''>

    //       </FormControl>
    //     </InputGroup>
    //   </Container>
    // </div> 