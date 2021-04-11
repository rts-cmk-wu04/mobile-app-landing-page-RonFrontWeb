import HeaderText from './HeaderText';
import './Sports.scss';


function Sports({children}) {
  return (
    <div className="sports">
      {children}
      <HeaderText headline="Get a personalized football experience tailored just for you">Achieve super-fan status by getting tailored updates and up-to-the-minute information on your team.</HeaderText>
      <div className="sports__store">
        <img src="/AppleStore.svg" alt="appleStore"/>
        <img src="/GooglePlay.svg" alt="googleStore"/>
      </div>
    </div>
  );
}

export default Sports;
