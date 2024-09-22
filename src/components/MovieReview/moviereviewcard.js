import './moviereviewcard.css';


function MovieReviewCard(props) {


  
    return (
        <div className="moviereviewcard">
          <div className="moviereviewcard__body">            
            <div className="moviereviewcard__details">
              <div className="moviereviewcard_image">
                <img src={props.movie.image} alt={props.movie.title} className="movie-item__image" />
              </div>
              <div className="moviereviewcard__title">{props.movie.title}</div>
                <div className="moviereviewcard__descriptions">
                  <div className="moviereviewcard__description2"><p>Rating: {props.movie.rating}⭐</p></div>
                  <div className="moviereviewcard__description2"><p>Review: </p></div>
                    <div className="moviereviewcard__description1">{props.movie.review}</div>  
                </div>
            </div>
          </div>
        </div>
      );
    }

export default MovieReviewCard;