import { useEffect, useState } from "react";
import { getPosts } from "../services";

export const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPosts();
      console.log(data);
      setPosts(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h3>List of posts</h3>
      <div>
        {posts.length &&
          posts.map((x) => <li key={Math.random()}>{x.title}</li>)}
      </div>
    </div>
  );
};
