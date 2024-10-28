"use client";
import { Axios } from "axios";
import React, { useState } from "react";

const Home = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hhh name", name);
    console.log("hhh phone", phone);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Phone"
          onChange={(event) => setPhone(event.target.value)}
        />
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Home;
