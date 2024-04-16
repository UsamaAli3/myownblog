import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Container from "../components/container/Container";
import Button from "../components/Button";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import appwriteService from "../appwrite/config";
import { PiSpinner } from "react-icons/pi";

function Post() {
  const [post, setPost] = useState(null);
  const navigate = useNavigate();
  const { slug } = useParams();
  const userData = useSelector((state) => {
    return state.auth.userData;
  });
  const isAuthor = post && userData ? post.userId === userData.$id : false;
  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else {
      return navigate("/");
    }
  }, [slug, navigate]);
  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
    console.log(post.$id);
  };
  return post ? (
    <div>
      <div>
        <Container>
          <div className="relative">
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
            />
            {isAuthor && (
              <div className="absolute right-6 top-6">
                <Link to={`/edit-post/${post.$id}`}>
                  <Button>Edit</Button>
                </Link>
                <Button bgColor="bg-red-500" onClick={deletePost}>
                  Delete
                </Button>
              </div>
            )}
          </div>
          <div>
            <h1>{post.title}</h1>
          </div>
          <div className="browser-css">{parse(post.content)}</div>
        </Container>
      </div>
    </div>
  ) : (
    <PiSpinner className="animate-spin text-black text-3xl m-auto h-[50px]" />
  );
}

export default Post;
