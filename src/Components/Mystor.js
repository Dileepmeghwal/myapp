import React, { useEffect, useState } from "react";

const Mystor = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
        console.log(json);
      });
  }, []);
  return (
    <>
      {product.map((data) => (
        <li>{data.title}</li>
      ))}
    </>
  );
};

export default Mystor;
