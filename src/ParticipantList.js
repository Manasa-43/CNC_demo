import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faCircleUser,faHouse,faUsers,faBriefcaseMedical,faClipboardCheck} from "@fortawesome/free-solid-svg-icons";
import { faBell, faCircleQuestion,faCampground,faGear} from "@fortawesome/free-regular-svg-icons";
import "./App.css";
export default function ParticipantList() {
  return (
    <div>
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
        <div >
          <div className="row">
            <div className="col-1 ps-1 text-center ">
              <ul class="nav flex-column border border-3 border-secondary ms-0">
                <li class="nav-item px-0">
                    <div className='align-items-center'>
                    <a class="nav-link" aria-current="page" href="#">
                    <FontAwesomeIcon icon={faHouse}/>
                  </a>
                  <div className='f-2 m0 fw-bold'>Home</div>
                    </div>
                  
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Link
                  </a>
                  
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled">Disabled</a>
                </li>
              </ul>
            </div>
            <div className="col-11">col11</div>
          </div>
        </div>
        {/* <ul class="nav flex-column border border-3 border-secondary">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Disabled</a>
  </li>
</ul> */}
      </div>
    </div>
  );
}
