import React, { useRef } from 'react';
import { BiChevronLeftCircle, BiChevronRightCircle } from 'react-icons/bi';
import ProductCard from '../ProductCard';
import './styles.scss';

const BestSellers = () => {
  const ref = useRef<HTMLHeadingElement>();

  const handleScroll = (scrollOffset: number) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <section className='BestSellers'>
      <div className='BestSellers__header'>
        <h2>Los más vendidos</h2>
        <div className='BestSellers__header--actions'>
          <button
            type='button'
            title='Pagina anterior'
            className='btn-link-primary'
            onClick={() => handleScroll(-340)}
          >
            <BiChevronLeftCircle />
          </button>
          <button
            type='button'
            title='Siguiente pagina'
            className='btn-link-primary'
            onClick={() => handleScroll(340)}
          >
            <BiChevronRightCircle />
          </button>
        </div>
      </div>
      <div ref={ref} className='BestSellers__container'>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <React.Fragment key={item}>
            <ProductCard
              image=''
              name='Título'
              link={`product/${item}`}
              description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
