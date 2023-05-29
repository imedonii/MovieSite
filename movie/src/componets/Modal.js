import React, { useState } from 'react'
// import './App.css';
import Movie from './Movie';

export default function Modal({ film, modalModal }) {

    // const [modal, setModal] = useState(false);

    // function toggleModal() {
    //     setModal(!modal);
    // }
    // console.log(movies);



    // console.log(film);
    return (
        <>
            {/* {modal && ( */}
            <div className='modal'>
                <div onClick={modalModal} className='overlay'></div>
                <div className='modalContent'>
                    {
                        <Movie key={film.id} film={film} />
                    }
                </div>
            </div>
            {/* )} */}
        </>
    )
}
