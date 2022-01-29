import React from 'react';
import Banner from '../../components/Banner';
import Recipe from '../../components/Recipe';
import './styles.scss';

const Home = () => {
  return (
    <>
      <figure className='Home__logo'>
        <img src='/assets/EKCO.png' alt='ECKO' />
      </figure>
      <Banner />
      <Recipe
        title='Recetas EKCO'
        image='/assets/recipe.png'
        ingredients={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
        recipe='Camarones al mojo de ajo'
        link='/recipe/camarones-al-mojo-de-ajo'
      />
    </>
  );
};

export default Home;
