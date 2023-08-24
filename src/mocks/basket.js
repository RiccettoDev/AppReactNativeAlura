import logo from '../assets/logo.png';

import tomate from '../assets/frutas/Tomate.png';
import brocolis from '../assets/frutas/Brócolis.png';
import batata from '../assets/frutas/Batata.png';
import pepino from '../assets/frutas/Pepino.png';
import abobora from '../assets/frutas/Abóbora.png';

const basket = {
  header: {
    title: 'Detalhe da Cesta',
  },
  details: {
    nameBasket: 'Cesta de verduras',
    logoFarm: logo,
    nameFarm: 'Jenny Jack Farm',
    description:
      'Uma cesta com produtos selecionados cuidadosamente direto da fazenda para sua cozinha',
    price: 'R$ 40,00',
    button: 'Comprar',
  },
  items: {
    title: 'Itens da Cesta',
    list: [
      {
        id: 1,
        name: 'Tomate',
        image: tomate,
      },
      {
        id: 2,
        name: 'Brócolis',
        image: brocolis,
      },
      {
        id: 3,
        name: 'Batata',
        image: batata,
      },
      {
        id: 4,
        name: 'Pepino',
        image: pepino,
      },
      {
        id: 5,
        name: 'Abóbora',
        image: abobora,
      },
    ],
  },
};

export default basket;
