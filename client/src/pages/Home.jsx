import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Title of the Blog",
      desc: "Some related description about the Blog",
      img: "Url of the Blog",
    },
    {
      id: 2,
      title: "Title of the Blog",
      desc: "Some related description about the Blog",
      img: "Url of the Blog",
    },
    {
      id: 3,
      title: "Title of the Blog",
      desc: "Some related description about the Blog",
      img: "Url of the Blog",
    },
    {
      id: 4,
      title: "Title of the Blog",
      desc: "Some related description about the Blog",
      img: "Url of the Blog",
    },
  ];

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
