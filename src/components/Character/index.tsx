import axios from 'axios';
import React from 'react';

type CharacterProps = {
  name: string;
  image: string;
  gender: string;
  episodes: string[];
};

const Character = ({ image, name, gender, episodes }: CharacterProps) => {

  const formatEpisode = async ({ url }: { url: string }) => {
    const { data } = await axios({
      url,
      method: 'GET',
    });

    return data ? data.episode : '';
  };

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
          {episodes.splice(0, 5).map((episode) => (
            <p>{`Episodio: ${formatEpisode({ url: episode })}`}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Character;
