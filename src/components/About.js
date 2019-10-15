import React from 'react';
import '../allcss/About.css';

class About extends React.Component {

    render(){
      return (
        <div className="About" id="aboutSection">
            <h1>about</h1>
            <div className="intro">
            <p>I am a Front-end Developer with a degree in Human Resources. You might wonder, what's the relationship
              between both? It may seem like nothing but I believe the best way to know a human being is through
              a computer. This is why I enrolled in a bootcamp for 6 months with specialization in Front-end with Javascript 
              (mostly). Do you want to know more about me? 
            </p>
            <p>I am an organized, empathic, friendly and creative woman who doesn't see a limit when learning. 
              Really, if I want learn it, I learn it. 
              I love concerts, cats, dogs, going to the cinema, traveling, listening to music, 
              reading a good book or talking with good friends, and especially fixing the bugs in my code.
            </p>
            <p>So, check my work!</p>
            </div>
            
        </div>
      )
    }
}
  export default About;