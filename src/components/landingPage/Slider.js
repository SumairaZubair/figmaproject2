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

  

  onLeave(origin, destination, direction) {
    console.log("Leaving section " + origin.index);
  }
  afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
  }
 
  
  
  
  render() {
    return (


<>
<NavBar/>
     <ReactFullpage 
        navigation={true}
        scrollOverflow={false}
        // autoScrolling={true}
        // scrollOverflow={true}
        
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



// import React, { Component } from "react";
// import ReactFullpage from "@fullpage/react-fullpage";
// import GetStart from "./GetStart";
// import Track from "./Track";
// import MealManu from "./MeaLMenu";
// import MealItem from "./MealItem";
// import MealPlan from "./MealPlan";
// import Order from "./Order";
// import Questions from "./questions/Questions";
// import NavBar from "../navBar/NavBar";
// import "../landingPage/style.css";

// class Slider extends Component {
//   constructor(props) {
//     super(props);

//     this.sections = [
//       <GetStart />,
//       <MealManu />,
//       <MealPlan />,
//       <MealItem />,
//       <Order />,
//       <Track />,
//       <Questions />,
//     ];

//     this.state = {
//       currentSection: 0,
//     };
//   }

//   componentDidMount() {
//     // Start automatic scrolling
//     this.startAutoScroll();
//   }

//   componentWillUnmount() {
//     // Stop automatic scrolling
//     this.stopAutoScroll();
//   }

//   startAutoScroll() {
//     this.intervalId = setInterval(() => {
//       const nextSection = (this.state.currentSection + 1) % this.sections.length;
//       this.setState({ currentSection: nextSection });
//     }, 3000); // Adjust the interval (in milliseconds) as needed
//   }

//   stopAutoScroll() {
//     clearInterval(this.intervalId);
//   }

//   render() {
//     return (
//       <>
//         <NavBar />
//         <ReactFullpage
//           navigation={true}
//           autoScrolling={true}
//           scrollingSpeed={1000} // Adjust the scrolling speed as needed (in milliseconds)
//           render={({ state, fullpageApi }) => {
//             return (
//               <ReactFullpage.Wrapper>
//                 {this.sections.map((section, index) => (
//                   <div className="section" key={index}>
//                     {section}
//                   </div>
//                 ))}
//               </ReactFullpage.Wrapper>
//             );
//           }}
//         />
//       </>
//     );
//   }
// }

// export default Slider;

