import React from 'react';
import { Link } from 'react-router-dom';
import { BsImage } from 'react-icons/bs';
import './styles.scss';

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
        {image && (
          <img src={image} alt={name} />
        )}
        {!image && (
          <span><BsImage /></span>
        )}
      </figure>
      <div className='ProductCard__info'>
        <p>
          <strong>{name}</strong>
        </p>
        <p>{description}</p>
        <Link to={link} className='btn-underline'>
          Ver todo
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
