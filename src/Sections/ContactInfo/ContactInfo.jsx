import "./ContactInfo.css";
import { CiFacebook } from "react-icons/ci";
import {
  PiWhatsappLogoLight,
  PiLinkedinLogoLight,
  PiInstagramLogoLight,
} from "react-icons/pi";

const ContactInfo = () => {
  return (
    <div className="bg-black">
      <div className="container">
      <div className="row bg-black mt-3">
        <div className="col-12 col-sm-6 col-lg-3 text-center p-0">
          <div>
            <div className="social-div d-flex justify-content-center align-items-center">
              <h2 className="text-white fw-light mt-2">
                <CiFacebook className="display-4 pe-2 mb-2" />
                Facebook
              </h2>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3 text-center p-0">
          <div>
            <div className="social-div d-flex justify-content-center align-items-center">
              <h2 className="text-white fw-light mt-2">
                <PiLinkedinLogoLight className="display-4 pe-2 mb-2" />
                Linked in
              </h2>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3 text-center p-0">
          <div>
            <div className="social-div d-flex justify-content-center align-items-center">
              <h2 className="text-white fw-light mt-2">
                <PiInstagramLogoLight className="display-4 pe-2 mb-2" />
                Instagram
              </h2>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3 text-center p-0">
          <div>
            <div className="social-div d-flex justify-content-center align-items-center">
              <h2 className="text-white fw-light mt-2">
                <PiWhatsappLogoLight className="display-5 pe-2 mb-2" />
                Whatsapp
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactInfo;
