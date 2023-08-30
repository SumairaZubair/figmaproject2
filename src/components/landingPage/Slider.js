// import GetStart from "./GetStart"
// import Track from './Track';
// import MealManu from './MeaLMenu';
// import MealItem from './MealItem';
// import MealPlan from './MealPlan';
// import Order from './Order';
// import Questions from "./questions/Questions"
// import {ISlideConfig, PageSlides, SlideParallaxType} from 'react-page-slides';
// import NavBar from "../navBar/NavBar";
// const Slider =()=>{


//     const slides: ISlideConfig[] = [

//         {
//             content: (
//               <div>
                
//                     {<GetStart/>}
//               </div>
//             ),
//           },

//         {
//             content: (
//               <div>
                
//                     {<MealManu/>}
//               </div>
//             ),
//           },
//           {
//             content: (
//               <div>
                
//                     {<MealPlan/>}
//               </div>
//             ),
//           },
//           {
//             content: (
//               <div>
                
//                     {<MealItem/>}
//               </div>
//             ),
//           },
//           {
//             content: (
//               <div>
                
//                     {<Order/>}
//               </div>
//             ),
//           },
//           {
//             content: (
//               <div>
                
//                     {<Track/>}
//               </div>
//             ),
//           },  
//           {
//             content: (
//               <div>
                
//                     {<Questions/>}
//               </div>
//             ),
//           }  
          
          
//     ]


//     return(
//         <div>
//             <NavBar/>
//              <PageSlides
//         enableAutoScroll={true}
//         transitionSpeed={1000}
//         slides={slides}
//         parallax={{
//           offset: 0.6,
//           type: SlideParallaxType.reveal,
//         }}
//       />
//         </div>
//     )
//     }

// export default Slider


import React from "react";
// import ReactDOM from "react-dom";
import GetStart from "./GetStart"
import Track from './Track';
import MealManu from './MeaLMenu';
import MealItem from './MealItem';
import MealPlan from './MealPlan';
import Order from './Order';
import Questions from "./questions/Questions"
import NavBar from "../navBar/NavBar";
import ReactFullpage from "@fullpage/react-fullpage";
import '../landingPage/style.css'
// ScrollHorizontally(); 
class Slider extends React.Component {

  constructor(props) {
    super(props);
    this.fullpageApi = null;
  }

  componentDidMount() {
    // Start auto-scrolling when the component mounts
    this.startAutoScroll();
  }

  componentWillUnmount() {
    // Clear the interval when the component is unmounted to prevent memory leaks
    clearInterval(this.autoScrollInterval);
  }

  onLeave(origin, destination, direction) {
    console.log("Leaving section " + origin.index);
  }
  afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
  }

  
  startAutoScroll() {
    // Set up an interval to scroll to the next section every 5 seconds
    this.autoScrollInterval = setInterval(() => {
      if (this.fullpageApi) {
        this.fullpageApi.moveSectionDown();
      }
    }, 1000); // 5000 milliseconds (5 seconds)
  }
  render() {
    return (


<>
<NavBar/>
     <ReactFullpage 
        navigation={true}
        // scrollOverflow{false}
        scrollOverflow={false}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (

            <ReactFullpage.Wrapper>
              <div className="section">
              <GetStart/>
              </div>
              <div className="section">
              <MealManu/>
              </div>
              <div className="section">
              <MealPlan/>
              </div>
              <div className="section">
                <MealItem/> 
              </div>
              <div className="section">
              <Order/>
              </div>
              <div className="section">
              <Track/>
              </div>
              <div className="section">
              <Questions/>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
      </>
    );
  }
}



// ReactDOM.render(<Slider />, document.getElementById("react-root"));

export default Slider;