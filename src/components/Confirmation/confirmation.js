import SecHeader from '../secondheader';
import '../secondheader.css';
import { Link } from 'react-router-dom';
import './confirmation.css';

function Confirmation() {

  
   return (
     <div>
        <SecHeader />
        <p>Movie review has been deleted!</p>
       <button className="movieDelete">
          <Link to="/" className="button">Okay</Link>
       </button>
    </div>
   );
  }
  
  
  export default Confirmation;