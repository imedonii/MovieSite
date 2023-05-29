import React from 'react'
// import Image from './Image'
// import { useState } from 'react';
// import data from '../data/movies'



export default function Movie({ film }) {

    // const [film, setfilm] = useState(data);

    // console.log(film);
    return (
        <div>
            <div className='info'>
                <div className='image'>
                    <img src={film.image} alt={film.name} />
                </div>
                <div className='content'>
                    <p>{film.category}</p>
                    <h1>{film.name} ({film.year})</h1>
                    <p>{film.description}</p>
                    <p><b>{film.time} min</b></p>
                    <div className='buttons'>
                        {/* <h3>Watch</h3> */}
                        <a href={film.movieLink}>
                            <button>
                                <i className="fa-regular fa-circle-play"></i>
                            </button>
                        </a>
                        <a href={film.trailerLink}>
                            <button>WATCH TRAILER</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}