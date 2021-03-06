import Twitter from './Twitter';
import './TwitterCarousel.scss';
import { useEffect, useState } from "react";
import Carousel from 'react-grid-carousel' 


function TwitterCarousel() {
  var [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((result) => setData(result));
  }, []);
  
  return (
   <div className="carousel">
   <h1 className="carousel__Headline">What Our Users Say</h1>
   <Carousel  cols={4} rows={1} gap={10} showDots loop responsiveLayout={[
  {
    breakpoint: 800,
    cols: 2,
    rows: 1,
    gap: 10,
    loop: true,
    autoplay: 3000
  },{
    breakpoint: 1200,
    cols: 3,
    autoplay: 3000
  }

]}>
    

    {data.map(function (arrayItem) {
          return (

      <Carousel.Item key={arrayItem.ID} >
        <Twitter 
        headline={arrayItem.name}
        image={arrayItem.image} 
        text={arrayItem.text}
        />
        
      </Carousel.Item>

          );
        })}
      
      
    </Carousel>

   </div>
    
  );
}

export default TwitterCarousel;
