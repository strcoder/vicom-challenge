import React from 'react';
import { Link } from 'react-router-dom';

type ProductCardProps = {
  name: string;
  image: string;
  link: string;
  description: string;
};

const ProductCard = ({
  name,
  image,
  link = '/',
  description,
}: ProductCardProps) => {
  return (
    <div className='ProductCard'>
      <figure className='ProductCard__image'>
        <img src={image} alt={name} />
      </figure>
      <div className='ProductCard__info'>
        <p>
          <strong>{name}</strong>
        </p>
        <p>{description}</p>
        <Link to={link}>Ver todo</Link>
      </div>
    </div>
  );
};

export default ProductCard;
