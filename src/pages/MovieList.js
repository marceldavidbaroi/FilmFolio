import React, { useEffect, useState } from 'react'
import { Card } from '../components/Card'
import { useFetch } from '../hooks/useFetch'
export const MovieList = ({apiPath}) => {


  
  const {data: movies} = useFetch(apiPath)
  return (
    <main>
      <div className='max-w-7xl auto py-7	'>
        <div className='flex justify-start flex-wrap'>
          {movies.map((movie) =>(
            <Card key={movie.id} movie={movie}/> 
          ))}
          

        </div>
      </div>
        
    </main>
  )
}

