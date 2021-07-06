import React from 'react'
import Filter from './Filter'
import {useState} from 'react'

import MovieCard from './MovieCard'

function MovieList({movies}) {
    const [title, settitle] = useState('')
    const [rate, setrate] = useState('')
    const fTitle=(title)=>{
settitle(title)
    }
    const fRate=(rate)=>{
setrate(rate)
    }
    return (
        <div >
            <Filter fTitle={fTitle} fRate={fRate}/>
            <div className="movieList" >
            {movies.filter(x=>x.title.toLowerCase().includes(title.toLowerCase())&&x.rate>=rate).map(x=><MovieCard movie={x} />)}
        </div>
        </div>
        
    )
}

export default MovieList