import "../../App.css";
import { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { IPost } from "../../type/type";
import PostList from "../../components/PostList/PostList";
import { fetchPosts } from "../../api/fetchPosts";
import React from "react";


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
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
        type="text"
        placeholder="Поиск по названию статьи"
      ></input>
      {posts.length > 0 && <PostList posts={posts} />}
    </div>
  );
}

export default Posts;
