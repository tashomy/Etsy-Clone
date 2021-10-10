import React from "react";
import { Link } from "react-router-dom";

const FirstDiv = () => {
  return (
    <div className="container-first">
      <div className="circle-top">
        <h1 className="title">
          Find things you'll love. Support independent sellers. Only on Etsy.
        </h1>
      </div>
      <div className="circle-items">
        <ul className="circle-list">
          <li>
            <img src="https://i.etsystatic.com/25031203/r/il/bf807c/2514352834/il_300x300.2514352834_t45s.jpg" />
            <Link>Face Masks</Link>
          </li>
          <li>
            <img src="https://i.etsystatic.com/17095327/r/il/879610/2016510847/il_300x300.2016510847_kn0j.jpg" />
            <Link>Wall Decor</Link>
          </li>
          <li>
            <img src="https://i.etsystatic.com/8331303/r/il/dec4ed/2753449716/il_300x300.2753449716_i5j3.jpg" />
            <Link>Gift Ideas</Link>
          </li>
          <li>
            <img src="https://i.etsystatic.com/12418300/r/il/da5710/2446305498/il_300x300.2446305498_opq0.jpg" />
            <Link>Outdoor & Garden</Link>
          </li>
          <li>
            <img src="https://i.etsystatic.com/15246890/r/il/f989cd/3399244981/il_300x300.3399244981_77c2.jpg" />
            <Link>Self Care</Link>
          </li>
          <li>
            <img src="https://i.etsystatic.com/24545218/r/il/fd0cc7/2539137057/il_300x300.2539137057_2nxf.jpg" />
            <Link>On Sale</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FirstDiv;
