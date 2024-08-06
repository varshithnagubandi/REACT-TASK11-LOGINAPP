import React, { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const inputhandle = (event) => {
    setData({ ...data, [event.target.name]: [event.target.value] });
  };

  const submithandler = (event) => {
    event.preventDefault();
    console.log(data);
  };

  return (
    <div className="box1">
      <center>
        <h1 className="heading">LOGIN FORM</h1>

        <form onSubmit={submithandler}>
          <label>USERNAME :</label>
          <input
            type="text"
            name="username"
            value={data.username}
            onChange={inputhandle}
          />
          <br />
          <label>PASSWORD :</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={inputhandle}
          />
          <br />
          <button type="submit">SUBMIT</button>
        </form>
        <p className="sub-para">----- INSPECT AND SEE THE SAVED DATA -----</p>
      </center>
    </div>
  );
}

export default App;
