import React from "react";
import { Link } from "react-router-dom";

const ThirdDiv = () => {
  return (
    <div className="third-container">
      <h1 className="title">Our Picks For You</h1>

      <div className="circle-items not">
        <ul className="circle-list">
          <li>
            <img src="https://cdn.collegeraptor.com/wp/wp-content/uploads/2019/04/09210013/eco-friendly-Hydro-Cell-water-bottle-300x300.jpg" />
            <Link>Water Bottles</Link>
          </li>
          <li>
            <img src="https://www.mantragoldcoatings.com/wp-content/uploads/1-227-300x300.jpg" />
            <Link>Pillows</Link>
          </li>
          <li>
            <img src="https://www.bigbasket.com/media/uploads/p/m/40210748_1-cherishx-premium-blue-birthday-balloon-decoration-items.jpg" />
            <Link>Birthday Decor</Link>
          </li>
          <li>
            <img src="https://carolinahoneybees.com/wp-content/uploads/2019/06/beeswax-craft-300x300.jpg" />
            <Link>Kitchen Supplies</Link>
          </li>
          <li>
            <img src="https://www.onyalife.com/wp-content/uploads/2017-05-20_185246-300x300.png" />
            <Link>Organizers</Link>
          </li>
          <li>
            <img src="https://fitsmallbusiness.com/wp-content/uploads/2018/06/word-image-33-e1528128272764-300x300.jpeg" />
            <Link>Pots</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ThirdDiv;
