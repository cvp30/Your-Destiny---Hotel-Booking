import React from "react";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import twitter from "../../assets/icons/twitter.svg";
import youtube from "../../assets/icons/youtube.svg";
import user from "../../assets/icons/user.png";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { logOut } from "../../redux/actions";
import style from "./NavBar.module.css";

const NavBar = (props) => {
  const location = useLocation();
  const [login, setLogin] = useState(false);

  const [info, setInfo] = useState(JSON.parse(localStorage.getItem("user")));
  useEffect(() => {
    if (info) {
      setLogin(true);
    }
  });

  return (
    <div className={style.containerNavbar}>
      <nav className={style.containerNav}>
        <div>
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
        </div>
        <div>
          <ul className={style.ulNav}>
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
              <NavLink to={"/aboutUs"} className={style.linkLanding}>
                About Us
              </NavLink>
            </li>
            <li className="dropdown">
              <a
                className={`${style.linkLanding} dropdown-toggle`}
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={user} alt="" width={"24px"} height="24px" />
              </a>

              <ul className="dropdown-menu dropdown-menu-lg-end">
                <li>
                  {login === false ? (
                    <a className="dropdown-item" href="/">
                      Log-in
                    </a>
                  ) : (
                    <a onClick={logOut} className="dropdown-item" href="/">
                      Log-Out
                    </a>
                  )}
                </li>
                {info && info[0].admin === true ? (
                  <li>
                    <a
                      className={`${style.itemDrop} dropdown-item`}
                      href="/admin"
                    >Dashboard</a>
                  </li>
                ) : (
                  ""
                )}
                <hr />
                <li>
                  <a className="dropdown-item" href="/Booking">
                    My reservations
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
