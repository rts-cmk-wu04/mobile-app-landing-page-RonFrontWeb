import './App.scss';
import Features from './components/Features';
import GetStarted from './components/GetStarted';
import HeaderText from './components/HeaderText';
import Sports from './components/Sports';
import Twitter from './components/Twitter';
import TwitterCarousel from './components/TwitterCarousel';
import WeHaveBeen from './components/WeHaveBeen';
import WhatItDoes from './components/WhatItDoes';

function App() {
  return (
    // <TwitterCarousel>
    //   <Twitter name="hanne" text="If you’re interested in the scores of more than one team (it’s OK, we won’t tell your mates you support two clubs!), you can choose the scores and competitions that matter to you using the ‘My Scores’ section. So, make sure you’re a top-flight football fan by downloading the Football Score Centre now. It’s got all this:" image="/test.jpg"/>
    // </TwitterCarousel>
  <>
    <Sports>
    <img className="sports__logo" src="/sportLogo.svg" alt=""/>
    </Sports>
    <WhatItDoes/>
    <GetStarted/>
    <Features/>
    <TwitterCarousel/>
    <WeHaveBeen/>
    <Sports/>
  </>
  );
}

export default App;
