import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCoffee,
  faCircleUser,faHouse,faUsers,faCampground,faBriefcaseMedical,faClipboardCheck,} from "@fortawesome/free-solid-svg-icons";
import {faBell,faCircleQuestion,faGear,faUser,} from "@fortawesome/free-regular-svg-icons";
// import "./App.css";
export default function ChangeSuitability(){
    return(

<div >
<nav className="navbar navbar-expand-lg bg-body-tertiary bg-grey">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <img src={require("../assets/logo.jpg")} height='50px' width='90px'></img>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <div className='d-flex justify-content-between'>
        <form className="d-flex" role="search">
        <input className="form-control me-2 " size= "50" type="search" placeholder="Search" aria-label="Search"/>
      </form>
        </div>
    </div>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <div>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item align-self-center">
          {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
          <FontAwesomeIcon
                icon={faCircleQuestion}
                className="px-2"
                size="xl"
              />
        </li>
        <li className="nav-item align-self-center">
          {/* <a className="nav-link" href="#">Link</a> */}
          <FontAwesomeIcon icon={faBell} className="px-2" size="xl" />
        </li>
        <li className="nav-item dropdown align-self-center">
          {/* <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a> */}
          <FontAwesomeIcon
                icon={faCircleUser}
                className="px-2 align-self-center"
                size="xl"
              />
          
        </li>
        <li className="nav-item">
          {/* <a className="nav-link disabled">Disabled</a> */}
          <div className='align-self-center'>Username</div>
        </li>
      </ul>
        </div>
    
    </div>
  </div>
</nav>
<div className='row  position-relative'>
    {/* <div className='col-1'> */}
    <div className="col-1 col-sm-1 text-center border border-3 border-secondary wd-80">
              <ul class="nav flex-column pt-1">
                <li class="nav-item py-1">
                  {/* <div className='align-items-center'> */}
                  <a class="nav-link" aria-current="page" href="#">
                    <FontAwesomeIcon icon={faHouse} />
                  </a>
                  <p className="f-2 m0 fw-bold">Dashboard</p>
                  {/* </div> */}
                </li>
                <li class="nav-item py-1">
                  <div className="align-items-center">
                    <a class="nav-link" aria-current="page" href="#">
                      <FontAwesomeIcon icon={faCampground} />
                    </a>
                    <div className="f-2 m0 fw-bold">Campus</div>
                  </div>
                </li>
                <li class="nav-item py-1">
                  <div className="align-items-center">
                    <a class="nav-link" aria-current="page" href="#">
                      <FontAwesomeIcon icon={faUsers} />
                    </a>
                    <div className="f-2 m0 fw-bold">Participants</div>
                  </div>
                </li>
                <li class="nav-item py-1">
                  <div className="align-items-center">
                    <a class="nav-link" aria-current="page" href="#">
                      <FontAwesomeIcon icon={faUsers} />
                    </a>
                    <div className="f-2 m0 fw-bold">Support staff</div>
                  </div>
                </li>
                <li class="nav-item py-1">
                  <div className="align-items-center">
                    <a class="nav-link" aria-current="page" href="#">
                      <FontAwesomeIcon icon={faBriefcaseMedical} />
                    </a>
                    <div className="f-2 m0 fw-bold">Medical Records</div>
                  </div>
                </li>
                <li class="nav-item py-1">
                  <div className="align-items-center">
                    <a class="nav-link" aria-current="page" href="#">
                      <FontAwesomeIcon icon={faClipboardCheck} />
                    </a>
                    <div className="f-2 m0 fw-bold">Reports</div>
                  </div>
                </li>
                <li class="nav-item py-1">
                  <div className="align-items-center">
                    <a class="nav-link" aria-current="page" href="#">
                      <FontAwesomeIcon icon={faClipboardCheck} />
                    </a>
                    <div className="f-2 m0 fw-bold">Settings</div>
                  </div>
                </li>
              </ul>
            </div>
    {/* </div> */}
    <div className=' col-11 col-sm-11'>
        <div className='m-4'>
            <h5>Jason Application Status</h5>
        </div>
        <div>
        <table className="table table-bordered border-secondary table-sm hd-80 mx-4 my-4">
  <thead>
    <tr className='text-center bg-grey' >
      <th scope="col">Service Agreement</th>
      <th scope="col">Funding</th>
      <th scope="col">Suitability</th>
      {/* <th scope="col">Handle</th> */}
    </tr>
  </thead>
  <tbody>
    
    <tr className='text-center txt-red mx-3'>
      <td scope="row" className='px-5' >Sent</td>
      <td scope="row" className='px-5'>Pending Funding</td>
      <td scope="row">
        <div className='d-flex justify-content-center px-5'>
        <div>Pending Suitability-per screen</div>
        <div class="badge rounded-pill border border-secondary border-2 py-1 px-2 ms-3 me-3 fw-normal text-secondary align-self-end">
           Change</div>
        </div>
        </td> 
    </tr>
    <tr className='text-center txt-red mx-3'>
      <td scope="row" className='px-5 txt-green' >Signed</td>
      <td scope="row" className='px-5'>Pending Funding</td>
      <td scope="row">
        <div className='d-flex justify-content-center px-5'>
        <div>Pending Suitability-other</div>
        <div class="badge rounded-pill border border-secondary border-2 py-1 px-2 ms-3 me-3 fw-normal text-secondary align-self-end">
           Change</div>
        </div>
        </td> 
    </tr>
    <tr className='text-center txt-red mx-3'>
      <td scope="row" className='px-5 text-dark' >Draft</td>
      <td scope="row" className='px-5'>Pending Payment</td>
      <td scope="row">
        <div className='d-flex justify-content-center px-5'>
        <div>Pending Suitability-per screen</div>
        <div class="badge rounded-pill border border-secondary border-2 py-1 px-2 ms-3 me-3 fw-normal text-secondary align-self-end">
           Change</div>
        </div>
        </td> 
    </tr>
    <tr className='text-center txt-red mx-3'>
      <td scope="row" className='px-5 ' >Sent</td>
      <td scope="row" className='px-5'>Funding</td>
      <td scope="row">
        <div className='d-flex justify-content-center px-5 txt-green'>
        <div>Suitability Confirmed</div>
        {/* <div class="badge rounded-pill border border-secondary border-2 py-1 px-2 ms-3 me-3 fw-normal text-secondary align-self-end">
           Change</div> */}
        </div>
        </td> 
    </tr>
    <tr className='text-center txt-green mx-3'>
      <td scope="row" className='px-5 ' >Signed</td>
      <td scope="row" className='px-5'>Funding</td>
      <td scope="row">
        <div className='d-flex justify-content-center px-5 '>
        <div>Suitability Confirmed</div>
        {/* <div class="badge rounded-pill border border-secondary border-2 py-1 px-2 ms-3 me-3 fw-normal text-secondary align-self-end">
           Change</div> */}
        </div>
        </td> 
    </tr>  
  </tbody>
</table>
        </div >
        
    </div>
</div>
<div class="position-absolute top-50 start-50 translate-middle">
        <div class="card border border-secondary border-2 rounded-4 py-3 px-3 ">
  <div classsName="card-body ">
    <div className='d-flex flex-column'>
    <div class="badge rounded-pill border border-secondary border-2 py-2 px-3 my-2 mx-3 fw-normal text-secondary ">
    Pending Suitability-other
    </div>
    <div class="badge rounded-pill border border-secondary border-2 py-2 px-3 my-2 mx-3 fw-normal text-secondary ">
   Suitability Confirmed
    </div>
    <div class="badge rounded-pill text-bg-secondary border border-2 border-secondary py-2  my-2 mx-5 fw-normal ">Confirm</div>

    </div>
  
  </div>
</div>
        </div>
</div>
    )
}