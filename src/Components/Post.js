import axios from "axios";
import React, { useEffect, useState } from "react";

const url = "https://course-api.com/react-store-productds";
const Post = () => {
  const title = "Post Data";

  const fetchData = async () => {
    try {
      const res = await axios(url);
      const data = res.data;
      console.log(data);
    } catch (error) {
      console.log(error.res);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <>{<li>{title}</li>}</>;
};

export default Post;
