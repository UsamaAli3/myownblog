import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import Container from "../components/container/Container.jsx";
import PostCard from "../components/PostCard";
import { PiSpinner } from "react-icons/pi";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    appwriteService
      .getPosts()
      .then((posts) => {
        if (posts) {
          setPosts(posts.documents);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  if (posts.length === 0) {
    return !loading ? (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex h-[50vh] flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    ) : (
      <PiSpinner className="animate-spin text-black text-3xl m-auto h-[50px]" />
    );
  }
  return (
    <div className="w-full py-8 ">
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
  );
}

export default Home;
