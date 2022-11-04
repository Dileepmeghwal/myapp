import React, { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "https://www.likex.es/prueba/api/AppRegister/GetCountries";
const GetCountry = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((res) => {
      setPost(res.data.Data);
      console.log(res.data);
    });
  }, []);

  if (!post) return "Loading...";
  return (
    <>
      {post.map((e) => (
        <section>
          <h4 key={e.id}>{e.title}</h4>
        </section>
      ))}
    </>
  );
};

export default GetCountry;
