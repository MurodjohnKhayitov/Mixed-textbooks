import React from "react";
import "./card.css";
function Card() {
  const shop = [
    {
      id: 1,
      img: "http://cdn.beta.qalampir.uz/uploads/zk/m_1Em1rB3dUzhjaMmfLibjD2D1mX0wrp.jpg",
      name: "Pamidor",
      uom: 2,
      pacSiz: 2,
      perUn: 8.99,
      total: 17.1,
    },
    {
      id: 2,
      img: "http://cdn.beta.qalampir.uz/uploads/zk/m_1Em1rB3dUzhjaMmfLibjD2D1mX0wrp.jpg",
      name: "Podring",
      uom: 2,
      pacSiz: 2,
      perUn: 8.99,
      total: 17.1,
    },
    {
      id: 3,
      img: "https://en.wikipedia.org/wiki/File:Banana-Single.jpg",
      name: "Banana",
      uom: 2,
      pacSiz: 2,
      perUn: 8.99,
      total: 17.1,
    },
    {
      id: 4,
      img: "http://cdn.beta.qalampir.uz/uploads/zk/m_1Em1rB3dUzhjaMmfLibjD2D1mX0wrp.jpg",
      name: "Pamidor",
      uom: 2,
      pacSiz: 2,
      perUn: 8.99,
      total: 17.1,
    },
    {
      id: 5,
      img: "http://cdn.beta.qalampir.uz/uploads/zk/m_1Em1rB3dUzhjaMmfLibjD2D1mX0wrp.jpg",
      name: "Pamidor",
      uom: 2,
      pacSiz: 2,
      perUn: 8.99,
      total: 17.1,
    },
    {
      id: 6,
      img: "http://cdn.beta.qalampir.uz/uploads/zk/m_1Em1rB3dUzhjaMmfLibjD2D1mX0wrp.jpg",
      name: "Pamidor",
      uom: 2,
      pacSiz: 2,
      perUn: 8.99,
      total: 17.1,
    },
    {
      id: 7,
      img: "http://cdn.beta.qalampir.uz/uploads/zk/m_1Em1rB3dUzhjaMmfLibjD2D1mX0wrp.jpg",
      name: "Pamidor",
      uom: 2,
      pacSiz: 2,
      perUn: 8.99,
      total: 17.1,
    },
  ];
  return (
    <div className="Main">
      {shop.map((item) => {
        return (
          <div className="Card" key={item.id}>
            <div className="Rasm">
              <img src={item.img} />
            </div>
            <div className="item">
              <div className="row1">
                <p>{item.name}</p>
                <p>Add</p>
              </div>
              <div className="row2">
                <div className="box1">
                  <p>UOM</p>
                  <b>{item.uom}</b>
                </div>
                <div className="box1">
                  <p>Pack Size</p>
                  <b>{item.pacSiz}</b>
                </div>
                <div className="box1">
                  <p>Per UNT</p>
                  <b>{item.perUn}</b>
                </div>
                <div className="box1">
                  <p>TOTAL</p>
                  <b>{item.total}</b>
                </div>
              </div>
            
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Card;
