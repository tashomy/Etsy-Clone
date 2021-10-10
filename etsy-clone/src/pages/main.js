import React, { Component } from "react";
import { First } from "react-bootstrap/esm/PageItem";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import FifthDiv from "../components/fifthDiv/FifthDiv";
import FirstDiv from "../components/firstDiv/FirstDiv";
import Footer from "../components/footer/Footer";
import FourthDiv from "../components/fourthDiv/FourthDiv";
import SecondDiv from "../components/secondDiv/SecondDiv";
import SeventhDiv from "../components/seventhDiv/SeventhDiv";
import ThirdDiv from "../components/thirdDiv/ThirdDiv";
import SixthDiv from "./faq";
class Page extends Component {
  constructor(props) {
    super(props);
    this.state = { loader: true };
  }

  componentDidMount() {
    let self = this;
    self.setState({ loader: false });
  }
  render() {
    return (
      <div>
        <FirstDiv />
        <SecondDiv />
        <ThirdDiv />
        <FourthDiv />
        <FifthDiv />
        <SixthDiv />
        <SeventhDiv />
        <About />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Page;
