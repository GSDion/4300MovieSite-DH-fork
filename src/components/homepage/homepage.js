import Movies from './movies';
import Header from '../header';



const DUMMY_MOVIES = [
  {
    id: 'm1',
    title: 'Inception',
    rating: 4.5,
    image: 'https://www.themoviedb.org/t/p/original/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg'
  },
  {
    id: 'm2',
    title: 'The Dark Knight',
    rating: 4.8,
    image: 'https://www.themoviedb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg'
  },
  {
    id: 'm3',
    title: 'The Godfather',
    rating: 4.9,
    image: 'https://www.themoviedb.org/t/p/original/3bhkrj58Vtu7enYsRolD1fZdja1.jpg'
  },

  {
    id: 'm4',
    title: 'The Shawshank Redemption',
    rating: 5.0,
    image: 'https://i5.walmartimages.com/asr/e8471db3-5b27-441d-ba57-8994d899c440.a6131fcc646b554c886dc0c64666d017.jpeg'

  },
  {
    id: 'm5',
    title: 'Spotlight',
    rating: 5.0,
    image: 'https://i.ebayimg.com/images/g/aZ4AAOSwlV9WT6fa/s-l500.jpg'
  },

  {
    id: 'm6',
    title: 'The Prestige',
    rating: 5.0,
    image: 'https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_.jpg'
  },
  

];


function HomePage() {

  
  return (
    <div>
      <Header />
      <Movies items ={DUMMY_MOVIES} />
    </div>
  );
}

export default HomePage;
