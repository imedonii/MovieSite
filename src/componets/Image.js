import React from 'react'

export default function Image({ movies, clickPhoto }) {
    return (
        <div className='mainImag'>
            {movies.map(images =>
                <img
                    src={images.image}
                    key={images.id}
                    onClick={() => clickPhoto(images.id)} />
            )}
        </div>
    )
}
