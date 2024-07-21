import Team1Img from "../../assets/images/team/team1.png";
import Star2Img from "../../assets/images/v1/star2.png";
function SingleTeamDetails() {
  return (
    <div className="section aximo-section-padding2">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="aximo-team-details-thumb">
              <img src={Team1Img} alt="Team" />
            </div>
          </div>
          <div className="col-lg-7 d-flex align-items-center">
            <div className="aximo-default-content m-left-gap">
              <h2>
                <span className="aximo-title-animation">
                  Dr Seanna Fenwick
                  <span className="aximo-title-icon">
                    <img src={Star2Img} alt="Star" />
                  </span>
                </span>{" "}
              </h2>
              <p>
                Hey there! I'm Seanna, the Co-Founder and CEO of FetchKit. I'm a
                qualified vet, licensed to practice in both Europe and North
                America, which has given me a unique perspective on global pet
                care. My journey in veterinary medicine has been incredible,
                starting with my degree from University College Dublin. From
                there, I had the privilege of conducting research at the
                University of Cambridge, treating animals at the University of
                Pennsylvania's renowned New Bolton Centre, and performing
                surgeries at the University of California, Davis.
              </p>
              <p>
                But what really gets me excited is making pet care better and
                more accessible for everyone. That's why I started FetchKit.
                I've seen firsthand how important good veterinary care is, and I
                want to bring that level of care to as many pets as possible.
                We've got a great team here, all sharing the same passion for
                animals. Together, we're working on something that I think could
                really change the game in pet healthcare. It's been quite a
                journey so far, and I can't wait to see where it takes us next!
              </p>
              <div className="aximo-social-icon aximo-btn-wrap">
                <ul>
                  <li>
                    <a href="https://twitter.com" target="_blank">
                      <i className="icon-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://facebook.com" target="_blank">
                      <i className="icon-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com" target="_blank">
                      <i className="icon-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com" target="_blank">
                      <i className="icon-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleTeamDetails;
