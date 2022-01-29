import React, { useState } from 'react';
import { BiPlus, BiMinus } from 'react-icons/bi';

type AccordionProps = {
  title: string;
  children: React.ReactChild | React.ReactChild[];
}

const Accordion = ({ title, children }: AccordionProps) => {
  const [active, setActive] = useState(false);
  return (
    <div className='Accordion'>
      <button type='button' onClick={() => setActive(!active)}>
        <p>{title}</p>
        <span>
          {!active && <BiPlus />}
          {active && <BiMinus />}
        </span>
      </button>
      <div>
        {children}
      </div>
    </div>
  );
};

export default Accordion;
