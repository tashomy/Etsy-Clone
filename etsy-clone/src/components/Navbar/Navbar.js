import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosBasket } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isShown, setIsShown] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  const [isShown4, setIsShown4] = useState(false);
  const [isShown5, setIsShown5] = useState(false);
  const [isShown6, setIsShown6] = useState(false);
  const [isShown7, setIsShown7] = useState(false);

  const addBackg = () => {
    const search = document.getElementById("lupica");
    console.log(search);
    if (!search.classList.contains("dark")) {
      search.classList.add("dark");
    }
    setTimeout(function () {
      search.classList.remove("dark");
    }, 5000);
  };

  const showMe = () => {
    setIsShown(true);
  };

  const hideMe = () => {
    setIsShown(false);
  };

  return (
    <div>
      <div id="header">
        <div id="top-header">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="40"
              viewBox="72.424 42.569 339.041 160.792"
            >
              <path
                d="M108.783 100.639V55.192c0-1.684.168-2.694 3.031-2.694h38.545c6.734 0 10.437 5.724 13.131 16.496l2.188 8.586h6.564c1.177-24.406 2.186-35.011 2.186-35.011s-16.495 1.851-26.258 1.851H98.854l-26.431-.842v7.07l8.923 1.683c6.228 1.179 7.74 2.524 8.249 8.249 0 0 .506 16.832.506 44.607 0 27.771-.506 44.437-.506 44.437 0 5.049-2.021 6.9-8.249 8.082l-8.923 1.684v7.066l26.431-.84h44.101c9.931 0 32.991.84 32.991.84.503-6.061 3.872-33.498 4.377-36.524h-6.228l-6.565 14.981c-5.219 11.78-12.792 12.623-21.21 12.623h-25.082c-8.417 0-12.457-3.367-12.457-10.604v-38.379s18.347 0 24.742.506c4.714.338 7.574 1.684 9.091 8.248l2.021 8.753h7.234l-.503-22.053 1.009-22.217h-7.236l-2.355 9.762c-1.517 6.396-2.525 7.577-9.091 8.248-7.405.844-24.913.675-24.913.675v.167h.003v-.003zM208.599 59.906c-2.357 10.436-4.714 18.515-12.962 23.902-5.049 3.365-10.1 4.542-12.117 4.711v6.396h14.98v51.675c0 14.478 9.596 21.549 22.387 21.549 9.932 0 20.198-4.208 23.734-12.963l-3.536-4.545c-1.684 2.863-7.067 7.07-13.801 7.07-7.405 0-11.445-5.051-11.445-17.841V94.245l24.914 1.853 1.345-11.449-26.258 1.011V60.073l-7.241-.167zM261.791 139.39l-6.396.168c.336 3.702.506 8.417.506 12.793 0 4.545-.168 8.753-.506 10.772 0 0 12.793 4.709 25.754 4.709 17.506 0 31.478-8.416 31.478-24.912 0-28.275-42.418-24.066-42.418-43.09 0-7.91 7.069-10.941 14.812-10.941 6.06 0 11.109 2.188 12.119 5.389l4.209 12.624 6.229-.336c.506-6.734.841-14.477 1.852-20.704-5.388-2.357-16.667-3.706-23.731-3.706-16.5 0-29.795 7.239-29.795 23.399 0 28.109 41.406 22.386 41.406 43.093 0 7.403-4.547 12.622-14.812 12.622-9.424 0-14.139-4.88-15.987-9.764l-4.72-12.116zM363.244 158.836c-9.745 27.221-21.674 34.273-32.426 34.273-4.539 0-6.721-2.018-7.396-5.205l-2.52-13.109-7.058.336c-1.344 7.73-2.688 16.302-4.534 23.357 4.201 3.188 11.254 4.872 16.801 4.872 11.596 0 29.236-1.515 45.363-39.821l27.053-63.845c2.186-5.21 3.023-5.714 9.408-8.236l3.529-1.341v-5.881l-15.963.84-17.137-.84v5.881l4.366 1.341c4.367 1.347 6.387 3.026 6.387 6.051 0 1.511-.506 3.024-1.348 5.374-2.52 6.389-18.146 44.359-22.342 52.426l4.195-1.515c-7.394-18.313-18.646-48.895-20.328-54.099-.336-1.009-.504-1.849-.504-2.693 0-2.687 1.848-4.872 5.881-5.711l5.545-1.173v-5.881l-23.021.84-18.313-.84v5.881l3.025 1.007c4.2 1.344 5.209 2.521 7.729 8.401 13.941 31.925 20.498 49.396 29.399 72.249l4.209-12.939z"
                fill="#f27224"
              />
            </svg>
          </Link>
          <div className="nav-form-control">
            <form>
              <input
                onClick={addBackg}
                type="text"
                placeholder="Enter your email"
                id="nav-input"
              ></input>
              <Link id="lupica">
                <AiOutlineSearch
                  size={20}
                  style={{ padding: "none", margin: "none" }}
                />
              </Link>
            </form>
          </div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="btn btn-primary">Sign in</span>
          </Link>
          <Link to="/">
            <IoIosBasket
              className="basket"
              size={30}
              style={{ fill: "black" }}
            ></IoIosBasket>
          </Link>
        </div>
        <div id="bottom-header">
          <ul className="nav">
            <li id="jewellery">
              <Link
                to="/"
                onMouseEnter={() => {
                  setTimeout(() => {
                    setIsShown(true);
                  }, 200);
                }}
                onMouseLeave={() => {
                  setTimeout(() => {
                    setIsShown(false);
                  }, 200);
                }}
              >
                Jewellery & Accessories
              </Link>
            </li>
            <li id="clothing">
              <Link
                onMouseEnter={() => {
                  setTimeout(() => {
                    setIsShown2(true);
                  }, 200);
                }}
                onMouseLeave={() => {
                  setTimeout(() => {
                    setIsShown2(false);
                  }, 200);
                }}
              >
                Clothing & Shoes
              </Link>
            </li>
            <li id="home-nav">
              <Link
                onMouseEnter={() => {
                  setTimeout(() => {
                    setIsShown3(true);
                  }, 200);
                }}
                onMouseLeave={() => {
                  setTimeout(() => {
                    setIsShown3(false);
                  }, 200);
                }}
              >
                Home & Living
              </Link>
            </li>
            <li id="wedding">
              <Link
                onMouseEnter={() => {
                  setTimeout(() => {
                    setIsShown4(true);
                  }, 200);
                }}
                onMouseLeave={() => {
                  setTimeout(() => {
                    setIsShown4(false);
                  }, 200);
                }}
              >
                Wedding & Party
              </Link>
            </li>
            <li id="toys">
              <Link
                onMouseEnter={() => {
                  setTimeout(() => {
                    setIsShown5(true);
                  }, 200);
                }}
                onMouseLeave={() => {
                  setTimeout(() => {
                    setIsShown5(false);
                  }, 200);
                }}
              >
                Toys & Entertainment
              </Link>
            </li>
            <li id="art-nav">
              <Link
                onMouseEnter={() => {
                  setTimeout(() => {
                    setIsShown6(true);
                  }, 200);
                }}
                onMouseLeave={() => {
                  setTimeout(() => {
                    setIsShown6(false);
                  }, 200);
                }}
              >
                Art & Collectibles
              </Link>
            </li>
            <li id="craft">
              <Link
                onMouseEnter={() => {
                  setTimeout(() => {
                    setIsShown7(true);
                  }, 200);
                }}
                onMouseLeave={() => {
                  setTimeout(() => {
                    setIsShown7(false);
                  }, 200);
                }}
              >
                Craft Supplies & Tools
              </Link>
            </li>
            <li id="vintage">
              <Link>Vintage</Link>
            </li>
          </ul>
        </div>
      </div>
      {isShown && (
        <div
          onMouseEnter={() => {
            setTimeout(() => {
              setIsShown(true);
            }, 200);
          }}
          onMouseLeave={() => {
            setTimeout(() => {
              setIsShown(false);
            }, 200);
          }}
          className="nav-hover"
          id="jewellery-hover"
        >
          <div className="hover-left">
            <Link>
              <h3>All Jewellery & Accessories</h3>
            </Link>
            <ul>
              <li
                onMouseEnter={() => {
                  const item = document.getElementById("active-hover1");
                  const right = document.getElementById("hover-right1");
                  if (!item.classList.contains("hover-active")) {
                    item.classList.add("hover-active");
                  }
                  setTimeout(function () {
                    right.style.display = "flex";
                  }, 500);
                }}
                onMouseLeave={() => {
                  const item = document.getElementById("active-hover1");
                  const right = document.getElementById("hover-right1");
                  if (item.classList.contains("hover-active")) {
                    item.classList.remove("hover-active");
                  }
                  setTimeout(function () {
                    right.style.display = "none";
                  }, 500);
                }}
              >
                <Link id="active-hover1" className="hover-active">
                  Accessories
                </Link>
              </li>
              <li
                onMouseEnter={() => {
                  const item = document.getElementById("active-hover2");
                  const right = document.getElementById("hover-right2");
                  const first = document.getElementById("active-hover1");
                  if (first.classList.contains("hover-active")) {
                    first.classList.remove("hover-active");
                    document.getElementById("hover-right1").style.display =
                      "none";
                  }
                  if (!item.classList.contains("hover-active")) {
                    item.classList.add("hover-active");
                  }
                  setTimeout(function () {
                    right.style.display = "flex";
                  }, 500);
                }}
                onMouseLeave={() => {
                  const item = document.getElementById("active-hover2");
                  const right = document.getElementById("hover-right2");
                  if (item.classList.contains("hover-active")) {
                    item.classList.remove("hover-active");
                  }
                  setTimeout(function () {
                    right.style.display = "none";
                  }, 500);
                }}
              >
                <Link id="active-hover2">Bags & Purses</Link>
              </li>
              <li
                onMouseEnter={() => {
                  const item = document.getElementById("active-hover3");
                  const right = document.getElementById("hover-right3");
                  const first = document.getElementById("active-hover1");
                  if (first.classList.contains("hover-active")) {
                    first.classList.remove("hover-active");
                    document.getElementById("hover-right1").style.display =
                      "none";
                  }
                  if (!item.classList.contains("hover-active")) {
                    item.classList.add("hover-active");
                  }
                  setTimeout(function () {
                    right.style.display = "flex";
                  }, 500);
                }}
                onMouseLeave={() => {
                  const item = document.getElementById("active-hover3");
                  const right = document.getElementById("hover-right3");

                  if (item.classList.contains("hover-active")) {
                    item.classList.remove("hover-active");
                  }
                  setTimeout(function () {
                    right.style.display = "none";
                  }, 500);
                }}
              >
                <Link id="active-hover3">Necklaces</Link>
              </li>
              <li
                onMouseEnter={() => {
                  const item = document.getElementById("active-hover4");
                  const right = document.getElementById("hover-right4");
                  const first = document.getElementById("active-hover1");
                  if (first.classList.contains("hover-active")) {
                    first.classList.remove("hover-active");
                    document.getElementById("hover-right1").style.display =
                      "none";
                  }
                  if (!item.classList.contains("hover-active")) {
                    item.classList.add("hover-active");
                  }
                  setTimeout(function () {
                    right.style.display = "flex";
                  }, 500);
                }}
                onMouseLeave={() => {
                  const item = document.getElementById("active-hover4");
                  const right = document.getElementById("hover-right4");

                  if (item.classList.contains("hover-active")) {
                    item.classList.remove("hover-active");
                  }
                  setTimeout(function () {
                    right.style.display = "none";
                  }, 500);
                }}
              >
                <Link id="active-hover4">Rings</Link>
              </li>
              <li
                onMouseEnter={() => {
                  const item = document.getElementById("active-hover5");
                  const right = document.getElementById("hover-right5");
                  const first = document.getElementById("active-hover1");
                  if (first.classList.contains("hover-active")) {
                    first.classList.remove("hover-active");
                    document.getElementById("hover-right1").style.display =
                      "none";
                  }
                  if (!item.classList.contains("hover-active")) {
                    item.classList.add("hover-active");
                  }
                  setTimeout(function () {
                    right.style.display = "flex";
                  }, 500);
                }}
                onMouseLeave={() => {
                  const item = document.getElementById("active-hover5");
                  const right = document.getElementById("hover-right5");
                  if (item.classList.contains("hover-active")) {
                    item.classList.remove("hover-active");
                  }
                  setTimeout(function () {
                    right.style.display = "none";
                  }, 500);
                }}
              >
                <Link id="active-hover5">Earrings</Link>
              </li>
              <li
                onMouseEnter={() => {
                  const item = document.getElementById("active-hover6");
                  const right = document.getElementById("hover-right6");
                  const first = document.getElementById("active-hover1");
                  if (first.classList.contains("hover-active")) {
                    first.classList.remove("hover-active");
                    document.getElementById("hover-right1").style.display =
                      "none";
                  }
                  if (!item.classList.contains("hover-active")) {
                    item.classList.add("hover-active");
                  }
                  setTimeout(function () {
                    right.style.display = "flex";
                  }, 500);
                }}
                onMouseLeave={() => {
                  const item = document.getElementById("active-hover6");
                  const right = document.getElementById("hover-right6");

                  if (item.classList.contains("hover-active")) {
                    item.classList.remove("hover-active");
                  }
                  setTimeout(function () {
                    right.style.display = "none";
                  }, 500);
                }}
              >
                <Link id="active-hover6">Bracelets</Link>
              </li>
              <li
                onMouseEnter={() => {
                  const item = document.getElementById("active-hover7");
                  const right = document.getElementById("hover-right7");
                  const first = document.getElementById("active-hover1");
                  if (first.classList.contains("hover-active")) {
                    first.classList.remove("hover-active");
                    document.getElementById("hover-right1").style.display =
                      "none";
                  }
                  if (!item.classList.contains("hover-active")) {
                    item.classList.add("hover-active");
                  }
                  setTimeout(function () {
                    right.style.display = "flex";
                  }, 500);
                }}
                onMouseLeave={() => {
                  const item = document.getElementById("active-hover7");
                  const right = document.getElementById("hover-right7");

                  if (item.classList.contains("hover-active")) {
                    item.classList.remove("hover-active");
                  }
                  setTimeout(function () {
                    right.style.display = "none";
                  }, 500);
                }}
              >
                <Link id="active-hover7">Body Jewellery</Link>
              </li>
            </ul>
            <Link>
              <h3>All Jewellery</h3>
            </Link>
          </div>
          <div
            className="hover-right"
            id="hover-right1"
            onMouseEnter={() => {
              const item = document.getElementById("active-hover1");
              const right = document.getElementById("hover-right1");
              if (!item.classList.contains("hover-active")) {
                item.classList.add("hover-active");
              }
              setTimeout(function () {
                right.style.display = "flex";
              }, 500);
            }}
            onMouseLeave={() => {
              const item = document.getElementById("active-hover1");
              const right = document.getElementById("hover-right1");
              if (item.classList.contains("hover-active")) {
                item.classList.remove("hover-active");
              }
              setTimeout(function () {
                right.style.display = "none";
              }, 500);
            }}
          >
            <div className="right-left">
              <Link>
                <h3>Hats & Caps</h3>
              </Link>
              <Link>Beanies & Winter Hats</Link>
              <Link>
                <h3>Hair Accessories</h3>
              </Link>
              <Link>Headbands</Link>
              <Link>Fascinators & Mini Hats</Link>
              <Link>Wreaths & Tiaras</Link>
              <Link>
                <h3>Sunglasses & Eyewear</h3>
              </Link>
            </div>
            <div className="right-right">
              <Link>
                <h3>Scarves & Wraps</h3>
              </Link>
              <Link>
                <h3>Belts & Braces</h3>
              </Link>
              <Link>
                <h3>Keychains & Lanyards</h3>
              </Link>
              <Link>
                <h3>Gloves & Mittens</h3>
              </Link>
              <Link>
                <h3>Umbrellas & Rain Accessories</h3>
              </Link>
              <Link>
                <h4>All Accessories</h4>
              </Link>
            </div>
          </div>
          <div
            className="hover-right"
            id="hover-right2"
            style={{ display: "none" }}
            onMouseEnter={() => {
              const item = document.getElementById("active-hover2");
              const right = document.getElementById("hover-right2");
              if (!item.classList.contains("hover-active")) {
                item.classList.add("hover-active");
              }
              setTimeout(function () {
                right.style.display = "flex";
              }, 500);
            }}
            onMouseLeave={() => {
              const item = document.getElementById("active-hover2");
              const right = document.getElementById("hover-right2");
              if (item.classList.contains("hover-active")) {
                item.classList.remove("hover-active");
              }
              setTimeout(function () {
                right.style.display = "none";
              }, 500);
            }}
          >
            <div className="right-left">
              <Link>
                <h3>Backpacks</h3>
              </Link>

              <Link>
                <h3>Handbags</h3>
              </Link>
              <Link>Clutches & Evening Bags</Link>
              <Link>Shoulder Bags</Link>

              <Link>
                <h3>Nappy Bags</h3>
              </Link>
            </div>
            <div className="right-right">
              <Link>
                <h3>Luggage & Duffel Bags</h3>
              </Link>
              <Link>
                <h3>Phone Cases</h3>
              </Link>
              <Link>
                <h4>All Bags & Purses</h4>
              </Link>
            </div>
          </div>
          <div
            className="hover-right"
            id="hover-right4"
            style={{ display: "none" }}
            onMouseEnter={() => {
              const item = document.getElementById("active-hover4");
              const right = document.getElementById("hover-right4");
              if (!item.classList.contains("hover-active")) {
                item.classList.add("hover-active");
              }
              setTimeout(function () {
                right.style.display = "flex";
              }, 500);
            }}
            onMouseLeave={() => {
              const item = document.getElementById("active-hover4");
              const right = document.getElementById("hover-right4");
              if (item.classList.contains("hover-active")) {
                item.classList.remove("hover-active");
              }
              setTimeout(function () {
                right.style.display = "none";
              }, 500);
            }}
          >
            <div className="right-left">
              <Link>
                <h3>Stackable Rings</h3>
              </Link>
              <Link>
                <h3>Statement Rings</h3>
              </Link>
              <Link>
                <h3>Bands</h3>
              </Link>
              <Link>
                <h3>Signet Rings</h3>
              </Link>
              <Link>
                <h3>Multi-Stone Rings</h3>
              </Link>
              <Link>
                <h3>Solitaire Rings</h3>
              </Link>
              <Link>
                <h3>Midi Rings</h3>
              </Link>
            </div>
            <div className="right-right">
              <Link>
                <h3>Wedding & Engagement</h3>
              </Link>
              <Link>Engagement Rings</Link>
              <Link>Wedding Bands</Link>
              <Link>Promise Rings</Link>
              <Link>Bridal Sets</Link>
              <Link>
                <h4>All Rings</h4>
              </Link>
            </div>
          </div>
          <div
            className="hover-right"
            id="hover-right5"
            style={{ display: "none" }}
            onMouseEnter={() => {
              const item = document.getElementById("active-hover5");
              const right = document.getElementById("hover-right5");
              if (!item.classList.contains("hover-active")) {
                item.classList.add("hover-active");
              }
              setTimeout(function () {
                right.style.display = "flex";
              }, 500);
            }}
            onMouseLeave={() => {
              const item = document.getElementById("active-hover5");
              const right = document.getElementById("hover-right5");
              if (item.classList.contains("hover-active")) {
                item.classList.remove("hover-active");
              }
              setTimeout(function () {
                right.style.display = "none";
              }, 500);
            }}
          >
            <div className="right-left">
              <Link>
                <h3>Dangle & Drop Earrings</h3>
              </Link>
              <Link>
                <h3>Stud Earrings</h3>
              </Link>
              <Link>
                <h3>Hoop Earrings</h3>
              </Link>
              <Link>
                <h3>Chandelier Earrings</h3>
              </Link>
              <Link>
                <h3>Ear Jackets & Climbers</h3>
              </Link>
            </div>
            <div className="right-right">
              <Link>
                <h3>Cluster Earrings</h3>
              </Link>
              <Link>
                <h3>Cuff & Wrap Earrings</h3>
              </Link>
              <Link>
                <h3>Clip-On Earrings</h3>
              </Link>
              <Link>
                <h4>All Earrings</h4>
              </Link>
            </div>
          </div>
          <div
            className="hover-right"
            id="hover-right6"
            style={{ display: "none" }}
            onMouseEnter={() => {
              const item = document.getElementById("active-hover6");
              const right = document.getElementById("hover-right6");
              if (!item.classList.contains("hover-active")) {
                item.classList.add("hover-active");
              }
              setTimeout(function () {
                right.style.display = "flex";
              }, 500);
            }}
            onMouseLeave={() => {
              const item = document.getElementById("active-hover6");
              const right = document.getElementById("hover-right6");
              if (item.classList.contains("hover-active")) {
                item.classList.remove("hover-active");
              }
              setTimeout(function () {
                right.style.display = "none";
              }, 500);
            }}
          >
            <div className="right-left">
              <Link>
                <h3>Beaded Bracelets</h3>
              </Link>
              <Link>
                <h3>Bangles</h3>
              </Link>
              <Link>
                <h3>Charm Bracelets</h3>
              </Link>
              <Link>
                <h3>Woven & Braided Bracelets</h3>
              </Link>
            </div>
            <div className="right-right">
              <Link>
                <h3>Cuff Bracelets</h3>
              </Link>
              <Link>
                <h3>Chain & Link Bracelets</h3>
              </Link>

              <Link>
                <h4>All Bracelets</h4>
              </Link>
            </div>
          </div>
          <div
            className="hover-right"
            id="hover-right7"
            style={{ display: "none" }}
            onMouseEnter={() => {
              const item = document.getElementById("active-hover7");
              const right = document.getElementById("hover-right7");
              if (!item.classList.contains("hover-active")) {
                item.classList.add("hover-active");
              }
              setTimeout(function () {
                right.style.display = "flex";
              }, 500);
            }}
            onMouseLeave={() => {
              const item = document.getElementById("active-hover7");
              const right = document.getElementById("hover-right7");
              if (item.classList.contains("hover-active")) {
                item.classList.remove("hover-active");
              }
              setTimeout(function () {
                right.style.display = "none";
              }, 500);
            }}
          >
            <div className="right-left">
              <Link>
                <h3>Anklets</h3>
              </Link>
              <Link>
                <h3>Hair Jewellery</h3>
              </Link>
              <Link>
                <h3>Nose Rings & Studs</h3>
              </Link>
              <Link>
                <h3>Arm Bands</h3>
              </Link>
              <Link>
                <h3>Nipple Jewellery</h3>
              </Link>
              <Link>
                <h3>Belly Rings</h3>
              </Link>
            </div>
            <div className="right-right">
              <Link>
                <h3>Shoulder Jewellery</h3>
              </Link>
              <Link>
                <h3>Toe Rings</h3>
              </Link>
              <Link>
                <h3>Lip Rings</h3>
              </Link>
              <Link>
                <h4>All Body Jewellery</h4>
              </Link>
            </div>
          </div>
          <div
            className="hover-right"
            id="hover-right3"
            style={{ display: "none" }}
            onMouseEnter={() => {
              const item = document.getElementById("active-hover3");
              const right = document.getElementById("hover-right3");
              if (!item.classList.contains("hover-active")) {
                item.classList.add("hover-active");
              }
              setTimeout(function () {
                right.style.display = "flex";
              }, 500);
            }}
            onMouseLeave={() => {
              const item = document.getElementById("active-hover3");
              const right = document.getElementById("hover-right3");
              if (item.classList.contains("hover-active")) {
                item.classList.remove("hover-active");
              }
              setTimeout(function () {
                right.style.display = "none";
              }, 500);
            }}
          >
            <div className="right-left">
              <Link>
                <h3>Pendants</h3>
              </Link>
              <Link>
                <h3>Chokers</h3>
              </Link>
              <Link>
                <h3>Charm Necklaces</h3>
              </Link>
              <Link>
                <h3>Crystal Necklaces</h3>
              </Link>
              <Link>
                <h3>Monogram & Name Necklaces</h3>
              </Link>
              <Link>
                <h3>Beaded Necklaces</h3>
              </Link>
            </div>
            <div className="right-right">
              <Link>
                <h3>Chains</h3>
              </Link>
              <Link>
                <h3>Bib Necklaces</h3>
              </Link>
              <Link>
                <h3>Tassel Necklaces</h3>
              </Link>
              <Link>
                <h4>All Necklaces</h4>
              </Link>
            </div>
          </div>
        </div>
      )}
      {isShown2 && (
        <div
          onMouseEnter={() => {
            setTimeout(() => {
              setIsShown2(true);
            }, 200);
          }}
          onMouseLeave={() => {
            setTimeout(() => {
              setIsShown2(false);
            }, 200);
          }}
          className="nav-hover"
          id="clothing-hover"
        >
          <div className="hover-left">
            <Link>
              <h3>All Clothing & Shoes</h3>
            </Link>
            <ul>
              <li
                onMouseEnter={() => {
                  const item = document.getElementById("active2-hover1");
                  const right = document.getElementById("hover2-right1");

                  if (!item.classList.contains("hover-active")) {
                    item.classList.add("hover-active");
                  }
                  setTimeout(() => {
                    right.style.display = "flex";
                  }, 500);
                }}
                onMouseLeave={() => {
                  const item = document.getElementById("active2-hover1");
                  const right = document.getElementById("hover2-right1");
                  if (item.classList.contains("hover-active")) {
                    item.classList.remove("hover-active");
                  }
                  setTimeout(() => {
                    right.style.display = "none";
                  }, 500);
                }}
              >
                <Link id="active2-hover1" className="hover-active">
                  Women's
                </Link>
              </li>
              <li
                onMouseEnter={() => {
                  const item = document.getElementById("active2-hover2");
                  const right = document.getElementById("hover2-right2");
                  const first = document.getElementById("active2-hover1");
                  if (first.classList.contains("hover-active")) {
                    first.classList.remove("hover-active");
                    document.getElementById("hover2-right1").style.display =
                      "none";
                  }
                  if (!item.classList.contains("hover-active")) {
                    item.classList.add("hover-active");
                  }
                  setTimeout(() => {
                    right.style.display = "flex";
                  }, 500);
                }}
                onMouseLeave={() => {
                  const item = document.getElementById("active2-hover2");
                  const right = document.getElementById("hover2-right2");
                  if (item.classList.contains("hover-active")) {
                    item.classList.remove("hover-active");
                  }
                  setTimeout(() => {
                    right.style.display = "none";
                  }, 500);
                }}
              >
                <Link id="active2-hover2">Men's</Link>
              </li>
              <li
                onMouseEnter={() => {
                  const item = document.getElementById("active2-hover3");
                  const right = document.getElementById("hover2-right3");
                  const first = document.getElementById("active2-hover1");
                  if (first.classList.contains("hover-active")) {
                    first.classList.remove("hover-active");
                    document.getElementById("hover2-right1").style.display =
                      "none";
                  }
                  if (!item.classList.contains("hover-active")) {
                    item.classList.add("hover-active");
                  }
                  setTimeout(() => {
                    right.style.display = "flex";
                  }, 500);
                }}
                onMouseLeave={() => {
                  const item = document.getElementById("active2-hover3");
                  const right = document.getElementById("hover2-right3");
                  if (item.classList.contains("hover-active")) {
                    item.classList.remove("hover-active");
                  }
                  setTimeout(() => {
                    right.style.display = "none";
                  }, 500);
                }}
              >
                <Link id="active2-hover3">Kids' & Baby</Link>
              </li>
              <li
                onMouseEnter={() => {
                  const item = document.getElementById("active2-hover4");
                  const right = document.getElementById("hover2-right4");
                  const first = document.getElementById("active2-hover1");
                  if (first.classList.contains("hover-active")) {
                    first.classList.remove("hover-active");
                    document.getElementById("hover2-right1").style.display =
                      "none";
                  }
                  if (!item.classList.contains("hover-active")) {
                    item.classList.add("hover-active");
                  }
                  setTimeout(() => {
                    right.style.display = "flex";
                  }, 500);
                }}
                onMouseLeave={() => {
                  const item = document.getElementById("active2-hover4");
                  const right = document.getElementById("hover2-right4");
                  if (item.classList.contains("hover-active")) {
                    item.classList.remove("hover-active");
                  }
                  setTimeout(() => {
                    right.style.display = "none";
                  }, 500);
                }}
              >
                <Link id="active2-hover4">Bags & Purses</Link>
              </li>
            </ul>
          </div>
          <div
            className="hover-right"
            id="hover2-right1"
            onMouseEnter={() => {
              const item = document.getElementById("active2-hover1");
              const right = document.getElementById("hover2-right1");
              const first = document.getElementById("active2-hover1");
              if (first.classList.contains("hover-active")) {
                first.classList.remove("hover-active");
                document.getElementById("hover2-right1").style.display = "none";
              }
              if (!item.classList.contains("hover-active")) {
                item.classList.add("hover-active");
              }
              setTimeout(() => {
                right.style.display = "flex";
              }, 500);
            }}
            onMouseLeave={() => {
              const item = document.getElementById("active2-hover1");
              const right = document.getElementById("hover2-right1");
              if (item.classList.contains("hover-active")) {
                item.classList.remove("hover-active");
              }
              setTimeout(() => {
                right.style.display = "none";
              }, 500);
            }}
          >
            <div className="right-left">
              <Link>
                <h3>Women's Clothing</h3>
              </Link>
              <Link>Dresses</Link>
              <Link>Tops & Tees</Link>
              <Link>Skirts</Link>
              <Link>Jackets & Coats</Link>
              <Link>Trousers & Capris</Link>
              <Link>Jumpers</Link>
              <Link>Costumes</Link>
            </div>
            <div className="right-right">
              <Link>
                <h3>Women's Shoes</h3>
              </Link>
              <Link>Boots</Link>
              <Link>
                <h4>All Women's</h4>
              </Link>
            </div>
          </div>
          <div
            className="hover-right"
            id="hover2-right2"
            style={{ display: "none" }}
            onMouseEnter={() => {
              const item = document.getElementById("active2-hover2");
              const right = document.getElementById("hover2-right2");
              const first = document.getElementById("active2-hover1");
              if (first.classList.contains("hover-active")) {
                first.classList.remove("hover-active");
                document.getElementById("hover2-right1").style.display = "none";
              }
              if (!item.classList.contains("hover-active")) {
                item.classList.add("hover-active");
              }
              setTimeout(() => {
                right.style.display = "flex";
              }, 500);
            }}
            onMouseLeave={() => {
              const item = document.getElementById("active2-hover2");
              const right = document.getElementById("hover2-right2");
              if (item.classList.contains("hover-active")) {
                item.classList.remove("hover-active");
              }
              setTimeout(() => {
                right.style.display = "none";
              }, 500);
            }}
          >
            <div className="right-left">
              <Link>
                <h3>Men's Clothing</h3>
              </Link>
              <Link>Shirts</Link>
              <Link>Jumpers</Link>
              <Link>Costumes</Link>
              <Link>Jackets & Coats</Link>
            </div>
            <div className="right-right">
              <Link>
                <h3>Men's Shoes</h3>
              </Link>
              <Link>Boots</Link>
              <Link>
                <h4>All Men's</h4>
              </Link>
            </div>
          </div>
          <div
            className="hover-right"
            id="hover2-right3"
            style={{ display: "none" }}
            onMouseEnter={() => {
              const item = document.getElementById("active2-hover3");
              const right = document.getElementById("hover2-right3");
              const first = document.getElementById("active2-hover1");
              if (first.classList.contains("hover-active")) {
                first.classList.remove("hover-active");
                document.getElementById("hover2-right1").style.display = "none";
              }
              if (!item.classList.contains("hover-active")) {
                item.classList.add("hover-active");
              }
              setTimeout(() => {
                right.style.display = "flex";
              }, 500);
            }}
            onMouseLeave={() => {
              const item = document.getElementById("active2-hover3");
              const right = document.getElementById("hover2-right3");
              if (item.classList.contains("hover-active")) {
                item.classList.remove("hover-active");
              }
              setTimeout(() => {
                right.style.display = "none";
              }, 500);
            }}
          >
            <div className="right-left">
              <Link>
                <h3>Baby Girls' Clothing</h3>
              </Link>
              <Link>Jumpers</Link>
              <Link>
                <h3>Girls' Clothing</h3>
              </Link>
              <Link>Dresses</Link>
              <Link>Skirts</Link>
              <Link>Tops</Link>
              <Link>Costumes</Link>
              <Link>Jackets & Coats</Link>
              <Link>Jumpers</Link>
              <Link>
                <h3>Baby Boys' Clothing</h3>
              </Link>
              <Link>Jumpers</Link>
            </div>
            <div className="right-right">
              <Link>
                <h3>Boys' Clothing</h3>
              </Link>
              <Link>Tops</Link>
              <Link>Costumes</Link>
              <Link>Jackets & Coats</Link>
              <Link>Jumpers</Link>
              <Link>
                <h3>Girls' Shoes</h3>
              </Link>
              <Link>Boots</Link>
              <Link>
                <h3>Boys' Shoes</h3>
              </Link>
              <Link>Boots</Link>
              <Link>
                <h4>All Kids' & Baby</h4>
              </Link>
            </div>
          </div>
          <div
            className="hover-right"
            id="hover2-right4"
            style={{ display: "none" }}
            onMouseEnter={() => {
              const item = document.getElementById("active2-hover4");
              const right = document.getElementById("hover2-right4");
              const first = document.getElementById("active2-hover1");
              if (first.classList.contains("hover-active")) {
                first.classList.remove("hover-active");
                document.getElementById("hover2-right1").style.display = "none";
              }
              if (!item.classList.contains("hover-active")) {
                item.classList.add("hover-active");
              }
              setTimeout(() => {
                right.style.display = "flex";
              }, 500);
            }}
            onMouseLeave={() => {
              const item = document.getElementById("active2-hover4");
              const right = document.getElementById("hover2-right4");
              if (item.classList.contains("hover-active")) {
                item.classList.remove("hover-active");
              }
              setTimeout(() => {
                right.style.display = "none";
              }, 500);
            }}
          >
            <div className="right-left">
              <Link>
                <h3>Backpacks</h3>
              </Link>
              <Link>
                <h3>Handbags</h3>
              </Link>
              <Link>Clutches & Evening Bags</Link>
              <Link>Shoulder Bags</Link>
              <Link>
                <h3>Nappy Bags</h3>
              </Link>
            </div>
            <div className="right-right">
              <Link>
                <h3>Luggage & Duffel Bags</h3>
              </Link>
              <Link>
                <h3>Phone Cases</h3>
              </Link>
              <Link>
                <h4>All Bags & Purses</h4>
              </Link>
            </div>
          </div>
        </div>
      )}
      {isShown3 && (
        <div
          onMouseEnter={() => {
            setTimeout(() => {
              setIsShown3(true);
            }, 200);
          }}
          onMouseLeave={() => {
            setTimeout(() => {
              setIsShown3(false);
            }, 200);
          }}
          className="nav-hover"
          id="living-hover"
        >
          <div className="hover-left">
            <Link>
              <h3>All Home & Living</h3>
            </Link>
            <ul>
              <li
                onMouseEnter={() => {
                  const item = document.getElementById("active3-hover1");
                  const right = document.getElementById("hover3-right1");

                  if (!item.classList.contains("hover-active")) {
                    item.classList.add("hover-active");
                  }
                  setTimeout(() => {
                    right.style.display = "flex";
                  }, 500);
                }}
                onMouseLeave={() => {
                  const item = document.getElementById("active3-hover1");
                  const right = document.getElementById("hover3-right1");
                  if (item.classList.contains("hover-active")) {
                    item.classList.remove("hover-active");
                  }
                  setTimeout(() => {
                    right.style.display = "none";
                  }, 500);
                }}
              >
                <Link id="active3-hover1" className="hover-active">
                  Home
                </Link>
              </li>
              <li
                onMouseEnter={() => {
                  const item = document.getElementById("active3-hover2");
                  const right = document.getElementById("hover3-right2");
                  const first = document.getElementById("active3-hover1");
                  if (first.classList.contains("hover-active")) {
                    first.classList.remove("hover-active");
                    document.getElementById("hover3-right1").style.display =
                      "none";
                  }
                  if (!item.classList.contains("hover-active")) {
                    item.classList.add("hover-active");
                  }
                  setTimeout(() => {
                    right.style.display = "flex";
                  }, 500);
                }}
                onMouseLeave={() => {
                  const item = document.getElementById("active3-hover2");
                  const right = document.getElementById("hover3-right2");
                  if (item.classList.contains("hover-active")) {
                    item.classList.remove("hover-active");
                  }
                  setTimeout(() => {
                    right.style.display = "none";
                  }, 500);
                }}
              >
                <Link id="active3-hover2">Bath & Beauty</Link>
              </li>
              <li
                onMouseEnter={() => {
                  const item = document.getElementById("active3-hover3");
                  const right = document.getElementById("hover3-right3");
                  const first = document.getElementById("active3-hover1");
                  if (first.classList.contains("hover-active")) {
                    first.classList.remove("hover-active");
                    document.getElementById("hover3-right1").style.display =
                      "none";
                  }
                  if (!item.classList.contains("hover-active")) {
                    item.classList.add("hover-active");
                  }
                  setTimeout(() => {
                    right.style.display = "flex";
                  }, 500);
                }}
                onMouseLeave={() => {
                  const item = document.getElementById("active3-hover3");
                  const right = document.getElementById("hover3-right3");
                  const first = document.getElementById("active3-hover1");
                  if (first.classList.contains("hover-active")) {
                    first.classList.remove("hover-active");
                  }
                  if (item.classList.contains("hover-active")) {
                    item.classList.remove("hover-active");
                  }
                  setTimeout(() => {
                    right.style.display = "none";
                  }, 500);
                }}
              >
                <Link id="active3-hover3">Pet Supplies</Link>
              </li>
            </ul>
          </div>
          <div
            className="hover-right"
            id="hover3-right1"
            onMouseEnter={() => {
              const item = document.getElementById("active3-hover1");
              const right = document.getElementById("hover3-right1");
              const first = document.getElementById("active3-hover1");
              if (first.classList.contains("hover-active")) {
                first.classList.remove("hover-active");
                document.getElementById("hover3-right1").style.display = "none";
              }
              if (!item.classList.contains("hover-active")) {
                item.classList.add("hover-active");
              }
              setTimeout(() => {
                right.style.display = "flex";
              }, 500);
            }}
            onMouseLeave={() => {
              const item = document.getElementById("active3-hover1");
              const right = document.getElementById("hover3-right1");
              if (item.classList.contains("hover-active")) {
                item.classList.remove("hover-active");
              }
              setTimeout(() => {
                right.style.display = "none";
              }, 500);
            }}
          >
            <div className="right-left">
              <Link>
                <h3>Home Decor</h3>
              </Link>
              <Link>Wall Decor</Link>
              <Link>Decorative Cushions</Link>
              <Link>Picture Frames & Displays</Link>
              <Link>Candles & Holders</Link>
              <Link>Clocks</Link>
              <Link>Vases</Link>
              <Link>Christmas Wreaths</Link>
              <Link>Christmas Decor</Link>
              <Link>Christmas Trees</Link>
              <Link>Menorahs</Link>
              <Link>
                <h3>Rugs</h3>
              </Link>
            </div>
            <div className="right-right">
              <Link>
                <h3>Furniture</h3>
              </Link>
              <Link>
                <h3>Bedding</h3>
              </Link>
              <Link>
                <h3>Bathroom</h3>
              </Link>
              <Link>
                <h3>Outdoor & Gardening</h3>
              </Link>
              <Link>
                <h3>Storage & Organisation</h3>
              </Link>
              <Link>
                <h3>Office</h3>
              </Link>
              <Link>
                <h3>Lighting</h3>
              </Link>
              <Link>
                <h3>Kitchen & Dining</h3>
              </Link>
              <Link>
                <h3>Food & Drink</h3>
              </Link>
              <Link>
                <h3>Spirituality & Religion</h3>
              </Link>
              <Link>
                <h4>All Home</h4>
              </Link>
            </div>
          </div>
          <div
            className="hover-right"
            id="hover3-right2"
            style={{ display: "none" }}
            onMouseEnter={() => {
              const item = document.getElementById("active3-hover2");
              const right = document.getElementById("hover3-right2");
              const first = document.getElementById("active3-hover1");
              if (first.classList.contains("hover-active")) {
                first.classList.remove("hover-active");
                document.getElementById("hover3-right1").style.display = "none";
              }
              if (!item.classList.contains("hover-active")) {
                item.classList.add("hover-active");
              }
              setTimeout(() => {
                right.style.display = "flex";
              }, 500);
            }}
            onMouseLeave={() => {
              const item = document.getElementById("active3-hover2");
              const right = document.getElementById("hover3-right2");
              if (item.classList.contains("hover-active")) {
                item.classList.remove("hover-active");
              }
              setTimeout(() => {
                right.style.display = "none";
              }, 500);
            }}
          >
            <div className="right-left">
              <Link>
                <h3>Bath Accessories</h3>
              </Link>
              <Link>
                <h3>Makeup & Cosmetics</h3>
              </Link>
              <Link>
                <h3>Skin Care</h3>
              </Link>
              <Link>
                <h3>Hair Care</h3>
              </Link>
              <Link>
                <h3>Essential Oils</h3>
              </Link>
              <Link>
                <h3>Fragrances</h3>
              </Link>
            </div>
            <div className="right-right">
              <Link>
                <h3>Soaps & Bath Bombs</h3>
              </Link>
              <Link>
                <h3>Sex Toys</h3>
              </Link>
              <Link>
                <h3>Face Masks & Coverings</h3>
              </Link>
              <Link>
                <h4>All Bath & Beauty</h4>
              </Link>
            </div>
          </div>
          <div
            className="hover-right"
            id="hover3-right3"
            style={{ display: "none" }}
            onMouseEnter={() => {
              const item = document.getElementById("active3-hover3");
              const right = document.getElementById("hover3-right3");
              const first = document.getElementById("active3-hover1");
              if (first.classList.contains("hover-active")) {
                first.classList.remove("hover-active");
                document.getElementById("hover3-right1").style.display = "none";
              }
              if (!item.classList.contains("hover-active")) {
                item.classList.add("hover-active");
              }
              setTimeout(() => {
                right.style.display = "flex";
              }, 500);
            }}
            onMouseLeave={() => {
              const item = document.getElementById("active3-hover3");
              const right = document.getElementById("hover3-right3");
              if (item.classList.contains("hover-active")) {
                item.classList.remove("hover-active");
              }
              setTimeout(() => {
                right.style.display = "none";
              }, 500);
            }}
          >
            <div className="right-left">
              <Link>
                <h3>Pet Collars & Leashes</h3>
              </Link>
              <Link>
                <h3>Pet Furniture</h3>
              </Link>
              <Link>
                <h3>Pet Clothing & Shoes</h3>
              </Link>
              <Link>Pet Costumes</Link>
              <Link>Pet Hats & Vigs</Link>
              <Link>Pet Jackets & Hoodies</Link>
            </div>
            <div className="right-right">
              <Link>
                <h3>Pet Bedding</h3>
              </Link>
              <Link>
                <h3>Pet Carriers & Houses</h3>
              </Link>

              <Link>
                <h4>All Pet Supplies</h4>
              </Link>
            </div>
          </div>
        </div>
      )}
      {isShown4 && (
        <div
          onMouseEnter={() => {
            setTimeout(() => {
              setIsShown4(true);
            }, 200);
          }}
          onMouseLeave={() => {
            setTimeout(() => {
              setIsShown4(false);
            }, 200);
          }}
          className="nav-hover"
          id="wedding-hover"
        >
          <div className="hover-left">
            <Link>
              <h3>All Wedding & Party</h3>
            </Link>
            <ul>
              <li
                onMouseEnter={() => {
                  const item = document.getElementById("active4-hover1");
                  const right = document.getElementById("hover4-right1");
                  if (!item.classList.contains("hover-active")) {
                    item.classList.add("hover-active");
                  }
                  setTimeout(() => {
                    right.style.display = "flex";
                  }, 500);
                }}
                onMouseLeave={() => {
                  const item = document.getElementById("active4-hover1");
                  const right = document.getElementById("hover4-right1");
                  if (item.classList.contains("hover-active")) {
                    item.classList.remove("hover-active");
                  }
                  setTimeout(() => {
                    right.style.display = "none";
                  }, 500);
                }}
              >
                <Link id="active4-hover1" className="hover-active">
                  Party Supplies
                </Link>
              </li>
              <li
                onMouseEnter={() => {
                  const item = document.getElementById("active4-hover2");
                  const right = document.getElementById("hover4-right2");
                  const first = document.getElementById("active4-hover1");
                  if (first.classList.contains("hover-active")) {
                    first.classList.remove("hover-active");
                    document.getElementById("hover4-right1").style.display =
                      "none";
                  }
                  if (!item.classList.contains("hover-active")) {
                    item.classList.add("hover-active");
                  }
                  setTimeout(() => {
                    right.style.display = "flex";
                  }, 500);
                }}
                onMouseLeave={() => {
                  const item = document.getElementById("active4-hover2");
                  const right = document.getElementById("hover4-right2");
                  if (item.classList.contains("hover-active")) {
                    item.classList.remove("hover-active");
                  }
                  setTimeout(() => {
                    right.style.display = "none";
                  }, 500);
                }}
              >
                <Link id="active4-hover2">Invitations & Paper</Link>
              </li>
              <li
                onMouseEnter={() => {
                  const item = document.getElementById("active4-hover3");
                  const right = document.getElementById("hover4-right3");
                  const first = document.getElementById("active4-hover1");
                  if (first.classList.contains("hover-active")) {
                    first.classList.remove("hover-active");
                    document.getElementById("hover4-right1").style.display =
                      "none";
                  }
                  if (!item.classList.contains("hover-active")) {
                    item.classList.add("hover-active");
                  }
                  setTimeout(() => {
                    right.style.display = "flex";
                  }, 500);
                }}
                onMouseLeave={() => {
                  const item = document.getElementById("active4-hover3");
                  const right = document.getElementById("hover4-right3");
                  if (item.classList.contains("hover-active")) {
                    item.classList.remove("hover-active");
                  }
                  setTimeout(() => {
                    right.style.display = "none";
                  }, 500);
                }}
              >
                <Link id="active4-hover3">Wedding Decorations</Link>
              </li>
              <li
                onMouseEnter={() => {
                  const item = document.getElementById("active4-hover4");
                  const right = document.getElementById("hover4-right4");
                  const first = document.getElementById("active4-hover1");
                  if (first.classList.contains("hover-active")) {
                    first.classList.remove("hover-active");
                    document.getElementById("hover4-right1").style.display =
                      "none";
                  }
                  if (!item.classList.contains("hover-active")) {
                    item.classList.add("hover-active");
                  }
                  setTimeout(() => {
                    right.style.display = "flex";
                  }, 500);
                }}
                onMouseLeave={() => {
                  const item = document.getElementById("active4-hover4");
                  const right = document.getElementById("hover4-right4");
                  if (item.classList.contains("hover-active")) {
                    item.classList.remove("hover-active");
                  }
                  setTimeout(() => {
                    right.style.display = "none";
                  }, 500);
                }}
              >
                <Link id="active4-hover4">Wedding Gifts</Link>
              </li>
              <li
                onMouseEnter={() => {
                  const item = document.getElementById("active4-hover5");
                  const right = document.getElementById("hover4-right5");
                  const first = document.getElementById("active4-hover1");
                  if (first.classList.contains("hover-active")) {
                    first.classList.remove("hover-active");
                    document.getElementById("hover4-right1").style.display =
                      "none";
                  }
                  if (!item.classList.contains("hover-active")) {
                    item.classList.add("hover-active");
                  }
                  setTimeout(() => {
                    right.style.display = "flex";
                  }, 500);
                }}
                onMouseLeave={() => {
                  const item = document.getElementById("active4-hover5");
                  const right = document.getElementById("hover4-right5");
                  if (item.classList.contains("hover-active")) {
                    item.classList.remove("hover-active");
                  }
                  setTimeout(() => {
                    right.style.display = "none";
                  }, 500);
                }}
              >
                <Link id="active4-hover5">Wedding Accessories</Link>
              </li>
              <li
                onMouseEnter={() => {
                  const item = document.getElementById("active4-hover6");
                  const right = document.getElementById("hover4-right6");
                  const first = document.getElementById("active4-hover1");
                  if (first.classList.contains("hover-active")) {
                    first.classList.remove("hover-active");
                    document.getElementById("hover4-right1").style.display =
                      "none";
                  }
                  if (!item.classList.contains("hover-active")) {
                    item.classList.add("hover-active");
                  }
                  setTimeout(() => {
                    right.style.display = "flex";
                  }, 500);
                }}
                onMouseLeave={() => {
                  const item = document.getElementById("active4-hover6");
                  const right = document.getElementById("hover4-right6");
                  if (item.classList.contains("hover-active")) {
                    item.classList.remove("hover-active");
                  }
                  setTimeout(() => {
                    right.style.display = "none";
                  }, 500);
                }}
              >
                <Link id="active4-hover6">Wedding Clothing</Link>
              </li>
              <li
                onMouseEnter={() => {
                  const item = document.getElementById("active4-hover7");
                  const right = document.getElementById("hover4-right7");
                  const first = document.getElementById("active4-hover1");
                  if (first.classList.contains("hover-active")) {
                    first.classList.remove("hover-active");
                    document.getElementById("hover4-right1").style.display =
                      "none";
                  }
                  if (!item.classList.contains("hover-active")) {
                    item.classList.add("hover-active");
                  }
                  setTimeout(() => {
                    right.style.display = "flex";
                  }, 500);
                }}
                onMouseLeave={() => {
                  const item = document.getElementById("active4-hover7");
                  const right = document.getElementById("hover4-right7");
                  if (item.classList.contains("hover-active")) {
                    item.classList.remove("hover-active");
                  }
                  setTimeout(() => {
                    right.style.display = "none";
                  }, 500);
                }}
              >
                <Link id="active4-hover7">Wedding Jewellery</Link>
              </li>
            </ul>
            <Link>
              <h3>All Wedding</h3>
            </Link>
          </div>
          <div
            className="hover-right"
            id="hover4-right1"
            onMouseEnter={() => {
              const item = document.getElementById("active4-hover1");
              const right = document.getElementById("hover4-right1");
              const first = document.getElementById("active4-hover1");
              if (first.classList.contains("hover-active")) {
                first.classList.remove("hover-active");
                document.getElementById("hover4-right1").style.display = "none";
              }
              if (!item.classList.contains("hover-active")) {
                item.classList.add("hover-active");
              }
              setTimeout(() => {
                right.style.display = "flex";
              }, 500);
            }}
            onMouseLeave={() => {
              const item = document.getElementById("active4-hover1");
              const right = document.getElementById("hover4-right1");
              if (item.classList.contains("hover-active")) {
                item.classList.remove("hover-active");
              }
              setTimeout(() => {
                right.style.display = "none";
              }, 500);
            }}
          >
            <div className="right-left">
              <Link>
                <h3>Party Decor</h3>
              </Link>
              <Link>
                <h3>Baking & Cake Decoration</h3>
              </Link>
            </div>
            <div className="right-right">
              <Link>
                <h4>All Party Supplies</h4>
              </Link>
            </div>
          </div>
          <div
            className="hover-right"
            id="hover4-right2"
            style={{ display: "none" }}
            onMouseEnter={() => {
              const item = document.getElementById("active4-hover2");
              const right = document.getElementById("hover4-right2");
              const first = document.getElementById("active4-hover1");
              if (first.classList.contains("hover-active")) {
                first.classList.remove("hover-active");
                document.getElementById("hover4-right1").style.display = "none";
              }
              if (!item.classList.contains("hover-active")) {
                item.classList.add("hover-active");
              }
              setTimeout(() => {
                right.style.display = "flex";
              }, 500);
            }}
            onMouseLeave={() => {
              const item = document.getElementById("active4-hover2");
              const right = document.getElementById("hover4-right2");
              if (item.classList.contains("hover-active")) {
                item.classList.remove("hover-active");
              }
              setTimeout(() => {
                right.style.display = "none";
              }, 500);
            }}
          >
            <div className="right-left">
              <Link>
                <h3>Invitations & Announcements</h3>
              </Link>
              <Link>Wedding Invitations</Link>
              <Link>Wedding Invitation Kit</Link>
              <Link>Wedding Templates</Link>
              <Link>Save The Dates</Link>
              <Link>
                <h3>Greeting Cards</h3>
              </Link>
            </div>
            <div className="right-right">
              <Link>
                <h3>Gift Wrapping</h3>
              </Link>
              <Link>
                <h3>Christmas & Seasonal Cards</h3>
              </Link>
              <Link>
                <h3>Stationery</h3>
              </Link>
              <Link>
                <h4>All Invitation & Paper</h4>
              </Link>
            </div>
          </div>
          <div
            className="hover-right"
            id="hover4-right3"
            style={{ display: "none" }}
            onMouseEnter={() => {
              const item = document.getElementById("active4-hover3");
              const right = document.getElementById("hover4-right3");
              const first = document.getElementById("active4-hover1");
              if (first.classList.contains("hover-active")) {
                first.classList.remove("hover-active");
                document.getElementById("hover4-right1").style.display = "none";
              }
              if (!item.classList.contains("hover-active")) {
                item.classList.add("hover-active");
              }
              setTimeout(() => {
                right.style.display = "flex";
              }, 500);
            }}
            onMouseLeave={() => {
              const item = document.getElementById("active4-hover3");
              const right = document.getElementById("hover4-right3");
              if (item.classList.contains("hover-active")) {
                item.classList.remove("hover-active");
              }
              setTimeout(() => {
                right.style.display = "none";
              }, 500);
            }}
          >
            <div className="right-left">
              <Link>
                <h3>Centrepieces</h3>
              </Link>
              <Link>
                <h3>Cake Toppers</h3>
              </Link>
              <Link>
                <h3>Serving & Dining</h3>
              </Link>

              <Link>Cake Servers & Knives</Link>

              <Link>Table Decor</Link>

              <Link>
                <h3>Candles & Holders</h3>
              </Link>
            </div>
            <div className="right-right">
              <Link>
                <h3>Baskets & Boxes</h3>
              </Link>
              <Link>
                <h3>Ring Bearer Pillows</h3>
              </Link>
              <Link>
                <h3>Plants</h3>
              </Link>
              <Link>
                <h4>All Wedding Decorations</h4>
              </Link>
            </div>
          </div>
          <div
            className="hover-right"
            id="hover4-right4"
            style={{ display: "none" }}
            onMouseEnter={() => {
              const item = document.getElementById("active4-hover4");
              const right = document.getElementById("hover4-right4");
              const first = document.getElementById("active4-hover1");
              if (first.classList.contains("hover-active")) {
                first.classList.remove("hover-active");
                document.getElementById("hover4-right1").style.display = "none";
              }
              if (!item.classList.contains("hover-active")) {
                item.classList.add("hover-active");
              }
              setTimeout(() => {
                right.style.display = "flex";
              }, 500);
            }}
            onMouseLeave={() => {
              const item = document.getElementById("active4-hover4");
              const right = document.getElementById("hover4-right4");
              if (item.classList.contains("hover-active")) {
                item.classList.remove("hover-active");
              }
              setTimeout(() => {
                right.style.display = "none";
              }, 500);
            }}
          >
            <div className="right-left">
              <Link>
                <h3>Bridesmaids Gifts</h3>
              </Link>
              <Link>
                <h3>Wedding Favours</h3>
              </Link>
              <Link>
                <h3>Gifts For The Couple</h3>
              </Link>
              <Link>
                <h3>Best Men Gifts</h3>
              </Link>
              <Link>
                <h3>Guest Books</h3>
              </Link>
            </div>
            <div className="right-right">
              <Link>
                <h3>Portraits & Frames</h3>
              </Link>
              <Link>
                <h3>Album & Scrapbooks</h3>
              </Link>
              <Link>
                <h4>All Wedding Gifts</h4>
              </Link>
            </div>
          </div>
          <div
            className="hover-right"
            id="hover4-right5"
            style={{ display: "none" }}
            onMouseEnter={() => {
              const item = document.getElementById("active4-hover5");
              const right = document.getElementById("hover4-right5");
              const first = document.getElementById("active4-hover1");
              if (first.classList.contains("hover-active")) {
                first.classList.remove("hover-active");
                document.getElementById("hover4-right1").style.display = "none";
              }
              if (!item.classList.contains("hover-active")) {
                item.classList.add("hover-active");
              }
              setTimeout(() => {
                right.style.display = "flex";
              }, 500);
            }}
            onMouseLeave={() => {
              const item = document.getElementById("active4-hover5");
              const right = document.getElementById("hover4-right5");
              if (item.classList.contains("hover-active")) {
                item.classList.remove("hover-active");
              }
              setTimeout(() => {
                right.style.display = "none";
              }, 500);
            }}
          >
            <div className="right-left">
              <Link>
                <h3>Something Blue</h3>
              </Link>
              <Link>
                <h3>Bouquets & Corsages</h3>
              </Link>
              <Link>
                <h3>Veils</h3>
              </Link>
              <Link>
                <h3>Bags & Purses</h3>
              </Link>
              <Link>
                <h3>Cover Ups & Scarves</h3>
              </Link>
              <Link>
                <h3>Hair Accessories</h3>
              </Link>
              <Link>Barrettes & Clips</Link>
              <Link>Decorative Combs</Link>
              <Link>Fascinators & Mini Hats</Link>
              <Link>Hair Jewellery</Link>
              <Link>Hair Pins</Link>
              <Link>Wreaths & Tiaras</Link>
            </div>
            <div className="right-right">
              <Link>
                <h3>Cummerbunds</h3>
              </Link>
              <Link>
                <h3>Neckties</h3>
              </Link>
              <Link>
                <h3>Umbrellas</h3>
              </Link>
              <Link>
                <h3>Hats</h3>
              </Link>
              <Link>
                <h4>All Wedding Accessories</h4>
              </Link>
            </div>
          </div>
          <div
            className="hover-right"
            id="hover4-right6"
            style={{ display: "none" }}
            onMouseEnter={() => {
              const item = document.getElementById("active4-hover6");
              const right = document.getElementById("hover4-right6");
              const first = document.getElementById("active4-hover1");
              if (first.classList.contains("hover-active")) {
                first.classList.remove("hover-active");
                document.getElementById("hover4-right1").style.display = "none";
              }
              if (!item.classList.contains("hover-active")) {
                item.classList.add("hover-active");
              }
              setTimeout(() => {
                right.style.display = "flex";
              }, 500);
            }}
            onMouseLeave={() => {
              const item = document.getElementById("active4-hover6");
              const right = document.getElementById("hover4-right6");
              if (item.classList.contains("hover-active")) {
                item.classList.remove("hover-active");
              }
              setTimeout(() => {
                right.style.display = "none";
              }, 500);
            }}
          >
            <div className="right-left">
              <Link>
                <h3>Dresses</h3>
              </Link>
              <Link>Bridal Gowns & Separates</Link>
              <Link>Bridesmaid Dresses</Link>
              <Link>Flower Girl Dresses</Link>
              <Link>Mother of the Bride Dresses</Link>
            </div>
            <div className="right-right">
              <Link>
                <h3>Lingerie & Garters</h3>
              </Link>
              <Link>
                <h3>Suits</h3>
              </Link>
              <Link>
                <h4>All Wedding Clothing</h4>
              </Link>
            </div>
          </div>
          <div
            className="hover-right"
            id="hover4-right7"
            style={{ display: "none" }}
            onMouseEnter={() => {
              const item = document.getElementById("active4-hover7");
              const right = document.getElementById("hover4-right7");
              const first = document.getElementById("active4-hover1");
              if (first.classList.contains("hover-active")) {
                first.classList.remove("hover-active");
                document.getElementById("hover4-right1").style.display = "none";
              }
              if (!item.classList.contains("hover-active")) {
                item.classList.add("hover-active");
              }
              setTimeout(() => {
                right.style.display = "flex";
              }, 500);
            }}
            onMouseLeave={() => {
              const item = document.getElementById("active4-hover7");
              const right = document.getElementById("hover4-right7");
              if (item.classList.contains("hover-active")) {
                item.classList.remove("hover-active");
              }
              setTimeout(() => {
                right.style.display = "none";
              }, 500);
            }}
          >
            <div className="right-left">
              <Link>
                <h3>Earrings</h3>
              </Link>
              <Link>
                <h3>Rings</h3>
              </Link>
              <Link>Engagement Rings</Link>
              <Link>Wedding Bands</Link>
              <Link>Bridal Sets</Link>
            </div>
            <div className="right-right">
              <Link>
                <h3>Necklaces</h3>
              </Link>
              <Link>
                <h3>Bracelets</h3>
              </Link>
              <Link>
                <h3>Jewellery Sets</h3>
              </Link>
              <Link>
                <h4>All Wedding Jewellery</h4>
              </Link>
            </div>
          </div>
        </div>
      )}
      {isShown5 && (
        <div
          className="nav-hover"
          id="toys-hover"
          onMouseEnter={() => {
            setTimeout(() => {
              setIsShown5(true);
            }, 200);
          }}
          onMouseLeave={() => {
            setTimeout(() => {
              setIsShown5(false);
            }, 200);
          }}
        >
          <div className="nav-flex">
            <div className="special-nav">
              <Link>
                <h3>Toys</h3>
              </Link>
              <Link>Baby & Toddler Toys</Link>
              <Link>Dolls & Action Figures</Link>
              <Link>Stuffed Animals</Link>
              <Link>Games & Puzzles</Link>
              <Link>Learning & School</Link>
              <Link>Kids' Crafts</Link>
              <Link>Slime & Foam</Link>
              <Link>
                <h3>Electronics & Accessories</h3>
              </Link>
              <Link>Mobile Phone Accessories</Link>
              <Link>Gadgets</Link>
              <Link>Video Games</Link>
              <Link>Decals & Skins</Link>
              <Link>Cameras</Link>
              <Link>Computers & Peripherals</Link>
            </div>
            <div className="special-nav">
              <Link>
                <h3>Books</h3>
              </Link>
              <Link>Blank Books</Link>
              <Link>Calendars & Planners</Link>
              <Link>Book Accessories</Link>
              <Link>Children's Books</Link>
              <Link>Art & Photography Books</Link>
              <Link>Comics & Graphic Novels</Link>
              <Link>Craft & Hobby Books</Link>
              <Link>Literature & Fiction</Link>
              <Link>Poetry</Link>
              <Link>Guides & How Tos</Link>
              <Link>Zines & Magazines</Link>
            </div>
            <div className="special-nav">
              <Link>
                <h3>Movies & Music</h3>
              </Link>
              <Link>Musical Instruments</Link>
              <Link>Instrument Straps</Link>
              <Link>Recorded Audio</Link>
              <Link>Sheet Music</Link>
              <Link>All Movies</Link>
              <Link>All Music</Link>
              <Link>
                <h4>All Toys & Entertainment</h4>
              </Link>
            </div>
          </div>
        </div>
      )}
      {isShown6 && (
        <div
          className="nav-hover"
          id="art-hover"
          onMouseEnter={() => {
            setTimeout(() => {
              setIsShown6(true);
            }, 200);
          }}
          onMouseLeave={() => {
            setTimeout(() => {
              setIsShown6(false);
            }, 200);
          }}
        >
          <div className="nav-flex">
            <div className="special-nav">
              <Link>
                <h3>Prints</h3>
              </Link>
              <Link>
                <h3>Photography</h3>
              </Link>
              <Link>
                <h3>Painting</h3>
              </Link>
              <Link>Oil</Link>
              <Link>Watercolour</Link>
              <Link>Acrylic</Link>
            </div>
            <div className="special-nav">
              <Link>
                <h3>Sculpture</h3>
              </Link>
              <Link>
                <h3>Glass Art</h3>
              </Link>
              <Link>
                <h3>Drawing & Illustration</h3>
              </Link>
              <Link>
                <h3>Mixed Media & Collage</h3>
              </Link>
              <Link>
                <h3>Fibre Arts</h3>
              </Link>
              <Link>
                <h3>Dolls & Miniatures</h3>
              </Link>
            </div>
            <div className="special-nav">
              <Link>
                <h3>Collectibles</h3>
              </Link>
              <Link>Figurines & Knick Knacks</Link>
              <Link>Memorabilia</Link>
              <Link>Coins & Money</Link>

              <Link>
                <h4>All Art & Collectibles</h4>
              </Link>
            </div>
          </div>
        </div>
      )}
      {isShown7 && (
        <div
          onMouseEnter={() => {
            setTimeout(() => {
              setIsShown7(true);
            }, 200);
          }}
          onMouseLeave={() => {
            setTimeout(() => {
              setIsShown7(false);
            }, 200);
          }}
          className="nav-hover"
          id="craft-hover"
        >
          <div className="hover-left">
            <Link>
              <h3>All Craft Supplies & Tools</h3>
            </Link>
            <ul>
              <li
                onMouseEnter={() => {
                  const item = document.getElementById("active7-hover1");
                  const right = document.getElementById("hover7-right1");
                  if (!item.classList.contains("hover-active")) {
                    item.classList.add("hover-active");
                  }
                  setTimeout(() => {
                    right.style.display = "flex";
                  }, 500);
                }}
                onMouseLeave={() => {
                  const item = document.getElementById("active7-hover1");
                  const right = document.getElementById("hover7-right1");
                  if (item.classList.contains("hover-active")) {
                    item.classList.remove("hover-active");
                  }
                  setTimeout(() => {
                    right.style.display = "none";
                  }, 500);
                }}
              >
                <Link id="active7-hover1" className="hover-active">
                  Home & Hobby
                </Link>
              </li>
              <li
                onMouseEnter={() => {
                  const item = document.getElementById("active7-hover2");
                  const right = document.getElementById("hover7-right2");
                  const first = document.getElementById("active7-hover1");
                  if (first.classList.contains("hover-active")) {
                    first.classList.remove("hover-active");
                    document.getElementById("hover7-right1").style.display =
                      "none";
                  }
                  if (!item.classList.contains("hover-active")) {
                    item.classList.add("hover-active");
                  }
                  setTimeout(() => {
                    right.style.display = "flex";
                  }, 500);
                }}
                onMouseLeave={() => {
                  const item = document.getElementById("active7-hover2");
                  const right = document.getElementById("hover7-right2");
                  if (item.classList.contains("hover-active")) {
                    item.classList.remove("hover-active");
                  }
                  setTimeout(() => {
                    right.style.display = "none";
                  }, 500);
                }}
              >
                <Link id="active7-hover2">Jewellery & Beauty</Link>
              </li>
              <li
                onMouseEnter={() => {
                  const item = document.getElementById("active7-hover3");
                  const right = document.getElementById("hover7-right3");
                  const first = document.getElementById("active7-hover1");
                  if (first.classList.contains("hover-active")) {
                    first.classList.remove("hover-active");
                    document.getElementById("hover7-right1").style.display =
                      "none";
                  }
                  if (!item.classList.contains("hover-active")) {
                    item.classList.add("hover-active");
                  }
                  setTimeout(() => {
                    right.style.display = "flex";
                  }, 500);
                }}
                onMouseLeave={() => {
                  const item = document.getElementById("active7-hover3");
                  const right = document.getElementById("hover7-right3");
                  if (item.classList.contains("hover-active")) {
                    item.classList.remove("hover-active");
                  }
                  setTimeout(() => {
                    right.style.display = "none";
                  }, 500);
                }}
              >
                <Link id="active7-hover3">Sewing & Fiber</Link>
              </li>
              <li
                onMouseEnter={() => {
                  const item = document.getElementById("active7-hover4");
                  const right = document.getElementById("hover7-right4");
                  const first = document.getElementById("active7-hover1");
                  if (first.classList.contains("hover-active")) {
                    first.classList.remove("hover-active");
                    document.getElementById("hover7-right1").style.display =
                      "none";
                  }
                  if (!item.classList.contains("hover-active")) {
                    item.classList.add("hover-active");
                  }
                  setTimeout(() => {
                    right.style.display = "flex";
                  }, 500);
                }}
                onMouseLeave={() => {
                  const item = document.getElementById("active7-hover4");
                  const right = document.getElementById("hover7-right4");
                  if (item.classList.contains("hover-active")) {
                    item.classList.remove("hover-active");
                  }
                  setTimeout(() => {
                    right.style.display = "none";
                  }, 500);
                }}
              >
                <Link id="active7-hover4">Papercraft</Link>
              </li>
              <li
                onMouseEnter={() => {
                  const item = document.getElementById("active7-hover5");
                  const right = document.getElementById("hover7-right5");
                  const first = document.getElementById("active7-hover1");
                  if (first.classList.contains("hover-active")) {
                    first.classList.remove("hover-active");
                    document.getElementById("hover7-right1").style.display =
                      "none";
                  }
                  if (!item.classList.contains("hover-active")) {
                    item.classList.add("hover-active");
                  }
                  setTimeout(() => {
                    right.style.display = "flex";
                  }, 500);
                }}
                onMouseLeave={() => {
                  const item = document.getElementById("active7-hover5");
                  const right = document.getElementById("hover7-right5");
                  if (item.classList.contains("hover-active")) {
                    item.classList.remove("hover-active");
                  }
                  setTimeout(() => {
                    right.style.display = "none";
                  }, 500);
                }}
              >
                <Link id="active7-hover5">Visual Arts</Link>
              </li>
              <li
                onMouseEnter={() => {
                  const item = document.getElementById("active7-hover6");
                  const right = document.getElementById("hover7-right6");
                  const first = document.getElementById("active7-hover1");
                  if (first.classList.contains("hover-active")) {
                    first.classList.remove("hover-active");
                    document.getElementById("hover7-right1").style.display =
                      "none";
                  }
                  if (!item.classList.contains("hover-active")) {
                    item.classList.add("hover-active");
                  }
                  setTimeout(() => {
                    right.style.display = "flex";
                  }, 500);
                }}
                onMouseLeave={() => {
                  const item = document.getElementById("active7-hover6");
                  const right = document.getElementById("hover7-right6");
                  if (item.classList.contains("hover-active")) {
                    item.classList.remove("hover-active");
                  }
                  setTimeout(() => {
                    right.style.display = "none";
                  }, 500);
                }}
              >
                <Link id="active7-hover6">Sculpting & Forming</Link>
              </li>
            </ul>
          </div>
          <div
            className="hover-right"
            id="hover7-right1"
            onMouseEnter={() => {
              const item = document.getElementById("active7-hover1");
              const right = document.getElementById("hover7-right1");
              const first = document.getElementById("active7-hover1");
              if (first.classList.contains("hover-active")) {
                first.classList.remove("hover-active");
                document.getElementById("hover7-right1").style.display = "none";
              }
              if (!item.classList.contains("hover-active")) {
                item.classList.add("hover-active");
              }
              setTimeout(() => {
                right.style.display = "flex";
              }, 500);
            }}
            onMouseLeave={() => {
              const item = document.getElementById("active7-hover1");
              const right = document.getElementById("hover7-right1");
              if (item.classList.contains("hover-active")) {
                item.classList.remove("hover-active");
              }
              setTimeout(() => {
                right.style.display = "none";
              }, 500);
            }}
          >
            <div className="right-left">
              <Link>
                <h3>Woodworking & Carpentry</h3>
              </Link>
              <Link>
                <h3>Home Improvement</h3>
              </Link>
              <Link>
                <h3>Electronics & Circuitry</h3>
              </Link>
              <Link>
                <h3>Framing</h3>
              </Link>
              <Link>
                <h3>Doll & Model Making</h3>
              </Link>
              <Link>
                <h3>Candle Making</h3>
              </Link>
            </div>
            <div className="right-right">
              <Link>
                <h3>Food & Fermenting</h3>
              </Link>
              <Link>
                <h3>Floral & Garden Crafts</h3>
              </Link>
              <Link>Gardening & Plants</Link>
              <Link>Floral Arranging</Link>
              <Link>
                <h4>All Home & Hobby</h4>
              </Link>
            </div>
          </div>
          <div
            className="hover-right"
            id="hover7-right2"
            style={{ display: "none" }}
            onMouseEnter={() => {
              const item = document.getElementById("active7-hover2");
              const right = document.getElementById("hover7-right2");
              const first = document.getElementById("active7-hover1");
              if (first.classList.contains("hover-active")) {
                first.classList.remove("hover-active");
                document.getElementById("hover7-right1").style.display = "none";
              }
              if (!item.classList.contains("hover-active")) {
                item.classList.add("hover-active");
              }
              setTimeout(() => {
                right.style.display = "flex";
              }, 500);
            }}
            onMouseLeave={() => {
              const item = document.getElementById("active7-hover2");
              const right = document.getElementById("hover7-right2");
              if (item.classList.contains("hover-active")) {
                item.classList.remove("hover-active");
              }
              setTimeout(() => {
                right.style.display = "none";
              }, 500);
            }}
          >
            <div className="right-left">
              <Link>
                <h3>Jewellery Making & Beading</h3>
              </Link>
              <Link>Beads</Link>
              <Link>Cabochons</Link>
              <Link>Charms</Link>
              <Link>Jewellery Findings</Link>
              <Link>Pendants</Link>
            </div>
            <div className="right-right">
              <Link>
                <h3>Makeup & Face Painting</h3>
              </Link>
              <Link>
                <h4>All Jewellery & Beauty</h4>
              </Link>
            </div>
          </div>
          <div
            className="hover-right"
            id="hover7-right3"
            style={{ display: "none" }}
            onMouseEnter={() => {
              const item = document.getElementById("active7-hover3");
              const right = document.getElementById("hover7-right3");
              const first = document.getElementById("active7-hover1");
              if (first.classList.contains("hover-active")) {
                first.classList.remove("hover-active");
                document.getElementById("hover7-right1").style.display = "none";
              }
              if (!item.classList.contains("hover-active")) {
                item.classList.add("hover-active");
              }
              setTimeout(() => {
                right.style.display = "flex";
              }, 500);
            }}
            onMouseLeave={() => {
              const item = document.getElementById("active7-hover3");
              const right = document.getElementById("hover7-right3");
              if (item.classList.contains("hover-active")) {
                item.classList.remove("hover-active");
              }
              setTimeout(() => {
                right.style.display = "none";
              }, 500);
            }}
          >
            <div className="right-left">
              <Link>
                <h3>Knitting</h3>
              </Link>
              <Link>
                <h3>Crochet</h3>
              </Link>
              <Link>
                <h3>Sewing</h3>
              </Link>
              <Link>
                <h3>Quilting</h3>
              </Link>
            </div>
            <div className="right-right">
              <Link>
                <h3>Embroidery</h3>
              </Link>
              <Link>
                <h3>Cross Stich</h3>
              </Link>
              <Link>
                <h4>All Sewing & Fibre</h4>
              </Link>
            </div>
          </div>
          <div
            className="hover-right"
            id="hover7-right4"
            style={{ display: "none" }}
            onMouseEnter={() => {
              const item = document.getElementById("active7-hover4");
              const right = document.getElementById("hover7-right4");
              const first = document.getElementById("active7-hover1");
              if (first.classList.contains("hover-active")) {
                first.classList.remove("hover-active");
                document.getElementById("hover7-right1").style.display = "none";
              }
              if (!item.classList.contains("hover-active")) {
                item.classList.add("hover-active");
              }
              setTimeout(() => {
                right.style.display = "flex";
              }, 500);
            }}
            onMouseLeave={() => {
              const item = document.getElementById("active7-hover4");
              const right = document.getElementById("hover7-right4");
              if (item.classList.contains("hover-active")) {
                item.classList.remove("hover-active");
              }
              setTimeout(() => {
                right.style.display = "none";
              }, 500);
            }}
          >
            <div className="right-left">
              <Link>
                <h3>Card Making Stationery</h3>
              </Link>
              <Link>
                <h3>Scrapbooking</h3>
              </Link>
              <Link>
                <h3>Bookbinding</h3>
              </Link>
              <Link>
                <h3>Stamping</h3>
              </Link>
            </div>
            <div className="right-right">
              <Link>
                <h3>Origami</h3>
              </Link>
              <Link>
                <h3>Party & Gifting</h3>
              </Link>
              <Link>
                <h4>All Papercraft</h4>
              </Link>
            </div>
          </div>
          <div
            className="hover-right"
            id="hover7-right5"
            style={{ display: "none" }}
            onMouseEnter={() => {
              const item = document.getElementById("active7-hover5");
              const right = document.getElementById("hover7-right5");
              const first = document.getElementById("active7-hover1");
              if (first.classList.contains("hover-active")) {
                first.classList.remove("hover-active");
                document.getElementById("hover7-right1").style.display = "none";
              }
              if (!item.classList.contains("hover-active")) {
                item.classList.add("hover-active");
              }
              setTimeout(() => {
                right.style.display = "flex";
              }, 500);
            }}
            onMouseLeave={() => {
              const item = document.getElementById("active7-hover5");
              const right = document.getElementById("hover7-right5");
              if (item.classList.contains("hover-active")) {
                item.classList.remove("hover-active");
              }
              setTimeout(() => {
                right.style.display = "none";
              }, 500);
            }}
          >
            <div className="right-left">
              <Link>
                <h3>Painting</h3>
              </Link>
              <Link>
                <h3>Printing & Printmaking</h3>
              </Link>
              <Link>
                <h3>Drawing & Drafting</h3>
              </Link>
              <Link>
                <h3>Photography</h3>
              </Link>
            </div>
            <div className="right-right">
              <Link>
                <h3>Collage</h3>
              </Link>
              <Link>
                <h3>Calligraphy & Pens</h3>
              </Link>
              <Link>
                <h4>All Visual Arts</h4>
              </Link>
            </div>
          </div>
          <div
            className="hover-right"
            id="hover7-right6"
            style={{ display: "none" }}
            onMouseEnter={() => {
              const item = document.getElementById("active7-hover6");
              const right = document.getElementById("hover7-right6");
              const first = document.getElementById("active7-hover1");
              if (first.classList.contains("hover-active")) {
                first.classList.remove("hover-active");
                document.getElementById("hover7-right1").style.display = "none";
              }
              if (!item.classList.contains("hover-active")) {
                item.classList.add("hover-active");
              }
              setTimeout(() => {
                right.style.display = "flex";
              }, 600);
            }}
            onMouseLeave={() => {
              const item = document.getElementById("active7-hover6");
              const right = document.getElementById("hover7-right6");
              if (item.classList.contains("hover-active")) {
                item.classList.remove("hover-active");
              }
              setTimeout(() => {
                right.style.display = "none";
              }, 500);
            }}
          >
            <div className="right-left">
              <Link>
                <h3>Ceramics & Pottery</h3>
              </Link>
              <Link>
                <h3>Metalworking</h3>
              </Link>
              <Link>
                <h3>Carving & Whittling</h3>
              </Link>
            </div>
            <div className="right-right">
              <Link>
                <h4>All Sculpting & Forming</h4>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
