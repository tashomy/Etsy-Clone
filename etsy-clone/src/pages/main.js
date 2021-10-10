import React, { Component } from "react";
import { First } from "react-bootstrap/esm/PageItem";
import FifthDiv from "../components/fifthDiv/FifthDiv";
import FirstDiv from "../components/firstDiv/FirstDiv";
import FourthDiv from "../components/fourthDiv/FourthDiv";
import SecondDiv from "../components/secondDiv/SecondDiv";
import ThirdDiv from "../components/thirdDiv/ThirdDiv";
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
      </div>
    );
  }
}

export default Page;
