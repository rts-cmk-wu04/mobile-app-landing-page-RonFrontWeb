import HeaderText from './HeaderText';
import './GetStarted.scss';


function GetStarted() {
  return (
    <div className="getStarted">
      <div className="getStarted__textContainer">
        <h1 className="getStarted__headline">Get started</h1>
        <HeaderText headline="User-friendly Interface"><p className="getStarted__text">The in-game goal clips from every Premier League match are available to Guardian TV customers with a Guardian subscription.</p>
        <p className="getStarted__text">So, if you’re not a subscriber, now’s the time to make that savvy call. If that’s a step too far for you, you can still watch loads of firecracker Premier League action as long as you sign in with a free Guardian iD.</p></HeaderText>
        <button className="getStarted__button">Learn more</button>
        </div>
          <div className="getStarted__imageContainer">
            <img className="getStarted__image" src="/backgroundGS.png" alt=""/>
          </div>
    </div>
  );
}

export default GetStarted;

