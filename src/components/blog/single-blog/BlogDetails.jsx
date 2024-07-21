import { LazyLoadImage } from "react-lazy-load-image-component";
import Blog3PreviewImg from "../../../assets/images/v2/blogpet1.png";
import Blog3Img from "../../../assets/images/v2/blogpet1.png";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import PostMeta from "./PostMeta";
import PostTags from "./PostTags";
function BlogDetails() {
  return (
    <>
      <div className="post-thumbnail">
        <LazyLoadImage
          src={Blog3Img}
          width={850}
          height={500}
          alt="Single blog image"
          effect="blur"
          placeholderSrc={Blog3PreviewImg}
        />
      </div>
      <div className="single-post-content-wrap">
        <PostMeta />
        <div className="entry-content">
          <h3>5 Essential Grooming Tips for a Happy, Healthy Pet</h3>
          <p>
            Proper grooming is more than just making your pet look good. It's a
            crucial aspect of their overall health and well-being. Here are five
            essential grooming tips to keep your furry friend in top shape.
          </p>

          <span>#1: Master the Art of Brushing</span>
          <p>
            Regular brushing isn't just about preventing tangles. It's a chance
            to bond with your pet, check for skin issues, and distribute natural
            oils throughout their coat. For long-haired pets, daily brushing is
            ideal. Short-haired friends can benefit from weekly sessions.
          </p>

          <span>#2: Nail Care is Crucial</span>
          <p>
            Overgrown nails can cause discomfort and even lead to posture
            problems. Learn to trim your pet's nails safely, or schedule regular
            appointments with a groomer. The click of nails on hard floors is a
            sign it's time for a trim.
          </p>

          <blockquote>
            "Consistent grooming is an investment in your pet's health, comfort,
            and happiness. It's a small effort that yields big rewards."
          </blockquote>

          <span>#3: Dental Hygiene Matters</span>
          <p>
            Dental disease is common in pets and can lead to serious health
            issues. Brush your pet's teeth regularly with pet-safe toothpaste.
            Dental chews and toys can also help maintain oral health between
            brushings.
          </p>

          <span>#4: Bathing: Not Too Much, Not Too Little</span>
          <p>
            While keeping your pet clean is important, over-bathing can strip
            natural oils and dry out their skin. Most dogs need a bath every 1-3
            months, while cats typically groom themselves. Use pet-specific
            shampoos to maintain the right pH balance.
          </p>

          <span>#5: Eyes and Ears Need Attention Too</span>
          <p>
            Regular cleaning of your pet's eyes and ears can prevent infections.
            Use a damp cloth to gently wipe around the eyes. Clean ears with a
            veterinarian-approved solution, being careful not to insert anything
            into the ear canal.
          </p>
          <p>
            Remember, grooming needs can vary based on your pet's breed, age,
            and health condition. Always consult with your veterinarian for
            personalised grooming advice. With these tips, you're on your way to
            keeping your pet looking and feeling their best.
          </p>
          <PostTags />
          {/* <CommentList />
          <CommentForm /> */}
        </div>
      </div>
    </>
  );
}

export default BlogDetails;
