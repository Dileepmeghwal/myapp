import React, { useState } from "react";
import axios from "axios";

const url = "https://icanhazdadjoke.com/";
const Header = () => {
  const [joke, setJoke] = useState("Qoute Of The Day");

  const fetchDadJoke = async () => {
    try {
      const { data } = await axios(url, {
        headers: {
          Accept: "application/json",
        },
      });
      setJoke(data.joke);
    } catch (error) {
      console.log(error.res);
    }
  };
  return (
    <>
      <section className="section ">
        <button onClick={fetchDadJoke}>Random Joke</button>
        <p>{joke}</p>
        <p>codesandbox</p>
      </section>
    </>
  );
};

export default Header;
