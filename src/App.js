import React, { useState } from "react";
import "./app.css";
import AdminList from "./PropsItems/AdminList";
import UserList from "./PropsItems/UserList";
import { AiTwotonePhone } from "react-icons/ai";
import { FaAngellist, FaBuffer } from "react-icons/fa";
import Data from "./HandleEvent/Data";
import Auth from "./SignIn/Auth";
import CardTable from "./Carosuel.js/CardTable";
import ListAndKey from "./ListAndKey/ListAndKey";
import NavbarItem from "./ReactRouterDom/NavbarItem";
import Interval from "./Life_cycle/Interval";
import ChangeHook from "./Life_cycle/ChangeHook";
import GetUser from "./Method/GET/GetUser";
import GetData from "./HTTPS/GET/GetData";
import PostData1 from "./HTTPS/POST/PostData1";
import PostMethod from "./Method/POST/PostMethod";
import PostMethod2 from "./Method/POST/PostMethod2";
function App() {
  const [person, setperson] = useState([
    { id: 1, name: "Jamshid", age: 23 },
    { id: 2, name: "SHaxzod", age: 13 },
    { id: 3, name: "Begzod", age: 26 },
    { id: 4, name: "Miraziz", age: 33 },
    { id: 5, name: "Komil", age: 17 },
    { id: 6, name: "Bekmurod", age: 91 }
  ]);
  const [tecno, setTecno] = useState([
    { id: 1, name: "Kompyuter", age: 100 },
    { id: 2, name: "Phone", age: 1300 },
    { id: 3, name: "Kamera", age: 2600 },
    { id: 4, name: "Car", age: 3000 },
    { id: 5, name: "Microphone", age: 1700 },
    { id: 6, name: "Audio", age: 50 }
  ]);
  return (
    <>
      {/* <UserList user={person}>User Interface</UserList>
      <AdminList user={tecno} >Admin dashboard</AdminList>
     <h2> <AiTwotonePhone/></h2>
     <h2><FaAngellist/></h2>
     <h2><FaBuffer/></h2> */}
      {/* <Data /> */}
      {/* <Auth /> */}
      {/* <NavbarItem /> */}
      {/* <Interval/> */}
      {/* <ChangeHook/> */}
      {/* <ListAndKey/> */}
      {/* <PostData1/> */}
      {/* <GetData/> */}
      {/* <PostMethod/> */}
      <PostMethod2 />
    </>
  );
}
export default App;
