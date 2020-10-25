import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [name, setname] = useState("");
  const [name2, setname2] = useState("");
  const change = (e) => {
    setname(e.target.value);
  };
  const phone = (e) => {
    setname2(e.target.value);
  };
  async function submit(e) {
    e.preventDefault();
    const data = {
      name: name,
      phone: name2,
    };
    await axios
      .post("http://localhost/hari", data)
      .then(function (response) {
        console.log(response.config.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(data);
  }
  return (
    <>
      <h1>narnarayan dev</h1>
      <form onSubmit={submit}>
        name: <input onChange={change} name="name"></input>
        <br />
        phone:<input onChange={phone} name="phone"></input>
        <br />
        <br />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default Contact;
