import React from "react";
import { Link } from "react-router-dom";

const SeventhDiv = () => {
  return (
    <div className="seventh-container">
      <h2 className="seventh-title">
        Shop our selections{" "}
        <span className="seventh-smaller">
          Items hand-picked by our editors
        </span>
      </h2>
      <div className="cards-seven">
        <div className="card-seven">
          <Link>
            <img src="https://i.etsystatic.com/12939717/r/il/6311bd/1041325879/il_340x270.1041325879_8urb.jpg"></img>
            <p>Anniversary gifts</p>
          </Link>
        </div>
        <div className="card-seven">
          <Link>
            <img src="https://i.etsystatic.com/22667619/r/il/b0daa8/2263241422/il_680x540.2263241422_bhio.jpg"></img>
            <p>Gifts for him</p>
          </Link>
        </div>
        <div className="card-seven">
          <Link>
            <img src="https://i.etsystatic.com/6781871/r/il/e6682e/1075612216/il_680x540.1075612216_69tg.jpg"></img>
            <p>Gifts for her</p>
          </Link>
        </div>
        <div className="card-seven">
          <Link>
            <img src="https://i.etsystatic.com/6700746/r/il/a972c2/3358510294/il_680x540.3358510294_ku53.jpg"></img>
            <p>Personalized gift ideas</p>
          </Link>
        </div>
        <div className="card-seven">
          <Link>
            <img src="https://i.etsystatic.com/6260430/r/il/b21cf6/1013864700/il_680x540.1013864700_3y6n.jpg"></img>
            <p>Wedding gifts</p>
          </Link>
        </div>
        <div className="card-seven">
          <Link>
            <img src="https://i.etsystatic.com/22099711/r/il/e1766e/3406870747/il_680x540.3406870747_lb3w.jpg"></img>
            <p>Housewarming gifts</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SeventhDiv;
