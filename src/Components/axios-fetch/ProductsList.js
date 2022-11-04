import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const url = "https://fakestoreapi.com/products";
// const url = "https://www.likex.es/prueba/api/AppRegister/GetCountries";

const ProductsList = () => {
  const [item, setItem] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios(url);
      const data = res.data;
      setItem(data);
    } catch (error) {
      console.log(error.res);
    }
  };

  useEffect(() => {
    fetchData();
  });
  return (
    <>
      <div>ProductsList</div>

      {item.map((items) => (
        <div key={items.id} className="container d-flex">
          <div>
            <li>{items.title.substring(0.2)}</li>
            <img src={items.image} width={"50px"} alt="" />
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductsList;
