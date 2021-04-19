import './WeHaveBeen.scss';


function WeHaveBeen() {
  return (
    <div className="weHaveBeen">
      <h1 className="weHaveBeen__headline">We have been featured in</h1>
      <div className="weHaveBeen__container">
        <img className="weHaveBeen__image" src="/sportTV.svg" alt="video icon"/>
        <img className="weHaveBeen__image" src="/sports.svg" alt="video icon"/>
        <img className="weHaveBeen__image" src="/nbcsports.svg" alt="video icon"/>
        <img className="weHaveBeen__image" src="/technology.svg" alt="video icon"/>
        <img className="weHaveBeen__image" src="/news.svg" alt="video icon"/>
        <img className="weHaveBeen__image" src="/skysports.svg" alt="video icon"/>     
      </div>
    </div>
  );
}

export default WeHaveBeen;

