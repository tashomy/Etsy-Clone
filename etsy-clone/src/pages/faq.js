import React, { Component } from "react";
import { Link } from "react-router-dom";

class SixthDiv extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick4 = this.handleClick4.bind(this);
    this.state = {
      showMeOne: true,
      showMeTwo: false,
      showMeThree: false,
      showMeFour: false,
    };
  }

  componentDidMount() {
    let self = this;
    self.setState({});
  }

  handleClick(event) {
    let id = event.target.id;
    console.log(id);
    let activeTab = document.getElementById("home");
    let notActive1 = document.getElementById("modern");
    let notActive2 = document.getElementById("health");
    let notActive3 = document.getElementById("art");

    this.setState({
      showMeOne: true,
      showMeTwo: false,
      showMeThree: false,
      showMeFour: false,
    });

    // if (!activeTab.classList.contains("active")) {
    //   activeTab.classList.add("active");
    // }
    // if (notActive1.classList.contains("active")) {
    //   notActive1.classList.remove("active");
    // }

    // if (notActive2.classList.contains("active")) {
    //   notActive2.classList.remove("active");
    // }

    // if (notActive3.classList.contains("active")) {
    //   notActive3.classList.remove("active");
    // }
  }
  handleClick2(event) {
    let id = event.target.id;
    console.log(id);
    let activeTab = document.getElementById("modern");
    let notActive1 = document.getElementById("home");
    let notActive2 = document.getElementById("health");
    let notActive3 = document.getElementById("art");

    this.setState({
      showMeOne: false,
      showMeTwo: true,
      showMeThree: false,
      showMeFour: false,
    });

    // if (!activeTab.classList.contains("active")) {
    //   activeTab.classList.add("active");
    // }
    // if (notActive1.classList.contains("active")) {
    //   notActive1.classList.remove("active");
    // }

    // if (notActive2.classList.contains("active")) {
    //   notActive2.classList.remove("active");
    // }

    // if (notActive3.classList.contains("active")) {
    //   notActive3.classList.remove("active");
    // }
  }
  handleClick3(event) {
    let id = event.target.id;
    console.log(id);
    let activeTab = document.getElementById("health");
    let notActive1 = document.getElementById("modern");
    let notActive2 = document.getElementById("home");
    let notActive3 = document.getElementById("art");

    this.setState({
      showMeOne: false,
      showMeTwo: false,
      showMeThree: true,
      showMeFour: false,
    });

    // if (!activeTab.classList.contains("active")) {
    //   activeTab.classList.add("active");
    // }
    // if (notActive1.classList.contains("active")) {
    //   notActive1.classList.remove("active");
    // }

    // if (notActive2.classList.contains("active")) {
    //   notActive2.classList.remove("active");
    // }

    // if (notActive3.classList.contains("active")) {
    //   notActive3.classList.remove("active");
    // }
  }
  handleClick4(event) {
    let id = event.target.id;
    console.log(id);
    let activeTab = document.getElementById("art");
    let notActive1 = document.getElementById("modern");
    let notActive2 = document.getElementById("health");
    let notActive3 = document.getElementById("home");

    console.log(activeTab, notActive1, notActive2, notActive3);

    this.setState({
      showMeOne: false,
      showMeTwo: false,
      showMeThree: false,
      showMeFour: true,
    });

    // if (!activeTab.classList.contains("active")) {
    //   activeTab.classList.add("active");
    // }
    // if (notActive1.classList.contains("active")) {
    //   notActive1.classList.remove("active");
    // }

    // if (notActive2.classList.contains("active")) {
    //   notActive2.classList.remove("active");
    // }

    // if (notActive3.classList.contains("active")) {
    //   notActive3.classList.remove("active");
    // }
  }

  render() {
    let faqItems = this.state.faqItems;
    console.log(faqItems);

    const divStyle = {
      marginTop: "50px",
    };

    return (
      <div className="faq">
        {this.state.showMeOne ? (
          <div>
            <h3 className="title-faq">Discover unique hand-picked items </h3>
            <div className="faq-choice">
              <button
                onClick={this.handleClick}
                className="active"
                id="home"
                style={divStyle}
              >
                Home improvement ideas
              </button>
              <button onClick={this.handleClick2} id="modern" style={divStyle}>
                Modern farmhouse
              </button>
              <button onClick={this.handleClick3} id="health" style={divStyle}>
                Health & wellness
              </button>
              <button onClick={this.handleClick4} id="art" style={divStyle}>
                Art finds
              </button>
            </div>
            <div className="faq-part-1">
              <div className="big-image1"></div>
              <div className="faq-box">
                <div className="small-image1"></div>
                <div className="small-image1"></div>
              </div>
              <div className="big-image1"></div>
              <div className="faq-box">
                <div className="small-image1"></div>
                <div className="small-image1"></div>
              </div>
            </div>
          </div>
        ) : null}
        {this.state.showMeTwo ? (
          <div>
            <h3 className="title-faq">Discover unique hand-picked items </h3>
            <div className="faq-choice">
              <button onClick={this.handleClick} id="home" style={divStyle}>
                Home improvement ideas
              </button>
              <button
                className="active"
                onClick={this.handleClick2}
                id="modern"
                style={divStyle}
              >
                Modern farmhouse
              </button>
              <button onClick={this.handleClick3} id="health" style={divStyle}>
                Health & wellness
              </button>
              <button onClick={this.handleClick4} id="art" style={divStyle}>
                Art finds
              </button>
            </div>
            <div className="faq-part-2">
              <div className="big-image2"></div>
              <div className="faq-box">
                <div className="small-image2"></div>
                <div className="small-image2"></div>
              </div>
              <div className="big-image2"></div>
              <div className="faq-box">
                <div className="small-image2"></div>
                <div className="small-image2"></div>
              </div>
            </div>
          </div>
        ) : null}
        {this.state.showMeThree ? (
          <div>
            <h3 className="title-faq">Discover unique hand-picked items </h3>
            <div className="faq-choice">
              <button onClick={this.handleClick} id="home" style={divStyle}>
                Home improvement ideas
              </button>
              <button onClick={this.handleClick2} id="modern" style={divStyle}>
                Modern farmhouse
              </button>
              <button
                className="active"
                onClick={this.handleClick3}
                id="health"
                style={divStyle}
              >
                Health & wellness
              </button>
              <button onClick={this.handleClick4} id="art" style={divStyle}>
                Art finds
              </button>
            </div>
            <div className="faq-part-3">
              <div className="big-image3"></div>
              <div className="faq-box">
                <div className="small-image3"></div>
                <div className="small-image3"></div>
              </div>
              <div className="big-image3"></div>
              <div className="faq-box">
                <div className="small-image3"></div>
                <div className="small-image3"></div>
              </div>
            </div>
          </div>
        ) : null}
        {this.state.showMeFour ? (
          <div>
            <h3 className="title-faq">Discover unique hand-picked items </h3>
            <div className="faq-choice">
              <button onClick={this.handleClick} id="home" style={divStyle}>
                Home improvement ideas
              </button>
              <button onClick={this.handleClick2} id="modern" style={divStyle}>
                Modern farmhouse
              </button>
              <button onClick={this.handleClick3} id="health" style={divStyle}>
                Health & wellness
              </button>
              <button
                className="active"
                onClick={this.handleClick4}
                id="art"
                style={divStyle}
              >
                Art finds
              </button>
            </div>
            <div className="faq-part-4">
              <div className="big-image4"></div>
              <div className="faq-box">
                <div className="small-image4"></div>
                <div className="small-image4"></div>
              </div>
              <div className="big-image4"></div>
              <div className="faq-box">
                <div className="small-image4"></div>
                <div className="small-image4"></div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default SixthDiv;
