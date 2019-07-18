import React from "react";
import "./App.css";
import { Component } from "react";
import { SocialIcon } from "react-social-icons";
import Radium from "radium";
import { StyleRoot } from "radium";
import { fadeIn } from "react-animations";
import { ProfilePicture } from "./components/profile-pic";
import picture from "./assets/profilePicture.jpg";
// import "./assets/profile-pic.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Apollo Truong
          <p className="test">Hey!</p>
          <ProfilePicture imageSrc={picture} />
          <StyleRoot>
            <div style={styles.fadeIn}>
              <SocialIcon
                network="linkedin"
                bgColor="#00f6ff"
                url="https://www.linkedin.com/in/apollo-truong-a61129116/"
              />
              <SocialIcon network="email" bgColor="#00f6ff" url="mailto:apollomtruong@gmail.com" />
              <SocialIcon network="github" bgColor="#00f6ff" url="https://github.com/apollotruong" />
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
    animation: "x 2s",
    animationName: Radium.keyframes(fadeIn, "fadeIn")
  },

  socialIconLinkedIn: {
    padding: 2
  }
};
