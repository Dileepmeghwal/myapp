import React, { useEffect } from "react";
import axios from "axios";
const productsUrl = "https://course-api.com/react-store-products";

const randomUserUrl = "http://randomuser.me/api";
const GlobalInstance = () => {
  const fetchData = async () => {
    try{
        const resp = await axios(productsUrl)
        console.log(resp)
    }catch(error){}
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <div>magic</div>;
};

export default GlobalInstance;
