import React from "react";

export default function AdminList({ user,children }) {
  return (
    <div style={{ textAlign: "center" }}>
        <h2>{children}</h2>
      {user.map((item) => {
        return (
          <div>
            I am
            <span>
              <b>{item.name}</b>
            </span>
            and
            <span>
              <b>{item.age}</b>
            </span>
            years old
          </div>
        );
      })}
    </div>
  );
}
