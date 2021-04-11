import './Twitter.scss';


function Twitter({name,text,image}) {
    console.log(name)

  return (
    <div className="twitter">
        <div className="twitter__container">
            <img className="twitter__image" src={image} alt={name}/>
            <h1 className="twitter__name">{name}</h1>
            <img src="/twitter.svg" alt=""/>
        </div>
        <p className="twitter__text">{text}</p>
    </div>
  );
}

export default Twitter;
