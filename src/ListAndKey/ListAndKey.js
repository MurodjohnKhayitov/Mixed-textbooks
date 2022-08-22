import React, { useState } from "react";
import styles from "./list.module.css";
export default function ListAndKey() {
  const [person, setperson] = useState([
    { id: 1, name: "Jamshid", age: 23 },
    { id: 2, name: "SHaxzod", age: 13 },
    { id: 3, name: "Begzod", age: 26 },
    { id: 4, name: "Miraziz", age: 33 },
    { id: 5, name: "Komil", age: 17 },
    { id: 6, name: "Bekmurod", age: 91 }
  ]);
  return (
    <div>
      {person.map((item) => {
        return (
          <div key={item.id} className={styles.card}>
            <span>Id:{item.id}</span>
            <h3>Ism:{item.name}</h3>
            <h3>Yosh:{item.age}</h3>
          </div>
        );
      })}
    </div>
  );
}
