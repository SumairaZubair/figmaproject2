
import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import '../landingPages/style.css'
import HomePage from "../../commonComp/landingPages/HomePage";
import NavBar from "../../commonComp/navBar/NavBar";
 
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
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (

            <ReactFullpage.Wrapper>
              <div className="section">
              <HomePage/>
              </div>
             
              
            </ReactFullpage.Wrapper>
          );
        }}
      />
      </>
    );
  }
}

export default Slider;





