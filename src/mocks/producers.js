import green from '../assets/home/produtores/green.png';
import grow from '../assets/home/produtores/grow.png';
import jennyJack from '../assets/home/produtores/jenny-jack.png';
import potager from '../assets/home/produtores/potager.png';
import salad from '../assets/home/produtores/salad.png';
import carrefour from '../assets/home/produtores/carrefour.png';
import acai from '../assets/home/produtores/acai.png';
import crema from '../assets/home/produtores/crema.png';

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const producers = {
  title: 'Produtores',
  list: [
    {
      id: 1,
      name: 'Green',
      image: green,
      distance: `${generateRandomNumber(1, 500)}m`,
      stars: generateRandomNumber(1, 5),
    },
    {
      id: 2,
      name: 'Grow',
      image: grow,
      distance: `${generateRandomNumber(1, 500)}m`,
      stars: generateRandomNumber(1, 5),
    },
    {
      id: 3,
      name: 'Jenny Jack',
      image: jennyJack,
      distance: `${generateRandomNumber(1, 500)}m`,
      stars: generateRandomNumber(1, 5),
    },
    {
      id: 4,
      name: 'Potager',
      image: potager,
      distance: `${generateRandomNumber(1, 500)}m`,
      stars: generateRandomNumber(1, 5),
    },
    {
      id: 5,
      name: 'Salad',
      image: salad,
      distance: `${generateRandomNumber(1, 500)}m`,
      stars: generateRandomNumber(1, 5),
    },
    {
      id: 6,
      name: 'Carrefour',
      image: carrefour,
      distance: `${generateRandomNumber(1, 500)}m`,
      stars: generateRandomNumber(1, 5),
    },
    {
      id: 7,
      name: 'Açaí',
      image: acai,
      distance: `${generateRandomNumber(1, 500)}m`,
      stars: generateRandomNumber(1, 5),
    },
    {
      id: 8,
      name: 'Crema',
      image: crema,
      distance: `${generateRandomNumber(1, 500)}m`,
      stars: generateRandomNumber(1, 5),
    },
  ],
};

export default producers;
