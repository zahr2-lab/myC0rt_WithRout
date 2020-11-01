import React, { useState } from "react";
import "./SignPage.scss";

export default function SignPage() {
  const [waiting, setWaiting] = useState(false);
  return (
    <div className="signPage">
      <div className="signPage-title">Insert Phone Number</div>
      <input className="signPage-insert" type="number" disabled={waiting} />
      {waiting && (
        <input
          className="signPage-insert"
          type="number"
          placeholder="wait for code"
        />
      )}
      <button className="signPage-button" onClick={() => setWaiting(true)}>
        Send
      </button>
    </div>
  );
}
