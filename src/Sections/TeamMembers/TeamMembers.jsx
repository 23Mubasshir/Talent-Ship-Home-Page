import "./TeamMembers.css";
import person1 from "../../assets/person-1.jpg";
import person2 from "../../assets/person-2.jpg";
import person3 from "../../assets/person-3.jpg";
import person4 from "../../assets/person-4.jpg";

const TeamMembers = () => {
  return (
    <div className="team-members-section">
      <div className="team-members-section-bg">
        <div className="container p-5">
          <h1 className="h3 fw-bold">Team Members</h1>
          <h1 className="display-3 fw-normal">Meet Our Experts</h1>
          <div className="row py-5">
            <div className="col col-12 col-md-6 col-lg-3 mb-5">
              <img className="team-member-img" src={person1} alt="" />
              <h5 className="fw-light my-0 mt-2">
                CEO & Founder 
              </h5>
              <h5 className="fw-normal my-2">Sabina Loke</h5>
              <p className="team-member-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida leo ut rutrum tincidunt. Cras at mauris et nisi efficitur finibus.</p>
            </div>
            <div className="col col-12 col-md-6 col-lg-3 mb-5">
              <img className="team-member-img" src={person3} alt="" />
              <h5 className="fw-light my-0 mt-2">
                CFO
              </h5>
              <h5 className="fw-normal my-2">Ajay Shankar</h5>
              <p className="team-member-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida leo ut rutrum tincidunt. Cras at mauris et nisi efficitur finibus.</p>
            </div>
            <div className="col col-12 col-md-6 col-lg-3 mb-5">
              <img className="team-member-img" src={person4} alt="" />
              <h5></h5>
              <h5 className="fw-light my-0 mt-2">
              Product Manager 
              </h5>
              <h5 className="fw-normal my-2 ">Kevin Martin</h5>
              <p className="team-member-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida leo ut rutrum tincidunt. Cras at mauris et nisi efficitur finibus.</p>
            </div>
            <div className="col col-12 col-md-6 col-lg-3 mb-5">
              <img className="team-member-img" src={person2} alt="" />
              <h5 className="fw-light my-0 mt-2">
              Developer 
              </h5>
              <h5 className="fw-normal my-2">Kirat Trivedi</h5>
              <p className="team-member-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida leo ut rutrum tincidunt. Cras at mauris et nisi efficitur finibus.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
