import { Link } from "react-router-dom";
import { blogs } from "./data";

const Blogs = () => {
  return (
    <div className="container" style={{ background: "white" }}>
      <div className="--center-all">
        <h1>Blogs Page</h1>
        <p>
          Welcome to the <b>Blogs</b>page
        </p>
      </div>
      <article>
        {blogs.map((blog) => {
          const { id, title, author } = blog;
          return (
            <div key={id} className="--card --m --p">
              <h4>{title}</h4>
              <p>By {author}</p>
              <Link to={`/blog/${id}`} className="">
                Read More
              </Link>
            </div>
          );
        })}
      </article>
    </div>
  );
};

export default Blogs;
