import React from 'react';

const Banner = () => {
  return (
    <section className='Banner'>
      <div className='Banner__info'>
        <p><strong>5 Pack de sartenes EKCO classic</strong></p>
        <p>Aluminio color azul con duraflon plus</p>
        <p>De $1,638.00</p>
        <p>A solo $899.00</p>
      </div>
      <figure className='Banner__image'>
        <img src='/assets/banner-img.jpg' alt='Pack de sartenes' />
      </figure>
    </section>
  );
};

export default Banner;
