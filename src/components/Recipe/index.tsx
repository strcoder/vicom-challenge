import React from 'react';
import { Link } from 'react-router-dom';

type RecipeProps = {
  link: string;
  title: string;
  recipe: string;
  ingredients: string;
}

const Recipe = ({ title, recipe, ingredients, link = '/' }: RecipeProps) => {
  return (
    <section className='Recipe'>
      <figure className='Recipe__image'>
        <img src='/assets/recipe.img' alt='Camarones al mojo de ajo' />
      </figure>
      <div className='Recipe__info'>
        <h3>Recetas EKCO</h3>
        <p><strong>Camarones al mojo de ajo</strong></p>
        <small>Ingredientes</small>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <Link to='/recipe/camarones-al-mojo-de-ajo'>
          Ver todo
        </Link>
      </div>
    </section>
  );
};

export default Recipe;
