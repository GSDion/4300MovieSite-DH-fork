
import './App.css';
import NewMovie from './components/NewMovie/newmovie';
import HomePage from './components/homepage/homepage';
import MovieReview from './components/MovieReview/moviereview';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/add-item" element={<NewMovie />}></Route>
          <Route exact path="/movieReview/:id" element={<MovieReview />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
