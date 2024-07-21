import StarImg from "../../../assets/images/v2/shape-star.png";
import Thumb1Img from "../../../assets/images/v2/h-thumb1.png";
import Thumb2Img from "../../../assets/images/v2/h-thumb2.png";
import Thumb3Img from "../../../assets/images/v2/h-thumb3.png";
import Thumb4Img from "../../../assets/images/v2/h-thumb4.png";
import Thumb5Img from "../../../assets/images/v2/h-thumb5.png";
import ServiceCard from "./ServiceCard";

const servicesData = [
  {
    id: crypto.randomUUID(),
    title: "Tailored Wellness",
    description:
      "Personalised care plans that evolve with your pet's needs. From custom diets to targeted treatments, we've got your furry friend covered.",
    img: Thumb1Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Vet Access 24/7",
    description:
      "Expert veterinary advice available around the clock, just a click away. No more waiting or wondering – get the answers you need, when you need them.",
    img: Thumb2Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Preventive Care",
    description:
      "Stay ahead of health issues with regular, vet-approved treatments delivered direct to your door.",
    img: Thumb3Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Proactive Health",
    description:
      "Our smart system analyzes your pet's data, sending timely reminders for vaccines, check-ups, and preventative care. ",
    img: Thumb4Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Lifelong Guidance",
    description:
      "Our adaptive care evolves with your pet, providing age-appropriate support, advice, and treatments throughout their life journey.",
    img: Thumb5Img,
  },
];

function Services() {
  return (
    <div className="section aximo-section-padding position-relative">
      <div className="container">
        <div className="aximo-section-title center clash-grotesk">
          <h2>Your Pet's Lifelong Wellness Partner</h2>
        </div>
      </div>
      <div className="aximo-increase-shape">
        <img src={StarImg} alt="StarImg" />
      </div>
      <div className="aximo-service-increase-wrap">
        {servicesData.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}

export default Services;
