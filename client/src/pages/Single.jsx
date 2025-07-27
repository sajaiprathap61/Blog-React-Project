import { React, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Image1 from "../images/Image1.jpg";
import Image6 from "../images/Image6.jpg";
import Edit from "../images/Edit.png";
import Delete from "../images/Delete.png";
import Menu from "../pages/Menu";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import moment from "moment";
import axios from "axios";

const Single = () => {
  const [post, setPost] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/posts/${postId}`
        );
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/posts/${postId}`);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="single">
      <div className="content">
        <img src={post?.img} />
        <div className="user">
          {post.userImg && <img src={post.userImg} />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`}>
                <img src={Edit} />
              </Link>
              <Link>
                <img onClick={handleDelete} src={Delete} />
              </Link>
            </div>
          )}
        </div>
        <div className="article">
          <h1>{post.title}</h1>
          {post.description}
        </div>
      </div>
      <Menu cat={post.cat} />
    </div>
  );
};

export default Single;
