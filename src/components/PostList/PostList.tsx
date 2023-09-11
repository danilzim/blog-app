import styles from "./PostList.module.css"
import {IPost} from "../../type/type";
import FirstPost from "../FirstPost/FirstPost";
import AnotherPosts from "../AnotherPosts/AnotherPosts";

interface IPostList {
    posts: IPost[]
}

const PostList = ({posts}: IPostList) => {
    return (
        <div>
            {posts.map((post, index) =>
                index === 0 ? (
                    <FirstPost post={post} key={post.id}/>
                ) : null
            )}
            <div className={styles.wrapper}>
                {posts.map((post, index) =>
                    index === 0 ? null : <AnotherPosts post={post} key={post.id}/>
                )}
            </div>
        </div>
    );
};

export default PostList;
