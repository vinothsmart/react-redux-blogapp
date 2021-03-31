import PostCard from "./PostCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "../../actions/postAction";

const Posts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  const posts = useSelector((state) => state.post.posts);

  return (
    <div className="row">
      {posts.map((postItem) => (
        <PostCard postItem={postItem} />
      ))}
    </div>
  );
};

export default Posts;
