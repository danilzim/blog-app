import "./FirstPost.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRandomNumber } from "../../functions/gerRandomNumber";
import { IPost } from "../../type/type";

interface PostItemProps {
  post: IPost;
}

const FirstPost = ({ post }: PostItemProps) => {
  const [likes, setLikes] = useState<number>(getRandomNumber(0, 50));
  const [dislikes, setDislikes] = useState<number>(getRandomNumber(0, 50));
  const router = useNavigate();

  function incrementLikes() {
    setLikes(likes + 1);
  }

  function incrementDislikes() {
    setDislikes(dislikes + 1);
  }

  return (
    <div className="first-post">
      <div className="first-post__img">
        <img
          className="img-first-post"
          src="https://placehold.co/600x400"
          alt="post"
        />
      </div>
      <div className="first-post-content">
        <div className="first-post__header">
          <h2 className="first-post__title">{post.title}</h2>
          <div>
            <button className="button__likes" onClick={incrementLikes}>
              <img
                className="icon__likes"
                src="/icons/like.svg"
                alt="none"
              ></img>
            </button>
            <span className="likes-number">{likes}</span>
            <button className="button__dislikes" onClick={incrementDislikes}>
              <img
                className="icon__likes"
                src="/icons/dislike.svg"
                alt="none"
              ></img>
            </button>
            <span className="likes-number">{dislikes}</span>
          </div>
        </div>
        <div className="first-post__body">{post.body}</div>
        <div className="first-post__footer">
          <button
            className="button"
            onClick={() => router(`/posts/${post.id}`)}
          >
            Читать далее
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstPost;
