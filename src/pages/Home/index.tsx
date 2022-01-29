import React from 'react';
import Banner from '../../components/Banner';
import './styles.scss';

const Home = () => {
  return (
    <>
      <figure className='Home__logo'>
        <img src='/assets/EKCO.png' alt='ECKO' />
      </figure>
      <Banner />
    </>
  );
};

export default Home;
