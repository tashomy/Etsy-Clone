import React from "react";
import { Link } from "react-router-dom";

const SecondDiv = () => {
  return (
    <div id="second-div">
      Recently viewed & more
      <div className="boxes">
        <Link>
          <div className="box">
            <img src="https://i.etsystatic.com/27456806/r/il/9101fc/3179384914/il_340x270.3179384914_7r34.jpg"></img>
            <p>USD 66.0 (70% OFF)</p>
          </div>
        </Link>
        <Link>
          <div className="box">
            <img src="https://i.etsystatic.com/24559708/r/il/d3d3fe/3277464820/il_340x270.3277464820_3tzn.jpg"></img>
            <p>USD 66.0 (40% OFF)</p>
          </div>
        </Link>
        <Link>
          <div className="box">
            <img src="https://i.etsystatic.com/17914529/r/il/dc0e31/3013947658/il_340x270.3013947658_egz9.jpg"></img>
            <p>USD 86.0 (20% OFF)</p>
          </div>
        </Link>
        <Link>
          <div className="box">
            <img src="https://i.etsystatic.com/24559708/r/il/709fc2/2715473104/il_340x270.2715473104_9gv9.jpg"></img>
            <p>USD 43.0 (70% OFF)</p>
          </div>
        </Link>
        <Link>
          <div className="box">
            <img src="https://i.etsystatic.com/24559708/r/il/30eef3/3279797886/il_340x270.3279797886_ioer.jpg"></img>
            <p>USD 76.0 (50% OFF)</p>
          </div>
        </Link>
      </div>
      <div className="boxes">
        <Link>
          <div className="box">
            <img src="https://i.etsystatic.com/27456806/r/il/9101fc/3179384914/il_340x270.3179384914_7r34.jpg"></img>
            <p>USD 66.0 (70% OFF)</p>
          </div>
        </Link>
        <Link>
          <div className="box">
            <img src="https://i.etsystatic.com/24559708/r/il/d3d3fe/3277464820/il_340x270.3277464820_3tzn.jpg"></img>
            <p>USD 66.0 (40% OFF)</p>
          </div>
        </Link>
        <Link>
          <div className="box">
            <img src="https://i.etsystatic.com/17914529/r/il/dc0e31/3013947658/il_340x270.3013947658_egz9.jpg"></img>
            <p>USD 86.0 (20% OFF)</p>
          </div>
        </Link>
        <Link>
          <div className="box">
            <img src="https://i.etsystatic.com/24559708/r/il/709fc2/2715473104/il_340x270.2715473104_9gv9.jpg"></img>
            <p>USD 43.0 (70% OFF)</p>
          </div>
        </Link>
        <Link>
          <div className="box">
            <img src="https://i.etsystatic.com/24559708/r/il/30eef3/3279797886/il_340x270.3279797886_ioer.jpg"></img>
            <p>USD 76.0 (50% OFF)</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SecondDiv;
