import './App.css';
import NewMovie from './components/NewMovie/newmovie';
import EditMovie from './components/EditMovie/editmovie';
import HomePage from './components/homepage/homepage';
import MovieReview from './components/MovieReview/moviereview';
import Confirmation from './components/Confirmation/confirmation';
import SignUpPage from './components/SignUpPage/signuppage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {


  return (
   <Router>
     <div>
       <Routes>
         <Route exact path="/" element={<HomePage />}></Route>
         <Route exact path="/confirmation" element={<Confirmation />}></Route>
         <Route exact path="/add-item" element={<NewMovie />}></Route>
         <Route exact path="/edit-item" element={<EditMovie />}></Route>
         <Route exact path="/movieReview/:id" element={<MovieReview />}></Route>
         <Route exact path="/signup" element={<SignUpPage />}></Route> 
       </Routes>
     </div>
   </Router>
 );
}


export default App;
