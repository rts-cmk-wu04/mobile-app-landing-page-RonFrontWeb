import HeaderText from './HeaderText';
import './Features.scss';
import FeaturesCard from './FeaturesCard';


function Features() {
  return (
    <div className="features">
      <HeaderText headline="Features That Will Tailor Your Experience"></HeaderText>  
        <div className="features__container">
          <FeaturesCard icon="video" text="Video highlights for every Premier League and English Football League game"/>
          <FeaturesCard icon="bell" text="Notifications for your teams, including in-game goal clips and Premier League match highlights for Sky TV subscribers with Guardian"/>
          <FeaturesCard icon="HD" text="Brand new video section including dedicated areas for your chosen team, trending video, Premier League, Football league and other major leagues"/>
          <FeaturesCard icon="flag" text="Match pages showing live scores, commentary, team line-ups and enhanced match stats to keep you up-to-date on all the action"/>
          <FeaturesCard icon="style" text="The new picture in picture video mode means you can watch goals, manager interviews and more whilst using other areas of the app – so you don’t need to miss any of the action"/>
          <FeaturesCard icon="poll" text="Live updated league tables including all the domestic, European and major leagues and tournaments"/>
          <FeaturesCard icon="home" text="The Guardian News Vidiprinter. Follow the goals as they go in with our new and improved Vidiprinter"/>
          <FeaturesCard icon="people" text="Match reports, previews and a dedicated news section"/>
          <FeaturesCard icon="tune" text="And you can achieve super-fan status by personalising your home page with up-to-the-minute information on your team."/>
        </div>
    </div>
  );
}

export default Features;

