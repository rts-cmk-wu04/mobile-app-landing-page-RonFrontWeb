import './FeaturesCard.scss';


function FeaturesCard({image,text}) {
  return (
    <div className="FeaturesCard">
        <img className="FeaturesCard__icon" src={image} alt="video icon"/>
        <p className="FeaturesCard__text">{text}</p>
    </div>
  );
}

export default FeaturesCard;

