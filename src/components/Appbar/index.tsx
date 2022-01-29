import React from 'react';

const Appbar = () => {
  return (
    <header>
      <section className=''>
        <p>Envio gratis en pedidos desde $699</p>
      </section>
      <section>
        <figure>
          <img src='/assets/logo.png' alt='La visconia' />
        </figure>
        <nav>
          <ul>
            <li>Cocción</li>
            <li>Preparación</li>
            <li>Mesa y accesorios</li>
            <li>Consumibles</li>
            <li>Electrodomesticos</li>
            <li>Línea profesional</li>
          </ul>
        </nav>
        <div>
          <button type='button' title='Abrir menu de usuario'>
            <figure>
              <img src='/assets/user.png' alt='Menu de usuario' />
            </figure>
          </button>
          <button type='button'>
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
