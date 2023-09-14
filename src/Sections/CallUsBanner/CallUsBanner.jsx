import "./CallUsBanner.css";
import { PiHandshakeLight } from "react-icons/pi";
import { PiCertificateLight } from "react-icons/pi";

const CallUsBanner = () => {
  return (
    <div className="call-us-banner">
      <div className="container">
        <div className="row w-75">
          <div className="col-12 col-sm-6 p-0">
            <div className="d-flex justify-content-center align-items-center call-us-banner-col">
              <div className="pe-sm-3 ms-5">
                <h1 className="text-white">
                  Looking for a First-Class <br /> Business Consultant ?
                </h1>
                <button className="button-outline mt-4">Contact Us</button>
              </div>
            <div className= "vertical-line"></div>
            </div>
          </div>
          <div className="col-12 col-sm-6 text-white">
            <div className="d-flex justify-content-center align-items-center call-us-banner-col">
              <div className="">
              
                <div className="d-flex mt-4">
                  <PiHandshakeLight className="fw-bold display-5 mx-3"></PiHandshakeLight>
                  <div>
                    <h1 className="fw-normal">100 +</h1>
                    <p className="ms-2 call-us-banner-small-font">Over 5 years of experience.</p>
                  </div>
                </div>
                <div className="d-flex mt-4">
                  <PiCertificateLight className="fw-bold display-5 mx-3"></PiCertificateLight>
                  <div>
                    <h1 className="fw-normal">40 +</h1>
                    <p className="ms-2 call-us-banner-small-font">More tan 40 Business awards.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallUsBanner;
