import React from "react";
import style from "./NavBarDetails.module.css";
import user from "../../assets/icons/user.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import twitter from "../../assets/icons/twitter.svg";
import youtube from "../../assets/icons/youtube.svg";
import { logOut } from "../../redux/actions";
import { useEffect } from "react";
const NavBarDetails = () => {
  const [login, setLogin] = useState(false);

  const [info, setInfo] = useState(localStorage.getItem("user"));
  useEffect(() => {
    if (info) {
      setLogin(true);
    }
  });
  function darkMode() {
    localStorage.setItem("theme", "dark");
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
  }
  function lightMode() {
    localStorage.setItem("theme", "light");
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    element.className = "light-mode";
  }
  if (localStorage.getItem("theme") == "light") {
    lightMode();
  } else {
    darkMode();
  }
  const handleChecked = (event) => {
    if (event.target.checked === true) {
      darkMode();
    } else {
      lightMode();
    }
  };
  return (
    <div>
      <nav className={` ${style.navBar} navbar navbar-expand-lg`}>
        <div className={`${style.containerFluid} container-fluid`}>
          <ul className={style.ulNavRedes}>
            <li>
              <a href="https:/www.instagram.com" target={"_blank"}>
                <button>
                  <img src={instagram} alt="logo instagram" />
                </button>
              </a>
            </li>
            <li>
              <a href="https:/www.facebook.com" target={"_blank"}>
                <button>
                  <img src={facebook} alt="logo facebook" />
                </button>
              </a>
            </li>
            <li>
              <a href="https:/www.youtube.com" target={"_blank"}>
                <button>
                  <img src={youtube} alt="logo youtube" />
                </button>
              </a>
            </li>
            <li>
              <a href="https:/www.twitter.com" target={"_blank"}>
                <button>
                  <img src={twitter} alt="logo twitter" />
                </button>
              </a>
            </li>
          </ul>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={` ${style.navBarCollapse} collapse navbar-collapse`}
            id="navbarSupportedContent"
          >
            <ul
              className={` ${style.navBarNav} navbar-nav me-auto mb-2 mb-lg-0`}
            >
              <li className={style.pages}>
                <a href="/home" className={style.linkLanding}>
                  Home
                </a>
              </li>
              <li className={style.pages}>
                <a href="/rooms" className={style.linkLanding}>
                  Rooms
                </a>
              </li>
              <li className={style.pages}>
                <NavLink to={"/hotels"} className={style.linkLanding}>
                  Hotels
                </NavLink>
              </li>
              <li className={style.pages}>
                <a href="/favorites" className={style.linkLanding}>
                  Favorites
                </a>
              </li>
              <li className={style.pages}>
                <NavLink to={"/aboutUs"} className={style.linkLanding}>
                  About Us
                </NavLink>
              </li>
              <li className={style.pages}>
                <input
                  type="checkbox"
                  // checked={inputs.specialties.includes(spec) ? true : false}
                  name="darkMode"
                  checked={
                    localStorage.getItem("theme") === "dark" ? true : false
                  }
                  value={localStorage.getItem("theme")}
                  id={`switch`}
                  className={style.switch}
                  onClick={(e) => handleChecked(e)}
                />
                <label htmlFor={`switch`} className={style.lbl}></label>
              </li>
              <li className="dropdown-center">
                <a
                  className={`${style.linkLanding} dropdown-toggle`}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src={user} alt="" width={"24px"} height="24px" />
                </a>

                <ul
                  className={`${style.dropDownUl} dropdown-menu dropdown-menu-lg-end`}
                >
                  <li>
                    {login === false ? (
                      <a className={`${style.itemDrop} dropdown-item`} href="/">
                        Log-in
                      </a>
                    ) : (
                      <a
                        onClick={logOut}
                        className={` ${style.itemDrop} dropdown-item`}
                        href="/"
                      >
                        Log-Out
                      </a>
                    )}
                  </li>
                  {info && info[0].admin === true ? (
                    <li>
                      <a
                        className={`${style.itemDrop} dropdown-item`}
                        href="/admin"
                      >
                        Dashboard
                      </a>
                    </li>
                  ) : (
                    ""
                  )}
                  <hr />
                  <li>
                    <a
                      className={`${style.itemDrop} dropdown-item`}
                      href="/Booking"
                    >
                      My reservations
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a
                      className={`${style.itemDrop} dropdown-item`}
                      href="/Reservationhistory"
                    >
                      Reservation History
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBarDetails;