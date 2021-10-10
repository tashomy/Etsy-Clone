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

    this.setState({
      showMeOne: true,
      showMeTwo: false,
      showMeThree: false,
      showMeFour: false,
    });
  }
  handleClick2(event) {
    let id = event.target.id;
    console.log(id);

    this.setState({
      showMeOne: false,
      showMeTwo: true,
      showMeThree: false,
      showMeFour: false,
    });
  }
  handleClick3(event) {
    let id = event.target.id;
    console.log(id);

    this.setState({
      showMeOne: false,
      showMeTwo: false,
      showMeThree: true,
      showMeFour: false,
    });
  }
  handleClick4(event) {
    let id = event.target.id;
    console.log(id);

    this.setState({
      showMeOne: false,
      showMeTwo: false,
      showMeThree: false,
      showMeFour: true,
    });
  }

  render() {
    let faqItems = this.state.faqItems;
    console.log(faqItems);

    const divStyle = {
      marginTop: "50px",
    };

    return (
      <div className="faq">
        <div className="faq-choice">
          <button onClick={this.handleClick} id="Delivery" style={divStyle}>
            Home improvement ideas
          </button>
          <button onClick={this.handleClick2} id="Return" style={divStyle}>
            Modern farmhouse
          </button>
          <button onClick={this.handleClick3} id="Where" style={divStyle}>
            Health & wellness
          </button>
          <button onClick={this.handleClick4} id="Tech" style={divStyle}>
            Art finds
          </button>
        </div>

        {this.state.showMeOne ? (
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
        ) : null}
        {this.state.showMeTwo ? (
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
        ) : null}
        {this.state.showMeThree ? (
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
        ) : null}
        {this.state.showMeFour ? (
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
        ) : null}
      </div>
    );
  }
}

export default SixthDiv;
