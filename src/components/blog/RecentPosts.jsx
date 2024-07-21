import Blog1Img from "../../assets/images/v2/blogpet1.png";
import Blog2Img from "../../assets/images/v2/blogpet2.png";
import Blog3Img from "../../assets/images/v2/blogpet3.png";
import { Link } from "react-router-dom";
const recentPostData = [
  {
    id: crypto.randomUUID(),
    title: "5 Essential Grooming Tips",
    date: "June 18, 2024",
    img: Blog1Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Understanding Your Pet's",
    date: "June 18, 2024",
    img: Blog2Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Nutrition 101: Crafting ",
    date: "June 18, 2024",
    img: Blog3Img,
  },
];
function RecentPosts() {
  return (
    <div className="widget aximo_recent_posts_Widget">
      <h3 className="wp-block-heading">Recent Posts:</h3>

      {recentPostData.map((post) => (
        <div className="post-item" key={post.id}>
          <div className="post-thumb">
            <Link to="/single-blog">
              <img src={post.img} alt={post.title} />
            </Link>
          </div>
          <div className="post-text">
            <div className="post-date">{post.date}</div>
            <Link className="post-title" to="/single-blog">
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecentPosts;
