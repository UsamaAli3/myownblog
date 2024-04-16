import React, { useState, useEffect } from "react";
import Container from "../components/container/Container";
import PostCard from "../components/PostCard";
import appwriteService from "../appwrite/config";
import { PiSpinner } from "react-icons/pi";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    }).finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  ) : (
    <PiSpinner className="animate-spin text-black text-3xl m-auto h-[50px]" />
  );
}

export default AllPosts;
