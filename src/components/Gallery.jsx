import React from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../data.json';
import '../style/Gallery.scss';

function Gallery() {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/lodging/${id}`);
  };

  return (
    <section className="cards">
      {data.map((card) => (
        <div className="card-gallery" key={card.id} onClick={() => handleCardClick(card.id)}>
          <figure>
            <img src={card.cover} alt={card.title} />
            <figcaption>{card.title}</figcaption>
          </figure>
        </div>
      ))}
    </section>
  );
}

export default Gallery;