import Star2Img from "../../assets/images/v1/star2.png";
import QuestionImg from "../../assets/images/icon/question.svg";
const faqData = {
  faq1: [
    {
      id: crypto.randomUUID(),
      title: "When is FetchKit launching?",
      text: "We're working hard to bring FetchKit to you soon! While we don't have an exact date yet, we're aiming to launch in the coming few days. Sign up for our newsletter to be the first to know when we go live!",
    },
    {
      id: crypto.randomUUID(),
      title: "What services does FetchKit offer?",
      text: "FetchKit is an all-in-one pet healthcare platform offering AI-powered health assistance, 24/7 vet support, personalized wellness plans, and convenient delivery of vet-approved treatments.",
    },
    {
      id: crypto.randomUUID(),
      title: "How much does FetchKit cost?",
      text: "We're still finalizing our pricing structure. Our goal is to offer affordable, comprehensive pet care. Stay tuned for details!",
    },
  ],
  faq2: [
    {
      id: crypto.randomUUID(),
      title: "How do you differ from regular vet care?",
      text: "FetchKit combines cutting-edge technology with expert vet care to provide accessible, personalized pet healthcare right at your fingertips, 24/7.",
    },
    {
      id: crypto.randomUUID(),
      title: "Do I still need to visit a physical vet clinic?",
      text: "While FetchKit can handle many pet health needs, some situations may still require in-person vet visits. We'll guide you on when that's necessary.",
    },
    {
      id: crypto.randomUUID(),
      title: "Is my pet's data secure with FetchKit?",
      text: " Absolutely. We use state-of-the-art encryption and follow strict privacy protocols to keep your pet's information safe and secure.",
    },
  ],
};
function TwoColumnFaq() {
  return (
    <div className="section aximo-section-padding">
      <div className="container">
        <div className="aximo-section-title center">
          <h2>
            Paws here for
            <span className="aximo-title-animation">
              pre-launch FAQs
              <span className="aximo-title-icon">
                <img src={Star2Img} alt="Star" />
              </span>
            </span>
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="aximo-accordion-normal-wrap responsive-margin">
              {faqData.faq1.map((faq) => (
                <div key={faq.id} className="aximo-accordion-normal-item">
                  <div className="aximo-accordion-normal-icon">
                    <img src={QuestionImg} alt="QuestionImg" />
                  </div>
                  <div className="aximo-accordion-normal-data">
                    <h3>{faq.title}</h3>
                    <p>{faq.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="aximo-accordion-normal-wrap">
              {faqData.faq2.map((faq) => (
                <div key={faq.id} className="aximo-accordion-normal-item">
                  <div className="aximo-accordion-normal-icon">
                    <img src={QuestionImg} alt="QuestionImg" />
                  </div>
                  <div className="aximo-accordion-normal-data">
                    <h3>{faq.title}</h3>
                    <p>{faq.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TwoColumnFaq;
