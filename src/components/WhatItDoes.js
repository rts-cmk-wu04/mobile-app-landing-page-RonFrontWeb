import HeaderText from './HeaderText';
import './WhatItDoes.scss';


function WhatItDoes() {
  return (
    <div className="whatItDoes">
      <h1 className="whatItDoes__headline">What it does</h1>
      <HeaderText headline="An Enhanced Football Experience"><p> The Guardian Live Scores app is your go to app for live scores and watching Premier League goals… Get in there, what a result! </p>
        <p>As well as videos of all the goals, you can watch match highlights, check out the latest scores and results and stay bang-up-to-date with the big football stories from The Guardian publication.</p></HeaderText>
          <button className="whatItDoes__button">Learn more</button>
          <div className="whatItDoes__backgroundContainer">
          <div className="whatItDoes__overlay"></div>
            <img className="whatItDoes__backgroundImage" src="/backWID.png" alt="background"/>
            <div>
              <img className="whatItDoes__backgroundImageTopTwo" src="/picOnTop2.png" alt=""/>
              <img className="whatItDoes__backgroundImageTopOne" src="/picOnTop1.png" alt=""/>
            </div>
          </div>
    </div>
  );
}

export default WhatItDoes;
