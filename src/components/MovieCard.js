import React from 'react'
import { Card } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component"
import '../App.css'


function MovieCard({ movie }) {
    return (
        <div className='movieCard'>
            <Card style={{ width: '275px',height:'480px' ,margin:'20px'}}>
            
                <Card.Img style={{ height:'300px'}} variant="top" src={movie.posterUrl||'https://lh3.googleusercontent.com/proxy/qay97iYYIf_vW2iZSB_xm4Glwa5PCkuAhEOCoKermuEzdNUYjy42vb4sYmXlrgY_68rPvB-M2O80oxM8wK4KRVGlNO0_8bREHaDm_qdiVBQnGMCdhDabfF8WJiaVr4E'} />
                <Card.Body>
                    <Card.Title >{movie.title}</Card.Title>
                    <Card.Text style={{height:'75px',overflowY: 'scroll'}} >
                        {movie.description}
    </Card.Text>
                    <ReactStars
                        count={5}
                        
                        size={24}
                        activeColor="#ffd700"
                        value={movie.rate}
                        edit={false}
                    />
                </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCard