import './moviereview.css';


function CardReview(props) {
    return (
        <div className="moviereviewcard">
          <div className="moviereviewcard__body">
            <div className="moviereviewcard__image" style={{backgroundImage: `url(${props.image})`}}></div>
            <div className="moviereviewcard__details">
              <div className="moviereviewcard__title">{props.title}</div>
              <div className="moviereviewcard__descriptions">
                <div className="moviereviewcard__description1">{props.description1}</div>  {/** Maybe Movie Review Description */}
                <div className="moviereviewcard__description2">{props.description2}</div> {/** Maybe Movie Rating */}
              </div>
            </div>
          </div>
        </div>
      );
    }

export default CardReview;