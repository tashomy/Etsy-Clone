import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

import { ImEarth } from "react-icons/im";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="upper-footer">
        <div className="shop-footer">
          <h3 className="footer-title">Shop</h3>
          <ul>
            <li>
              <Link>Gift Cards</Link>
            </li>
            <li>
              <Link>Sitemap</Link>
            </li>
            <li>
              <Link>Etsy blog</Link>
            </li>
          </ul>
        </div>
        <div className="sell-footer">
          <h3 className="footer-title">Sell</h3>
          <ul>
            <li>
              <Link>Sell on Etsy</Link>
            </li>
            <li>
              <Link>Teams</Link>
            </li>
            <li>
              <Link>Forums</Link>
            </li>
            <li>
              <Link>Affiliates</Link>
            </li>
          </ul>
        </div>

        <div className="about-footer">
          <h3 className="footer-title">About</h3>
          <ul>
            <li>
              <Link>Etsy, Inc.</Link>
            </li>
            <li>
              <Link>Policies</Link>
            </li>
            <li>
              <Link>Investors</Link>
            </li>
            <li>
              <Link>Careers</Link>
            </li>
            <li>
              <Link>Press</Link>
            </li>
            <li>
              <Link>Impact</Link>
            </li>
            <li>
              <Link>Legal imprint</Link>
            </li>
          </ul>
        </div>
        <div className="help-footer">
          <div className="help-part">
            <h3 className="footer-title">Help</h3>
            <ul>
              <li>
                <Link>Help Centre</Link>
              </li>
              <li>
                <Link>Trust and safety</Link>
              </li>
              <li>
                <Link>Privacy settings</Link>
              </li>
            </ul>
          </div>
          <div className="footer-icons">
            <Link
              to={{
                pathname:
                  "https://play.google.com/store/apps/details?id=com.etsy.android",
              }}
              target="_blank"
            >
              <span>Download the Etsy app</span>
            </Link>
            <div>
              <Link
                to={{
                  pathname: "https://instagram.com",
                }}
                target="_blank"
              >
                <FaInstagram size={30} style={{ fill: "white" }} />
              </Link>
              <Link
                to={{
                  pathname: "https://facebook.com",
                }}
                target="_blank"
              >
                <FaFacebook
                  size={30}
                  style={{ fill: "white", marginLeft: "10px" }}
                />
              </Link>
              <Link
                to={{
                  pathname: "https://pinterest.com",
                }}
                target="_blank"
              >
                <FaPinterest
                  size={30}
                  style={{ fill: "white", marginLeft: "10px" }}
                />
              </Link>
              <Link
                to={{
                  pathname: "https://twitter.com",
                }}
                target="_blank"
              >
                <FaTwitter
                  size={30}
                  style={{ fill: "white", marginLeft: "10px" }}
                />
              </Link>
              <Link
                to={{
                  pathname: "https://youtube.com",
                }}
                target="_blank"
              >
                <FaYoutube
                  size={30}
                  style={{ fill: "white", marginLeft: "10px" }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="lower-footer">
        <div className="left-lower-footer">
          <span>
            <ImEarth size={15} style={{ fill: "#fff" }} /> Montenegro | English
            (UK) | $USD
          </span>
        </div>
        <div className="right-lower-footer">
          <span>&copy; 2021 Etsy, Inc.</span>
          <ul>
            <li>
              <Link>Terms of use</Link>
            </li>
            <li>
              <Link>Privacy</Link>
            </li>
            <li>
              <Link>Interest-based ads</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
