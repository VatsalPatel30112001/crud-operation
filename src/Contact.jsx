import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [name, setname] = useState("");
  const [name2, setname2] = useState("");
  const [name4, setname4] = useState("");
  const [name5, setname5] = useState("");
  const [name6, setname6] = useState("");
  const [name7, setname7] = useState({
    name2: "",
    phone2: "",
  });
  const [name8, setname8] = useState("");

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
  const click = () => {
    axios
      .get(`http://localhost/hari/find/${name5}`)
      .then((data) => {
        setname6(JSON.stringify(data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getdata = (e) => {
    setname5(e.target.value);
  };
  const deleteinput = (e) => {
    setname4(e.target.value);
    console.log(name4);
  };

  const deleting = () => {
    axios
      .get(`http://localhost/hari/delete/${name4}`)
      .then(console.log("deleted"));
  };
  const change2 = (e) => {
    const { name, value } = e.target;
    setname7((olddata) => {
      return {
        ...olddata,
        [name]: value,
      };
    });
  };
  const findby = (e) => {
    setname8(e.target.value);
  };
  const data = {
    name: name7.name2,
    phone: name7.phone2,
  };
  const update = () => {
    axios
      .post(`http://localhost/hari/update/${name8}`, data)
      .then(console.log("updadted"))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <h1>narnarayan dev</h1>
      <form onSubmit={submit}>
        <h1>creating</h1>
        name: <input onChange={change} name="name"></input>
        <br />
        phone:<input onChange={phone} name="phone"></input>
        <br />
        <br />
        <button type="submit">submit</button>
      </form>
      <h1>reading</h1>
      <input onChange={getdata} value={name5}></input>
      <br />
      <p>{name6}</p>
      <button type="button" onClick={click}>
        getdata
      </button>
      <br />
      <h1>updating</h1>
      <input onChange={findby} value={name8}></input>
      <br />
      name: <input onChange={change2} name="name2"></input>
      <br />
      phone:<input onChange={change2} name="phone2"></input>
      <br />
      <button onClick={update}>update</button>
      <br />
      <h1>deleting</h1>
      <input onChange={deleteinput} value={name4}></input>
      <br />
      <button onClick={deleting}>delte</button>
    </>
  );
};

export default Contact;
