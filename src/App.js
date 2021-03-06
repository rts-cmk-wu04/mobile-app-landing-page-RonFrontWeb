import './App.scss';
import Features from './components/Features';
import Footer from './components/Footer';
import GetStarted from './components/GetStarted';
import Sports from './components/Sports';
import TwitterCarousel from './components/TwitterCarousel';
import WeHaveBeen from './components/WeHaveBeen';
import WhatItDoes from './components/WhatItDoes';

function App() {
  return (
    // <TwitterCarousel>
    //   <Twitter name="hanne" text="If you’re interested in the scores of more than one team (it’s OK, we won’t tell your mates you support two clubs!), you can choose the scores and competitions that matter to you using the ‘My Scores’ section. So, make sure you’re a top-flight football fan by downloading the Football Score Centre now. It’s got all this:" image="/test.jpg"/>
    // </TwitterCarousel>
  <>
    <Sports hidden="sports__hidden" image="headerImage.png" headline="Get a personalized football experience tailored just for you" text="Achieve super-fan status by getting tailored updates and up-to-the-minute information on your team.">
    <img className="sports__logo" src="/sportLogo.svg" alt="sports"/>
    </Sports>
    <WhatItDoes/>
    <GetStarted/>
    <Features/>
    <TwitterCarousel/>
    <WeHaveBeen/>
    <Sports reverseorder="sports__reverseorder" image="footerImage.png" headline="Get Up Close With Your Team" text="If you’re interested in the scores of more than one team (it’s OK, we won’t tell your mates you support two clubs!), you can choose the scores and competitions that matter to you using the ‘My Scores’ section. So, make sure you’re a top-flight football fan by downloading the Football Score Centre now. It’s got all this:"/>
    <Footer/>
  </>
  );
}

export default App;
