import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faCircleUser,
  faHouse,
  faUsers,
  faCampground,
  faBriefcaseMedical,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";
import {
  faBell,
  faCircleQuestion,
  faGear,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import "./App.css";
export default function ParticipantList() {
  return (
    <div className="bg-lt wd-100">
      <div container>
        <nav className="navbar bg-body-tertiary bg-grey">
          <div className="container-fluid d-flex justify-content-between">
            <div className="d-flex justify-content-start align-items-center ">
              <a className="navbar-brand" height="50px">
                <img
                  src={require("./assets/logo.jpg")}
                  width="70"
                  height="45"
                />
              </a>
              <form class="wid" role="search">
                <input
                  className="form-control ms-0 text-blk  "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>

            <div className=" d-flex justify-content-around  ms-2 mx-3">
              <FontAwesomeIcon
                icon={faCircleQuestion}
                className="px-2"
                size="xl"
              />
              <FontAwesomeIcon icon={faBell} className="px-2" size="xl" />
              <FontAwesomeIcon
                icon={faCircleUser}
                className="px-2 align-self-center"
                size="xl"
              />
              <div>Username</div>
            </div>
          </div>
        </nav>
        <div>
          <div className="row wd-80">
            <div className="col-1 ps-1 text-center border border-3 border-secondary mb-0">
              <ul class="nav flex-column ms-1 pt-1">
                <li class="nav-item px-0 py-1">
                  {/* <div className='align-items-center'> */}
                  <a class="nav-link" aria-current="page" href="#">
                    <FontAwesomeIcon icon={faHouse} />
                  </a>
                  <p className="f-2 m0 fw-bold">Dashboard</p>
                  {/* </div> */}
                </li>
                <li class="nav-item px-0 py-1">
                  <div className="align-items-center">
                    <a class="nav-link" aria-current="page" href="#">
                      <FontAwesomeIcon icon={faCampground} />
                    </a>
                    <div className="f-2 m0 fw-bold">Campus</div>
                  </div>
                </li>
                <li class="nav-item px-0 py-1">
                  <div className="align-items-center">
                    <a class="nav-link" aria-current="page" href="#">
                      <FontAwesomeIcon icon={faUsers} />
                    </a>
                    <div className="f-2 m0 fw-bold">Participants</div>
                  </div>
                </li>
                <li class="nav-item px-0 py-1">
                  <div className="align-items-center">
                    <a class="nav-link" aria-current="page" href="#">
                      <FontAwesomeIcon icon={faUsers} />
                    </a>
                    <div className="f-2 m0 fw-bold">Support staff</div>
                  </div>
                </li>
                <li class="nav-item px-0 py-1">
                  <div className="align-items-center">
                    <a class="nav-link" aria-current="page" href="#">
                      <FontAwesomeIcon icon={faBriefcaseMedical} />
                    </a>
                    <div className="f-2 m0 fw-bold">Medical Records</div>
                  </div>
                </li>
                <li class="nav-item px-0 py-1">
                  <div className="align-items-center">
                    <a class="nav-link" aria-current="page" href="#">
                      <FontAwesomeIcon icon={faClipboardCheck} />
                    </a>
                    <div className="f-2 m0 fw-bold">Reports</div>
                  </div>
                </li>
                <li class="nav-item px-0 py-1">
                  <div className="align-items-center">
                    <a class="nav-link" aria-current="page" href="#">
                      <FontAwesomeIcon icon={faClipboardCheck} />
                    </a>
                    <div className="f-2 m0 fw-bold">Settings</div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-11 bg-lt">
              <div className="my-4">
                <FontAwesomeIcon icon={faUsers} />
                <span className="fw-bold ms-3">Participants List</span>
              </div>
              <div className="d-flex justify-content-between border border-dark border-2 align-items-center hd-80 ms-2 py-2 px-2 rounded my-3 bg-light">
                <div>
                  Camp Name{" "}
                  <span class="badge rounded-pill text-bg-light border border-secondary border-2 p-2 mx-1 text-secondary fw-normal">
                    Support Camp
                  </span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faUser} size="1x" />
                  <span className="mx-1 f-15">10/30</span>
                </div>
              </div>
              <div className="d-flex justify-content-between border border-dark border-2 align-items-center hd-80 ms-2 py-2 px-2 rounded my-3 bg-light">
                <div>
                  Camp Name{" "}
                  <span class="badge rounded-pill text-bg-light border border-secondary border-2 p-2 mx-1  fw-normal">
                    Girls Camp
                  </span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faUser} size="1x" />
                  <span className="mx-1 f-15">15/20</span>
                </div>
              </div>
              <div className="d-flex justify-content-between border border-dark border-2 align-items-center hd-80 ms-2 py-2 px-2 rounded my-3 bg-light">
                <div>
                  Camp Withnell{" "}
                  <span class="badge rounded-pill text-bg-light border border-secondary border-2 p-2 mx-1 fw-normal">
                    
                    Boys Camp
                  </span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faUser} size="1x" />
                  <span className="mx-1 f-15">30/30</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
