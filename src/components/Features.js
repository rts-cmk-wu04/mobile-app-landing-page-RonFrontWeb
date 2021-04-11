import HeaderText from './HeaderText';
import './Features.scss';
import FeaturesCard from './FeaturesCard';


function Features() {
  return (
    <div className="Features">
      <HeaderText headline="Features That Will Tailor Your Experience"></HeaderText>  
      <FeaturesCard image="/video.svg" text="Video highlights for every Premier League and English Football League game"/>
      <FeaturesCard image="/bell.svg" text="Notifications for your teams, including in-game goal clips and Premier League match highlights for Sky TV subscribers with Guardian"/>
      <FeaturesCard image="/HD.svg" text="Brand new video section including dedicated areas for your chosen team, trending video, Premier League, Football league and other major leagues"/>
      <FeaturesCard image="/flag.svg" text="Match pages showing live scores, commentary, team line-ups and enhanced match stats to keep you up-to-date on all the action"/>
      <FeaturesCard image="/style.svg" text="The new picture in picture video mode means you can watch goals, manager interviews and more whilst using other areas of the app – so you don’t need to miss any of the action"/>
      <FeaturesCard image="/poll.svg" text="Live updated league tables including all the domestic, European and major leagues and tournaments"/>
      <FeaturesCard image="/home.svg" text="The Guardian News Vidiprinter. Follow the goals as they go in with our new and improved Vidiprinter"/>
      <FeaturesCard image="/people.svg" text="Match reports, previews and a dedicated news section"/>
      <FeaturesCard image="/tune.svg" text="And you can achieve super-fan status by personalising your home page with up-to-the-minute information on your team."/>
    </div>
  );
}

export default Features;

