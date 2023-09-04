import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { URL } from "../../utils/const";
import { IPost } from "../../type/type";
import "./PostIdPages.css";
import { getRandomNumber } from "../../functions/gerRandomNumber";

const PostIdPages: React.FC = () => {
  const params = useParams();
  const [post, setPost] = useState<IPost | null>(null);
  const [likes, setLikes] = useState<number>(getRandomNumber(0, 50));
  const [dislikes, setDislikes] = useState<number>(getRandomNumber(0, 50));

  async function fetchPosts() {
    const response = await fetch(`${URL}?id=${params.id}`);
    const posts = await response.json();

    return posts;
  }

  useEffect(() => {
    fetchPosts().then((post) => setPost(post.find((post: IPost) => post)));
  }, []);

  function incrementLikes() {
    setLikes(likes + 1);
  }

  function incrementDislikes() {
    setDislikes(dislikes + 1);
  }

  return (
    <div>
      <div>
        <div className="post-pages-header">
          <div>
            <Link className="link" to={"/"}>Вернуться к статьям</Link>
          </div>
          <div>
            <button className="button__likes" onClick={incrementLikes}>
              <img
                className="icon__likes"
                src="/icons/like.svg"
                alt="none"
              ></img>
            </button>
            <span>{likes}</span>
            <button className="button__dislikes" onClick={incrementDislikes}>
              <img
                className="icon__likes"
                src="/icons/dislike.svg"
                alt="none"
              ></img>
            </button>
            <span>{dislikes}</span>
          </div>
        </div>
        <h1 className="post-pages-title">{post?.title}</h1>
        <div className="post-pages-body">
          <div className="image-wrapper">
            <img
              className="post-pages-img"
              src="https://placehold.co/600x400"
              alt="post"
            />
          </div>
          <div>{post?.body}</div>
        </div>
      </div>
    </div>
  );
};

export default PostIdPages;
