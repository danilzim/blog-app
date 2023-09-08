import React from "react";
import { Routes, Route } from 'react-router-dom';
import Posts from "../pages/Posts/Posts";
import PostIdPages from "../pages/PostIdPages/PostIdPages";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Posts/>} />
        <Route path="/posts/:id" element={<PostIdPages/>} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
