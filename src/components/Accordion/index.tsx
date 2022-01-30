import React, { useState } from 'react';
import { BiPlus, BiMinus } from 'react-icons/bi';
import './styles.scss';

type AccordionProps = {
  title: string;
  children: React.ReactChild | React.ReactChild[];
}

const Accordion = ({ title, children }: AccordionProps) => {
  const [active, setActive] = useState(false);
  return (
    <div className='Accordion'>
      <button className='Accordion__header' type='button' onClick={() => setActive(!active)}>
        <p>{title}</p>
        <span>
          {!active && <BiPlus />}
          {active && <BiMinus />}
        </span>
      </button>
      <div className={`Accordion__content ${active}`}>
        {children}
      </div>
    </div>
  );
};

export default Accordion;
