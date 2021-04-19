import HeaderText from './HeaderText';
import './Sports.scss';


function Sports({children,image,headline,text,hidden,reverseorder}) {
  return (
    <div className="sports">
      <div className={`sports__wrapper ${reverseorder||""}`}>
        <div className="sports__container">
        {children}
          <HeaderText headline={headline}><p>{text}</p></HeaderText>
          <div className="sports__store">
            <img src="/AppleStore.svg" alt="appleStore"/>
            <img src="/GooglePlay.svg" alt="googleStore"/>
          </div>
        </div>
      </div>
      <img className={`sports__image ${hidden||""} `} src={image} alt="background"/>
    </div>
  );
}

export default Sports;
