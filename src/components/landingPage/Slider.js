import GetStart from "./GetStart"
import Track from './Track';
import MealManu from './MeaLMenu';
import MealItem from './MealItem';
import MealPlan from './MealPlan';
import Order from './Order';
import {ISlideConfig, PageSlides, SlideParallaxType} from 'react-page-slides';
import NavBar from "../navBar/NavBar";
const Slider =()=>{


    const slides: ISlideConfig[] = [

        {
            content: (
              <div>
                
                    {<GetStart/>}
              </div>
            ),
          },

        {
            content: (
              <div>
                
                    {<MealManu/>}
              </div>
            ),
          },
          {
            content: (
              <div>
                
                    {<MealPlan/>}
              </div>
            ),
          },
          {
            content: (
              <div>
                
                    {<MealItem/>}
              </div>
            ),
          },
          {
            content: (
              <div>
                
                    {<Order/>}
              </div>
            ),
          },
          {
            content: (
              <div>
                
                    {<Track/>}
              </div>
            ),
          },
          
    ]


    return(
        <div>
            <NavBar/>
             <PageSlides
        enableAutoScroll={true}
        transitionSpeed={1000}
        slides={slides}
        parallax={{
          offset: 0.6,
          type: SlideParallaxType.reveal,
        }}
      />
        </div>
    )
    }

export default Slider