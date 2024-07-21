import ThumbImg from "../../../assets/images/v2/thumb.png";
import AboutCounter from "./AboutCounter";
function About() {
  return (
    <div className="aximo-about-section bg-orange extra-side-margin">
      <div id="aximo-counter"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="aximo-thumb" id="rotatetwo">
              <img src={ThumbImg} alt="ThumbImg" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="aximo-default-content clash-grotesk">
              <h2>Smarter Care for Happier Pets</h2>
              <p>
                We get it - taking care of your furry friend can be tricky. Vet
                visits are pricey, advice is confusing, and it feels like you're
                always playing catch-up. That's why we created FetchKit, your
                new go-to for all things pet health.
              </p>
              <p>
                No more stress, no more guesswork. Just happy, healthy pets and
                peace of mind for you. FetchKit makes pet care as easy as a walk
                in the park. It's all about keeping your best friend healthy
                without the hassle. Welcome to pet care made simple.
              </p>
            </div>
            <AboutCounter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
