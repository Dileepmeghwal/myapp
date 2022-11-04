import React, { useState } from "react";
import axios from "axios";

const url = "https://course-api.com/axios-tutorial-post";
const PostReq = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await axios.post(url, { name: name, email: email });
      console.log(resp.data);
    } catch (error) {
      console.log(error.resp);
    }
    console.log(name, email);
  };
  return (
    <div>
      <div className="section">
        <form action="#" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="#">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label htmlFor="#">Email</label>
            <input
              type=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default PostReq;
