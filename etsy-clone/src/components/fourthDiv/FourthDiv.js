import React from "react";
import { Link } from "react-router-dom";

const FourthDiv = () => {
  return (
    <div className="layout-container">
      <div className="layout-group">
        <div className="smaller" id="smaller1">
          <Link>
            <p>USD 76.00 (30%)</p>
          </Link>
        </div>
        <div className="bigger" id="bigger1">
          <Link>
            <p>USD 47.00 (70%)</p>
          </Link>
        </div>
      </div>
      <div className="layout-group">
        <div className="bigger" id="bigger2">
          <Link>
            <p>USD 47.00 (70%)</p>
          </Link>
        </div>
        <div className="smaller" id="smaller2">
          <Link>
            <p>USD 76.00 (30%)</p>
          </Link>
        </div>
      </div>

      <div className="layout-group">
        <div className="smaller" id="smaller3">
          <Link>
            <p>USD 76.00 (30%)</p>
          </Link>
        </div>
        <div className="bigger" id="bigger3">
          <Link>
            <p>USD 47.00 (70%)</p>
          </Link>
        </div>
      </div>
      <div className="layout-group">
        <div className="bigger" id="bigger4">
          <Link>
            <p>USD 47.00 (70%)</p>
          </Link>
        </div>
        <div className="smaller" id="smaller4">
          <Link>
            <p>USD 76.00 (30%)</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FourthDiv;
