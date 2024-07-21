function FaqAccordion() {
  return (
    <>
      <div className="col-lg-6">
        <div
          className="accordion aximo-accordion-wrap2"
          id="aximo-accordion-col1"
        >
          <div className="accordion-item ">
            <h3 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
              >
                What is FetchKit?
              </button>
            </h3>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#aximo-accordion-col1"
            >
              <div className="accordion-body">
                FetchKit is an all-in-one pet healthcare subscription service
                created by vets that provides comprehensive care for your pet
                throughout their life
              </div>
            </div>
          </div>
          <div className="accordion-item ">
            <h3 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
              >
                How does the AI health assistant work?
              </button>
            </h3>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#aximo-accordion-col1"
            >
              <div className="accordion-body">
                Our AI health assistant uses your pet's unique data to provide
                personalised advice, health tracking, and timely reminders for
                preventative care.
              </div>
            </div>
          </div>
          <div className="accordion-item ">
            <h3 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
              >
                Can I speak to a real vet through FetchKit?
              </button>
            </h3>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#aximo-accordion-col1"
            >
              <div className="accordion-body">
                Yes, we offer 24/7 access to qualified veterinarians for online
                consultations and support.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-6">
        <div
          className="accordion aximo-accordion-wrap2"
          id="aximo-accordion-col2"
        >
          <div className="accordion-item ">
            <h3 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
              >
                How does the preventative care subscription work?
              </button>
            </h3>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#aximo-accordion-col2"
            >
              <div className="accordion-body">
                We deliver vet-approved treatments to your door based on your
                pet's specific needs and schedule.
              </div>
            </div>
          </div>
          <div className="accordion-item ">
            <h3 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
              >
                What if my pet needs in-person vet care?
              </button>
            </h3>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              data-bs-parent="#aximo-accordion-col2"
            >
              <div className="accordion-body">
                While we provide extensive online support, we also guide you on
                when in-person care is necessary and can help you find local
                vets.
              </div>
            </div>
          </div>
          <div className="accordion-item ">
            <h3 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
              >
                Can I cancel my subscription at any time?
              </button>
            </h3>
            <div
              id="collapseSix"
              className="accordion-collapse collapse"
              data-bs-parent="#aximo-accordion-col2"
            >
              <div className="accordion-body">
                Yes, you can cancel your FetchKit subscription at any time. We
                believe in flexibility and want you to feel comfortable with our
                service. There are no long-term commitments or cancellation
                fees.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FaqAccordion;
