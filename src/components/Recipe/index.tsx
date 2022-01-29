import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

type RecipeProps = {
  link: string;
  image: string;
  title: string;
  recipe: string;
  ingredients: string;
}

const Recipe = ({ image, title, recipe, ingredients, link = '/' }: RecipeProps) => {
  return (
    <section className='Recipe'>
      <figure className='Recipe__image'>
        <img src={image} alt={recipe} />
      </figure>
      <div className='Recipe__info'>
        <h3>{title}</h3>
        <p><strong>{recipe}</strong></p>
        <small>Ingredientes:</small>
        <small>{ingredients}</small>
        <Link to={link} className='btn-underline'>
          Ver todo
        </Link>
      </div>
    </section>
  );
};

export default Recipe;
