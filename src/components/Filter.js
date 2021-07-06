import React from 'react'
import {Form} from 'react-bootstrap'
import ReactStars from "react-rating-stars-component"
import '../App.css'
function Filter({ fTitle, fRate }) {
    return (
        <header>
            <h1 className='title'>Movies</h1>
            <Form.Control className="searchBar" onChange={(e) => fTitle(e.target.value)} type="text" placeholder="What do you want to watch?" />
            <ReactStars className='stars'
                count={5}
                onChange={(newRating) => fRate(newRating)}
                size={24}
                activeColor="#ffd700"


                edit={true}
            />
        </header>
    )
}

export default Filter