import * as React from "react";

export class ProfilePicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hovered: false };
  }
  mouseEnter = () => {
    console.log("hello", this);
    this.setState({ hovered: true });
  };
  mouseLeave = () => {
    this.setState({ hovered: false });
  };
  render() {
    // if (this.state.hovered) {
    //   return null;
    // }
    return (
      <div className="comp-profile-pic" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
        <img
          src={this.props.imageSrc}
          alt={"Pic Belongs Here"}
          onMouseEnter={this.onMouseEnter}
          style={profileStyles.circular}
        />
      </div>
    );
  }
}

const profileStyles = {
  circular: {
    width: "200px",
    height: "200px",
    overflow: "hidden",
    borderRadius: "50%"
  }
};
