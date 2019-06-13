import React from 'react';
import './App.css';
import { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import Radium from 'radium';
import {StyleRoot} from 'radium';
import { fadeIn } from 'react-animations';



class App extends Component {
  constructor(props) {
    super()
    this.state = {
      opacity: 1
    }
  }

  mouseEnter() {
    console.log('mouse enter')
    this.setState({opacity: 0.5})
  }
  mouseLeave() {
    console.log('mouse leave')
    this.setState({opacity: 1})
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
        
          Apollo Truong
          <p>
            Hey!

            

            
          </p>
          <StyleRoot>
          <div className="test" style={styles.fadeIn}>
          <SocialIcon network="linkedin" bgColor="#00f6ff" url="https://www.linkedin.com/in/apollo-truong-a61129116/" style={styles.socialIconLinkedIn}> </SocialIcon>{" "}<SocialIcon network="email" bgColor="#00f6ff" url="mailto:apollomtruong@gmail.com"> </SocialIcon> <SocialIcon network="github" bgColor="#00f6ff" url="https://github.com/apollotruong" ></SocialIcon>
          </div>
          </StyleRoot>

        </header>  
          
        
      </div>

      
    );
  }
}

export default App;


const styles = {
  fadeIn: {
    animation: 'x 2s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  },

  socialIconLinkedIn: {
    padding: 2
  }
};