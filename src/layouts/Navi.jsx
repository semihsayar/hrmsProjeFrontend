import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Navi() {
  const { loggedIn } = useAuth();

  console.log(loggedIn);

  return (
    <div>
      <header>
        <div className="header-area header-transparrent">
          <div className="headder-top header-sticky">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-3 col-md-2">
                  <div className="logo">
                    <h1>
                      <Link to={"/"}>LOGO</Link>
                    </h1>
                  </div>
                </div>
                <div className="col-lg-9 col-md-9">
                  <div className="menu-wrapper">
                    <div className="main-menu">
                      <nav className="d-none d-lg-block">
                        <ul id="navigation">
                          <li>
                            <Link to={"/"}>Ana Sayfa</Link>
                          </li>
                          <li>
                            <Link to={"/jobList"}>İş Ara</Link>
                          </li>
                          <li>
                            <a>Hakkımızda</a>
                          </li>
                          <li>
                            <a>Page</a>
                            <ul className="submenu">
                              <li>
                                <Link to={"/jobAdvertisementAdd"}>İş İlanı Ekle</Link>
                              </li>
                              <li>
                                <a>Blog Details</a>
                              </li>
                              <li>
                                <a>Elements</a>
                              </li>
                              <li>
                                <a>job Details</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to={"/contact"}>İletişim</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className="header-btn d-none f-right d-lg-block">
                      {!loggedIn && (
                        <>
                          <Link to={"/register"} className="btn head-btn1">
                            Kayıt Ol
                          </Link>
                          <Link to={"/login"} className="btn head-btn2">
                            Giriş Yap
                          </Link>
                        </>
                      )}

                      {loggedIn && (
                        <>
                          <Link to={"/profile"} className="btn head-btn1">
                            Profil
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mobile menu d-block d-lg-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
