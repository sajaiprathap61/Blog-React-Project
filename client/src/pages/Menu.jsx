import Image1 from "../images/Image1.jpg";
import Image2 from "../images/Image2.jpg";
import Image3 from "../images/Image3.jpg";
import Image4 from "../images/Image4.jpg";
import { Link } from "react-router-dom";

const Menu = () => {
  const posts = [
    {
      id: 1,
      title: "What is Lorem Ipsum? Where does it come from?",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      img: Image1,
    },
    {
      id: 2,
      title: "What is Lorem Ipsum? Where does it come from?",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      img: Image2,
    },
    {
      id: 3,
      title: "What is Lorem Ipsum? Where does it come from?",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      img: Image3,
    },
    {
      id: 4,
      title: "What is Lorem Ipsum? Where does it come from?",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      img: Image4,
    },
  ];

  return (
    <div className="menu">
      <h3>Other post you may like</h3>
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <img src={post.img} />
            <Link className="link" to={`/post/${post.id}`}>
              <h3>{post.title}</h3>
            </Link>
            <Link to={`/post/${post.id}`}>
              <button classNam>Read More</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
