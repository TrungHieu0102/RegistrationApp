import { useState } from "react";

const State = () => {
  const [username, setUsername] = useState("trunghieu993");
  const [password, setPassword] = useState("trunghieu993");

  console.log(username);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>State</h1>
      <div style={{ display: "flex", flexDirection: "column", width: 300,alignItems: "center" ,gap:"10px" }}>
        <div>
          <label htmlFor="username">user name :</label>
          <input
            name="username"
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="password">user name :</label>
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div>
            <button type="submit">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default State;
