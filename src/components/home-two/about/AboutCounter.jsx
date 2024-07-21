import CountUp from "react-countup";
function AboutCounter() {
  return (
    <div className="aximo-counter-wrap2">
      <div className="aximo-counter-data2">
        <h2>
          <span className="aximo-counter">
            <CountUp end={98} duration={5} redraw={true} enableScrollSpy />
          </span>
          %
        </h2>
        <p>Customer Satisfaction</p>
      </div>

      <div className="aximo-counter-data2">
        <h2>
          <span className="aximo-counter">
            <CountUp end={43} duration={5} redraw={true} enableScrollSpy />
          </span>
          %
        </h2>
        <p>Improvement in pet health outcomes</p>
      </div>
    </div>
  );
}

export default AboutCounter;
