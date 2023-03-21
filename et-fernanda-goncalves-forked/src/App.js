import { useState } from "react";
import { Posts, Users } from "./components";
import "./styles.css";

export default function App() {
  const [tabId, setTabId] = useState();

  return (
    <div className="App">
      <h1>Exercise</h1>
      <div className="menu">
        <span onClick={() => setTabId(0)} className="link">
          Posts
        </span>{" "}
        |{" "}
        <span onClick={() => setTabId(1)} className="link">
          Users
        </span>
      </div>
      <div className="content">
        {tabId === 0 && <Posts />}
        {tabId === 1 && <Users />}
      </div>
    </div>
  );
}
