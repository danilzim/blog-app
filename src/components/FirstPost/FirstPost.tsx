import styles from "./FirstPost.module.css";
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
    <div className={styles.post}>
      <div className={styles.img__wrapper}>
        <img
          className={styles.img}
          src="https://placehold.co/600x400"
          alt="post"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>{post.title}</h2>
          <div>
            <button className={styles.button__likes} onClick={incrementLikes}>
              <img
                className={styles.icon__likes}
                src="/icons/like.svg"
                alt="none"
              ></img>
            </button>
            <span className={styles.number}>{likes}</span>
            <button className={styles.button__dislikes} onClick={incrementDislikes}>
              <img
                className={styles.icon__likes}
                src="/icons/dislike.svg"
                alt="none"
              ></img>
            </button>
            <span className={styles.number}>{dislikes}</span>
          </div>
        </div>
        <div className={styles.body}>{post.body}</div>
        <div className={styles.footer}>
          <button
            className={styles.button}
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
