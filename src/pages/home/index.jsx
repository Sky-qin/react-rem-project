import React from "react";
import TestApp from "../../components/test";
import "./index.css";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1 className="home-title">Hello Home Page</h1>
        <TestApp />
      </div>
    );
  }
}

export default Home;
