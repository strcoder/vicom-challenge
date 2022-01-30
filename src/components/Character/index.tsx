import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './styles.scss';

type CharacterProps = {
  name?: string;
  image?: string;
  gender?: string;
  episode?: string[];
};

const Character = ({ image, name, gender, episode }: CharacterProps) => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    episode?.splice(0, 5)?.map((item) => {
      axios({
        url: item,
        method: 'GET',
      }).then(({ data }) => {
        episodes?.push(data);
        setEpisodes([...episodes]);
      });
      return item;
    });
  }, [episode]);

  return (
    <div className='Character'>
      <figure className='Character__image'>
        <img src={image} alt={name} />
      </figure>
      <div className='Character__info'>
        <div>
          <p><strong>Nombre:</strong></p>
          <p>{name}</p>
        </div>
        <div>
          <p><strong>Género:</strong></p>
          <p>{gender}</p>
        </div>
        <div>
          <p><strong>Primeros 5 episodios:</strong></p>
          {episodes?.map((episode) => (
            <p>{`Episodio: ${episode.episode}`}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Character;
