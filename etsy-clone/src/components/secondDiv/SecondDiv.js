import React from "react";
import { Link } from "react-router-dom";

const SecondDiv = () => {
  return (
    <div id="second-div">
      <h3>Recently viewed & more</h3>
      <div className="boxes">
        <Link>
          <div className="box">
            <img src="https://static.wixstatic.com/media/7b08a8_2eaabd28a81e4c28ab59e05ddfac9aad~mv2.jpg/v1/fill/w_340,h_270,al_c,q_80,usm_0.66_1.00_0.01/Loft_heirloom_quality_furniture.webp"></img>
            <p>USD 66.0 (70% OFF)</p>
          </div>
        </Link>
        <Link>
          <div className="box">
            <img src="https://2.bp.blogspot.com/-0OcmuQkUe64/XKszdvXaH2I/AAAAAAAAJSU/ZTbx4oHin_omzDU3ngiRGaQBQT63uD5IgCLcBGAs/s640/korean%2Bfashion%2Bhair%2Btrend%2Bpearl%2Bclip.jpg"></img>
            <p>USD 66.0 (40% OFF)</p>
          </div>
        </Link>
        <Link>
          <div className="box">
            <img src="https://i.pinimg.com/474x/87/e4/2f/87e42ff295ed12e58a735161892d34e3.jpg"></img>
            <p>USD 86.0 (20% OFF)</p>
          </div>
        </Link>
        <Link>
          <div className="box">
            <img src="https://i.pinimg.com/474x/4d/d4/6e/4dd46e8fc7a1ceb6905d503d264969ba.jpg"></img>
            <p>USD 43.0 (70% OFF)</p>
          </div>
        </Link>
        <Link>
          <div className="box">
            <img src="https://i.pinimg.com/474x/aa/b5/d1/aab5d17a2925bf74c363619a78017bfe.jpg"></img>
            <p>USD 76.0 (50% OFF)</p>
          </div>
        </Link>
      </div>
      <div className="boxes">
        <Link>
          <div className="box">
            <img src="https://i.pinimg.com/474x/5e/dc/18/5edc1802454606f35e7573827e0167ba.jpg"></img>
            <p>USD 66.0 (70% OFF)</p>
          </div>
        </Link>
        <Link>
          <div className="box">
            <img src="https://lh3.googleusercontent.com/proxy/9v1e8iGryEXsokwvUib4s7H0MEbtgvHSbqR-nUzJOaG4s3rb8prrAU2YYbA-D0cNX8LOP4QAukGjWgzi4oM8FV3HUnVU99z2sD-w6Phcpg"></img>
            <p>USD 66.0 (40% OFF)</p>
          </div>
        </Link>
        <Link>
          <div className="box">
            <img src="https://images.squarespace-cdn.com/content/v1/563789b6e4b03c7ded1a9ff2/1589221291868-JT02DLLGYJJAAWQY9CWL/spiral+rock+1.jpg"></img>
            <p>USD 86.0 (20% OFF)</p>
          </div>
        </Link>
        <Link>
          <div className="box">
            <img src="https://i.pinimg.com/564x/0c/64/f5/0c64f58a0a091ffafacb883e2c734daf.jpg"></img>
            <p>USD 43.0 (70% OFF)</p>
          </div>
        </Link>
        <Link>
          <div className="box">
            <img src="https://qph.fs.quoracdn.net/main-qimg-5ddc6ba8f1047767ade6fdc80f2de7da"></img>
            <p>USD 76.0 (50% OFF)</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SecondDiv;
