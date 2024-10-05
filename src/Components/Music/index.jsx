import React from 'react'
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, FormControl, Button, Row, Card} from 'react-bootstrap'


const CLIENT_ID =     "aab79f1ca30a4e1d939b87b2c07cd730";
const CLIENT_SECRET = "2d9c356d709b4c1c9b6f709d24cb8828"



function Music() {
  const[searchInput, setSearchInput]= useState("")
  const[accessToken, setAccessToken]= useState("")
  const[albums, setAlbums] = useState([])


  useEffect(()=>{
    // API  Access Token 
    const authParameters = {
      method: 'POST',
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    } 
    fetch('https://accounts.spotify.com/api/token', authParameters)
       .then(result => result.json())
      .then(data =>setAccessToken(data.access_token))
  }, []) 


  // Search
  async function search() {
    console.log("Search for " + searchInput)

    // Get request using search to get the Artist ID
    const searchParameters ={
        method: 'GET',
        headers:{
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accessToken
        }
    }

    const artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)
        .then(response => response.json())
        .then(data => {return data.artists.items[0].id })
        
        console.log("Artist ID is" + artistID)

    // Get request with Arist ID  grab all the  albums from that artist

    const albums = await fetch("https://api.spotify.com/v1/artists/" + artistID + '/albums' +'?include_groups=album&market=US&limit=50', searchParameters)
        .then(response => response.json())
        .then(data =>{
          console.log(data)
          setAlbums(data.items)
        })

    // Display those albums to the user  
  }
  console.log(albums)

  return( 
    <div className='p'>
      <Container>
        <InputGroup className='mb-3' size='lg'>
          <FormControl
            placeholder='Search For Artist'
            type='input'
            onKeyPress={event =>{
              if(event.key === "Enter"){
                search()
              }
            }}
          onChange={event => setSearchInput(event.target.value)}
         />
            <Button onClick={search} className='bg-[#3b3b3b]'>Search</Button>

        </InputGroup>
      </Container>
      <Container>
        <Row className='mx-2 row row-cols-4'>
          {albums.map((album, i)=>{
            console.log(album)
            return(
                <Card>
                   <Card.Img src={album.images[0].url}/>
                   <Card.Body>
                   <Card.Title>{album.name}</Card.Title>
                   <Card.Title>{album.title}</Card.Title>
                  </Card.Body>
                </Card>
            )
          })}
      
        </Row>
      </Container>
    </div> 
  )
}

export default Music



