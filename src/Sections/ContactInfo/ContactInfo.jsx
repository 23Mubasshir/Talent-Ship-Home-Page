import "./ContactInfo.css";
// import img1 from "../../assets/social-1.jpg";
// import img2 from "../../assets/social-2.png";
// import img3 from "../../assets/social-3.png";
// import img4 from "../../assets/social-4.png";
import { CiFacebook } from "react-icons/ci";
import {
  PiWhatsappLogoLight,
  PiLinkedinLogoLight,
  PiInstagramLogoLight,
} from "react-icons/pi";

const ContactInfo = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
      >
        <path fill="#000000" d="M738,99l262-93V0H0v5.6L738,99z"></path>
      </svg>
      <div className="container mb-5">
        <div className="">
          <h1 className="section-header pt-5 text-left ">Contact Us </h1>
          <hr className="w-100 mt-5" />
          <div className="row">
            <div className="mt-5 mt-lg-1 col col-12 col-sm-6 col-lg-3 text-center">
              <div>
                <div className="social-div d-flex justify-content-center align-items-center">
                  <h1 className="text-white fw-light mt-2">
                    <CiFacebook className="display-4 me-2 mb-2" />
                    Facebook
                  </h1>
                </div>
              </div>
            </div>
            <div className="mt-5 mt-lg-1 col col-12 col-sm-6 col-lg-3 text-center">
              <div>
                <div className="social-div d-flex justify-content-center align-items-center">
                  <h1 className="text-white fw-light mt-2">
                    <PiLinkedinLogoLight className="display-4 me-2 mb-2" />
                    Linked in
                  </h1>
                </div>
              </div>
            </div>
            <div className="mt-5 mt-lg-1 col col-12 col-sm-6 col-lg-3 text-center">
              <div>
                <div className="social-div d-flex justify-content-center align-items-center">
                  <h1 className="text-white fw-light mt-2">
                    <PiInstagramLogoLight className="display-4 me-2 mb-2" />
                    Instagram
                  </h1>
                </div>
              </div>
            </div>
            <div className="mt-5 mt-lg-1 col col-12 col-sm-6 col-lg-3 text-center">
              <div>
                <div className="social-div d-flex justify-content-center align-items-center">
                  <h1 className="text-white fw-light mt-2">
                    <PiWhatsappLogoLight className="display-4 me-2 mb-2" />
                    Whatsapp
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
