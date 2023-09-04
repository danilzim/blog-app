import {useState} from "react";
import {useNavigate} from 'react-router-dom';
import './AnotherPosts.css';
import { getRandomNumber } from "../../functions/gerRandomNumber";
import { IPost } from "../../type/type";

interface ItemPosts {
    post: IPost
}


const AnotherPosts = ({post}:ItemPosts) => {
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

        <div className="another-post">
            <div>
                <img className="img-another-post" src="https://placehold.co/558x280" alt="post"/>
            </div>
            <div className='container-another-content'>
                <h2 className="another-post__title">{post.title}</h2>
                <div className="another-post__footer">
                    <div>
                        <button className="button__likes"
                                onClick={incrementLikes}>
                            <img className="icon__likes" src="/icons/like.svg" alt="none"></img>
                        </button>
                        <span>{likes}</span>
                        <button className="button__dislikes"
                                onClick={incrementDislikes}>
                            <img
                                className="icon__likes"
                                src="/icons/dislike.svg"
                                alt="none"
                            ></img>
                        </button>
                        <span>{dislikes}</span>
                    </div>
                    <button className="button" onClick={() => router(`/posts/${post.id}`)}>Читать далее</button>
                </div>
            </div>

        </div>

    );
};

export default AnotherPosts;
