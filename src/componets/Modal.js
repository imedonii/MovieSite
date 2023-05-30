import React from 'react'
import Movie from './Movie';

export default function Modal({ film, modalModal }) {

    return (
        <>
            <div className='modal'>
                <div onClick={modalModal} className='overlay'></div>
                <div className='modalContent'>
                    {
                        <Movie key={film.id} film={film} />
                    }
                </div>
            </div>
        </>
    )
}
