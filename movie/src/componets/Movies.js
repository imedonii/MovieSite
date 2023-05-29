import React from 'react'
import Movie from './Movie'

export default function Movies({ movies }) {
    // console.log(movies);
    return (
        <>
            {
                movies && movies.map(movie =>
                    <Movie key={movie.id} movies={movie} />
                )
            }
        </>
    )
}
