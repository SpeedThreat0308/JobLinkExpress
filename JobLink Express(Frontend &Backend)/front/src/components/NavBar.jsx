import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/BootStrap.css";
import "../assets/css/Dum.css";
// import Home from "../pages/HomePage";
import { useSelector } from "react-redux";
import Modal from "../pages/modal";

function NavBar({timeline, ease}) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen,setModalOpen]=useState(false)
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const Checkrole = useSelector(state => state.allroles.roles[0]?.Checkrole);

  console.log(Checkrole);

  return (
    <>
      <div id="main-wrapper">
        <div class="header header-transparent change-logo">
          <div class="container">
            <nav id="navigation" className="navigation navigation-landscape">
              <div className="nav-menus-wrapper">
                <div className="mobile-nav" onClick={toggleMobileMenu}>
                  <i className="fas fa-bars" style={{ color: "black" }}></i>
                </div>
                <div>
                  <ul className="primary-menu" style={{ paddingLeft: 100 }}>
                    <li>
                      <Link to={"/"} className="active">
                        Home
                      </Link>
                    </li>
                    <li>{/* <Link to={"/About"}>About</Link> */}</li>
                    <li>
                      <a href="#">Works</a>
                    </li>
                    <li>
                      <a href="#">Candidates Resume</a>
                    </li>
                      <a href="#">About</a>
                    <li>
                    </li>
                    <Link to={"/Contact"}>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    </Link>

                    <ul
                      className="nav-menu nav-menu-social align-to-right"
                      style={{ paddingLeft: 70 }}
                    >

              {Checkrole ? null : (
                        <li>
                          <a
                            style={{ cursor: "pointer" }}
                            className="ft-medium"
                            onClick={() => {
                              setModalOpen(true);
                            }}
                          >
                            Sign In
                          </a>
                        </li>
                      )} 


                            <Link to="/Dash">
                      <li className="add-listing">
                        <button className="btn btn-md theme-bg rounded text-light hover-theme">
                          Profile
                        </button>
                      </li>
                          </Link>
                        
                    </ul>
                  </ul>
                        {modalOpen && <Modal setOpenModal={setModalOpen}/>}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
