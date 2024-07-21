import Thumb1Img from "../../../assets/images/v1/t_thumb1.png";
import Thumb2Img from "../../../assets/images/v1/t_thumb2.png";
import Thumb3Img from "../../../assets/images/v1/t_thumb3.png";
import TestimonialCard from "./TestimonialCard";
const testimonialsData = [
  {
    id: crypto.randomUUID(),
    rating: 5,
    content:
      "I've been trying to find the best flea/wormer for a while now and decided on this one! It's so helpful that the flea treatment gets delivered to you each month so you never forget.",
    author: "Smith Align",
    designation: "",
    img: Thumb1Img,
  },
  {
    id: crypto.randomUUID(),
    rating: 5,
    content:
      "What a transformation! Roo has gone from extra jittery to cool as a cucumber. Great product recommendations - couldn’t have picked better myself. They’ve done the trick!",
    author: "Willium Joe",
    designation: "",
    img: Thumb2Img,
  },
  {
    id: crypto.randomUUID(),
    rating: 5,
    content:
      "Neo's breath used to be less than desirable. Since using Itch's dental toothpaste, we've noticed such a difference. And it's so convenient getting his flea &amp; worming treatment delivered at the same time.",
    author: "Adrew Maslo",
    designation: "",
    img: Thumb3Img,
  },
];
function Testimonials() {
  return (
    <div className="bg-orange aximo-section-padding extra-side-margin">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="aximo-default-content clash-grotesk aximo-sticky">
              <h2>Happy Pets, Happy Owners</h2>
              <p>
                Your appreciation makes us happier than a dog with two tails!
                It's the perfect scratching post for our efforts.
              </p>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="aximo-testimonial-column">
              {testimonialsData.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
