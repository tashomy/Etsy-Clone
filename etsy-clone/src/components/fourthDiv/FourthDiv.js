import React from "react";
import { Link } from "react-router-dom";

const FourthDiv = () => {
  return (
    <div className="layout-container">
      <div className="layout-group">
        <div className="smaller">
          <Link>
            <p>USD 76.00 (30%)</p>
          </Link>
        </div>
        <div className="bigger">
          <Link>
            <p>USD 47.00 (70%)</p>
          </Link>
        </div>
      </div>
      <div className="layout-group">
        <div className="bigger">
          <Link>
            <p>USD 47.00 (70%)</p>
          </Link>
        </div>
        <div className="smaller">
          <Link>
            <p>USD 76.00 (30%)</p>
          </Link>
        </div>
      </div>

      <div className="layout-group">
        <div className="smaller">
          <Link>
            <p>USD 76.00 (30%)</p>
          </Link>
        </div>
        <div className="bigger">
          <Link>
            <p>USD 47.00 (70%)</p>
          </Link>
        </div>
      </div>
      <div className="layout-group">
        <div className="bigger">
          <Link>
            <p>USD 47.00 (70%)</p>
          </Link>
        </div>
        <div className="smaller">
          <Link>
            <p>USD 76.00 (30%)</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FourthDiv;
