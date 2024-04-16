import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";
function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full p-4 rounded-xl backdrop-blur-sm bg-white/30 mt-1  transition ease-in-out delay-10 hover: -translate-y-1 hover:scale-110 duration-180">
        <div className="w-full justify-center ">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl"
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
