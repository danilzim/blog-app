import "../../App.css";
import { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { IPost } from "../../type/type";
import { URL } from "../../utils/const";
import PostList from "../../components/PostList/PostList";

async function fetchPosts(search: string) {
  const qp = search ? `?title=${search}` : "";
  const url = `${URL}${qp}`;
  const response = await fetch(url);
  const posts = await response.json();

  return posts;
}

function Posts() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [search, setSearch] = useState<string>("");

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    fetchPosts(debouncedSearch).then((posts) => setPosts(posts));
  }, [debouncedSearch]);

  return (
    <div className="container-posts-page">
      <h1 className="title">Блог</h1>
      <div className="description">
        Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а
        также переводим зарубежные статьи
      </div>
      <input
        className="input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Поиск по названию статьи"
      ></input>
      {posts.length > 0 && <PostList posts={posts} />}
    </div>
  );
}

export default Posts;
