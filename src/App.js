import './App.css';
// import Movies from './componets/Movies';
import Image from './componets/Image';
import data from './data/movies'
import { useState } from 'react';
import Modal from './componets/Modal';


function App() {

  const [movies, setMovies] = useState(data);
  const [modal, setModal] = useState(false);
  const [film, setFilm] = useState([]);

  function modalModal() {
    setModal(!modal);
  }


  function clickPhoto(id) {

    const film = movies.filter(mov => mov.id === id)[0];
    setFilm(film);
    setModal(!modal);
    // setModal(true);
  }

  return (
    <div className='movieSection'>
      {/* <Movies movies={movies} /> */}
      <Image movies={movies} clickPhoto={clickPhoto} />
      {modal && <Modal film={film} modalModal={modalModal} />}

    </div>
  );
}

export default App;
