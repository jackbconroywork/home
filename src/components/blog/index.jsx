import Categories from "./Categories";
import RecentPosts from "./RecentPosts";
import Search from "./Search";
import Tags from "./Tags";

import Blog1Img from "../../assets/images/v2/blogpet1.png";
import Blog2Img from "../../assets/images/v2/blogpet2.png";
import Blog3Img from "../../assets/images/v2/blogpet3.png";
import BlogCard from "./BlogCard";
import Navigation from "./Navigation";

const blogData = [
  {
    id: crypto.randomUUID(),
    title: "5 Essential Grooming Tips for a Happy, Healthy Pet",
    content:
      "Regular grooming isn't just about keeping your pet looking good. It's a crucial part of their overall health and well-being. Learn these five grooming techniques to ensure your furry friend stays in top shape.",
    category: "Pet Care",
    date: "June 18, 2024",
    img: Blog1Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Understanding Your Pet's Body Language: A Comprehensive Guide",
    content:
      "Pets can't talk, but they're constantly communicating. Learn to decode your pet's body language and strengthen your bond with these expert insights.",
    category: "Pet Behaviour",
    date: "June 18, 2024",
    img: Blog2Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Nutrition 101: Crafting the Perfect Diet for Your Pet",
    content:
      "What you feed your pet directly impacts their health and longevity. Discover how to create a balanced, nutritious diet tailored to your pet's unique needs.",
    category: "Pet Nutrition",
    date: "June 18, 2024",
    img: Blog3Img,
  },
];
function Blog() {
  return (
    <div className="section aximo-section-padding2">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {blogData.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
            {/* <Navigation /> */}
          </div>
          <div className="col-lg-4">
            <div className="right-sidebar">
              <Search />
              <Categories />
              <RecentPosts />
              <Tags />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
