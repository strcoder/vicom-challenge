import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Accordion from '../../components/Accordion';
import Banner from '../../components/Banner';
import BestSellers from '../../components/BestSellers';
import Character from '../../components/Character';
import Recipe from '../../components/Recipe';
import './styles.scss';

type CharacterProps = {
  name?: string;
  image?: string;
  gender?: string;
  episode?: string[];
}

const Home = () => {
  const [character, setCharacter] = useState<CharacterProps>();

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://rickandmortyapi.com/api/character/2',
    }).then(({ data }) => {
      setCharacter(data);
    });
  }, []);
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
      <BestSellers />
      <div className='Home__footer'>
        <div className='Home__footer--FAQ'>
          {[1, 2, 3].map((item) => (
            <React.Fragment key={`Accordion-${item}`}>
              <Accordion title={`Pregunta ${item}`}>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
              </Accordion>
            </React.Fragment>
          ))}
        </div>
        <div className='Home__footer--Character'>
          <Character
            name={character?.name}
            image={character?.image}
            gender={character?.gender}
            episode={character?.episode}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
