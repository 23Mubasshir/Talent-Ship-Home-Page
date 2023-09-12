import "./Services.css";
const Services = () => {
  return (
    <>
      <div className="services-banner" style={{ paddingTop: "0px" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path fill="#fff" d="M738,99l262-93V0H0v5.6L738,99z"></path>
        </svg>
        <h1
          style={{
            fontFamily: "monospace",
            textTransform: "uppercase",
            fontWeight: "800",
            color: "#fff",
            textAlign: "center",
            marginBottom: "52px",
            marginTop: "50px",
          }}
        >
          Services
        </h1>
        <div className="services-content" style={{ paddingBottom: "100px" }}>
          <div style={{ alignItems: "center" }} className="d-md-flex">
            <div className="services-card">
              <img
                style={{ width: "100%" }}
                src="https://i.ibb.co/yV7W8KX/service1.jpg"
                alt=""
              />
            </div>
            <div className="ps-md-5 text-white services-card ">
              <h1 style={{ fontSize: "29px" }}>QUISQUE DYNAMIC</h1>
              <p>
                Aenean consequat sapien ut libero ultricies placerat. Quisque
                euismod ac risus eget malesuada. Sed a convallis mauris. Aenean
                gravida leo ut rutrum tincidunt. Proin auctor porttitor orci, at
                scelerisque elit porta id.
              </p>
              <button className="btns px-5 py-3 rounded-0 fw-bold">
                READ MORE
              </button>
            </div>
          </div>
          <div style={{ alignItems: "center" }} className="d-md-flex">
            <div className="services-card order-md-2">
              {" "}
              {/* For small devices, this div appears first */}
              <img
                style={{ width: "100%" }}
                src="https://i.ibb.co/3ymwWyK/service2.jpg"
                alt=""
              />
            </div>
            <div className="services-card text-white pe-md-5 order-md-1">
              {" "}
              {/* For small devices, this div appears second */}
              <h1 style={{ fontSize: "29px" }}>QUISQUE DYNAMIC</h1>
              <p>
                Aenean consequat sapien ut libero ultricies placerat. Quisque
                euismod ac risus eget malesuada. Sed a convallis mauris. Aenean
                gravida leo ut rutrum tincidunt. Proin auctor porttitor orci, at
                scelerisque elit porta id.
              </p>
              <button className="btns px-5 py-3 rounded-0 fw-bold">
                READ MORE
              </button>
            </div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          style={{ transform: "scale(-1)" }}
          rotate={"180deg"}
        >
          <path d="M738,99l262-93V0H0v5.6L738,99z"></path>
        </svg>
      </div>
    </>
  );
};

export default Services;
