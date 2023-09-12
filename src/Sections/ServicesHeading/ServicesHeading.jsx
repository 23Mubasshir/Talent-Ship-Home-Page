import CountUp from "react-countup";
import "./ServicesHeading.css";
import { FiArrowUpRight } from "react-icons/fi";
import { HiPlus } from 'react-icons/hi';

const ServicesHeading = () => {
  return (
    <div className="container consulting-services-section p-4 p-sm-5">
      <div>
        <h1 className="section-header">
          Consulting <br />
          Services
        </h1>
        <hr className="w-100 mt-5" />
        <div className="d-flex justify-content-between">
          <p className="services-slogan m-0 fw-light">
            Empowering Businesses through Strategic Consulting
          </p>
          <button className="services-slogan-row-button m-0">
            All Services{" "}
            <FiArrowUpRight className="services-slogan-row-button-icon"></FiArrowUpRight>
          </button>
        </div>
      </div>
      <div className="row mt-5">
        <div className="mt-3 md:mt-5 col col-12 col-sm-6 col-lg-3">
        <p className="fw-light service-name"> <HiPlus className="me-2 mb-1"/>Marketing Consulting</p>
        <p className="fw-light service-name"> <HiPlus className="me-2 mb-1"/>Website Consulting</p>
        </div>
        <div className="mt-3 md:mt-5 col col-12 col-sm-6 col-lg-3">
        <p className="fw-light service-name"> <HiPlus className="me-2 mb-1"/>Sales Consulting</p>
        <p className="fw-light service-name"> <HiPlus className="me-2 mb-1"/>Legal Consulting</p>
        </div>
        <div className="mt-3 md:mt-5 col col-12 col-sm-6 col-lg-3">
        <p className="fw-light service-name"> <HiPlus className="me-2 mb-1"/>Strategy Consulting</p>
        <p className="fw-light service-name"> <HiPlus className="me-2 mb-1"/>It Consulting</p>
        </div>
        <div className="mt-3 md:mt-5 col col-12 col-sm-6 col-lg-3">
        <p className="fw-light service-name"> <HiPlus className="me-2 mb-1"/>Operations Consulting</p>
        <p className="fw-light service-name"> <HiPlus className="me-2 mb-1"/>Planing Consulting</p>
        </div>
        
      </div>
      <div className="row mt-2">
        <div className="mt-5 col col-6 col-lg-3">
          <h1>
            <CountUp
              className="services-section-number"
              start={10}
              end={89}
              duration={18}
              suffix="%"
            />
          </h1>
          <hr />
          <h5 className="text-start services-section-number-text">Enhanced Strategic Planning</h5>
        </div>
        <div className="mt-5 col-6 col-lg-3">
          <h1>
            <CountUp
              className="services-section-number"
              start={1}
              end={25}
              duration={8}
              suffix="%"
            />
          </h1>
          <hr />
          <h5 className="text-start services-section-number-text">Business with million revenue</h5>
        </div>
        <div className="mt-5 col col-6 col-lg-3">
          <h1>
            <CountUp
              className="services-section-number"
              start={1}
              end={99}
              duration={7}
              suffix="%"
            />
          </h1>
          <hr />
          <h5 className="text-start services-section-number-text">Happy Customers</h5>
        </div>
        <div className="mt-5 col col-6 col-lg-3">
          <h1>
            <CountUp
              className="services-section-number"
              start={20}
              end={55}
              duration={15}
              suffix="+"
            />
          </h1>
          <hr />
          <h5 className="text-start services-section-number-text">Company Connections</h5>
        </div>
      </div>
    </div>
  );
};

export default ServicesHeading;
