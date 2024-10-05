import React from 'react'
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { TiArrowSortedDown } from "react-icons/ti";
import { FaUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

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
    <div>
      <div className='flex justify-between p-[20px]'>
        <div className='flex'>
          <input className='w-[200px] h-[40px] py-[5px] px-[40px] bg-[#2f2f2f] rounded-[50px] text-[white] border border-[white]'
            placeholder='Search For Artist'
            type='input'
            onKeyPress={event =>{
              if(event.key === "Enter"){
                search()
              }
            }}
            onChange={event => setSearchInput(event.target.value)}
          /> 
           <FaSearch className=' mx-[-190px] mt-[10px] text-[20px] text-[white]' />
          {/* <button onClick={search} className='bg-gray-light' >Search</button> */}
        </div>
        <div className='flex '>
            <button className='bg-[black] w-[145px] h-[45px] rounded-[50px] text-gray-light flex justify-center  items-center gap-[15px]' ><FaUserCircle  className='text-[25px]'/>Angel <TiArrowSortedDown className='text-[20px]' /></button>  
        </div> 

      </div>
      <div className='p-[20px]'>
      <p className='text-[30px] text-gray-light '>Albums</p>
        <div className='flex flex-wrap gap-[30px]'>
          {albums.map((album, i)=>{
            console.log(album)
            return(
              <div className='flex gap-[20px]'>
                <div className='w-[300px] h-[350px] bg-[#2f2f2f] flex flex-col items-center p-[20px]  rounded-[20px] gap-[10px] cursor-pointer'>               
                  <img className='w-[250px] h-[300px] rounded-[10px] ' src={album.images[0].url}/>
                  <div>
                    <h1 className='text-[20px] text-gray-light'>{album.name}</h1>
                  </div>
                </div>
              </div>
            )
          })}  
        </div>
      </div>
    </div> 
  )
}

export default Music
