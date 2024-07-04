import React, { useEffect, useState } from 'react'
import { useGifstate } from '../context/context'
import Gif from '../components/gif';
import FilterGif from '../components/FilterGif';

function Home() {
  const { gf, gifs,setfifs,searchTerm, setSearchTerm, Favourate } = useGifstate();
  const fethTrandingFiGS = async () => {
    const { data } = await gf.trending({
      limit: 20,
      type: searchTerm,
      rating: "g",
    })
    setfifs(data);
  };
  useEffect(() => {
    fethTrandingFiGS()
  } ,[searchTerm]);

    
  
  return (
    
    <div>
      <img src='/banner.gif'
        alt='gif banner'
        className='mt-2 rounded w-full' />
       <FilterGif/>
      
      {/*<Serachgiff/>*/}
      <div className="columns-2 md:columns-3 lg:columns-4 xl:col-span-5 gap-2">
        {gifs.map((gif) => {
          console.log(gif)
          return <Gif gif={gif} key={gif.title} /> 
        })}
       
      </div>
      
    </div>
  )
}

export default Home
