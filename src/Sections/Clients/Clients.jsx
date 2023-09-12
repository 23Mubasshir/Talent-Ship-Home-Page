import "./Clients.css";
import { AiFillStar } from "react-icons/ai";
import img1 from "../../assets/person-4.jpg";
import img2 from "../../assets/person-2.jpg";

const Clients = () => {
  return (
    <div>
      <div className="Clients-comment-section">
        <h1
          style={{
            fontFamily: "monospace",
            textTransform: "uppercase",
            fontWeight: "800",
            color: "#fff",
            textAlign: "center",
          }}
        >
          Our CLIENTS
        </h1>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-6 col-sm-12 text-white">
              <div className="w-100 d-flex align-items-center justify-content-center">
                <div className="w-75">
                  <div className="h3 mb-4 ">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                  <p style={{
                          fontSize: "15px"}}
                          className="fw-light">
                    &#34; Fusce gravida condimentum luctus. Ut semper vel mauris
                    finibus dapibus. Vivamus condimentum tellus elementum
                    venenatis a egestas mauris. &#34;
                  </p>
                  <div className="my-4 d-flex justify-content-start align-items-center">
                    <img src={img1} className="client-image" alt="" />
                    <div className="mx-4 mt-3">
                      <p
                        style={{
                          fontSize: "10px",
                          textTransform: "uppercase",
                          color: "#fff",
                          textAlign: "left",
                        }}
                        className="my-0"
                      >
                        ABC Co.
                      </p>
                      <p className="">Kevin Martin</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 text-white">
              <div className="w-100 d-flex align-items-center justify-content-center">
                <div className="w-75">
                  <div className="h3 mb-4 ">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                  <p style={{
                          fontSize: "15px"}}
                          className="fw-light">
                    &#34; Fusce gravida condimentum luctus. Ut semper vel mauris
                    finibus dapibus. Vivamus condimentum tellus elementum
                    venenatis a egestas mauris. &#34;
                  </p>
                  <div className="my-4 d-flex justify-content-start align-items-center">
                    <img src={img2} className="client-image" alt="" />
                    <div className="mx-4 mt-3">
                      <p
                        style={{
                          fontSize: "10px",
                          textTransform: "uppercase",
                          color: "#fff",
                          textAlign: "left",
                        }}
                        className="my-0"
                      >
                        ABC Co.
                      </p>
                      <p className="">Kevin Martin</p>
                    </div>
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

export default Clients;
