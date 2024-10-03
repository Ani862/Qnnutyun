import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Music() {
    const [music, setMusic]=useState()
    useEffect(()=>{
        const fetchMusic = async( )=> {
            const response = await fetch("https://api.spotify.com/v1/albums/{id}")
            const data = await response.json()
            console.log(data)
            setMusic(data)
        }
        fetchMusic()
    }, [])
  return (
    <div></div>
  )
}

export default Music