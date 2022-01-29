import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Appbar = () => {
  return (
    <header className='Header'>
      <section className='Header__ad'>
        <p>Envio gratis en pedidos desde $699</p>
      </section>
      <section className='Header__container'>
        <figure className='Header__container--logo'>
          <img src='/assets/logo.png' alt='La visconia' />
        </figure>
        <nav className='Header__container--nav'>
          <Link to='/'>Cocción</Link>
          <Link to='/'>Preparación</Link>
          <Link to='/'>Mesa y accesorios</Link>
          <Link to='/'>Consumibles</Link>
          <Link to='/'>Electrodomesticos</Link>
          <Link to='/'>Línea profesional</Link>
        </nav>
        <div className='Header__container--actions'>
          <button
            type='button'
            className='btn-link'
            title='Abrir menu de usuario'
          >
            <figure>
              <img src='/assets/user.png' alt='Menu de usuario' />
            </figure>
          </button>
          <button
            type='button'
            className='btn-link'
            title='Ver carrito de compras'
          >
            <figure>
              <img src='/assets/cart.png' alt='Carrito de compras' />
            </figure>
          </button>
        </div>
      </section>
    </header>
  );
};

export default Appbar;
