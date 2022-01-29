import React from 'react';
import './styles.scss';

const Banner = () => {
  return (
    <section className='Banner'>
      <div className='Banner__info'>
        <p><strong>5 Pack de sartenes EKCO classic</strong></p>
        <p>Aluminio color azul con duraflon plus</p>
        <hr />
        <p>De $1,638.00</p>
        <p>A solo $899.00</p>
      </div>
      <figure className='Banner__image'>
        <img src='/assets/banner-img.png' alt='Pack de sartenes' />
      </figure>
    </section>
  );
};

export default Banner;
