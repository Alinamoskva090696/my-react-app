import React from "react";
import Card from "./Card";
import "./App.css";

const data = [
  {
    img: "https://images.pexels.com/photos/27547181/pexels-photo-27547181/free-photo-of-a-corgi-dog-with-a-ball-on-its-head.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2.jpeg",
    title: "Коргі",
    description: "A cute dog",
  },
  {
    img: "https://images.pexels.com/photos/5252971/pexels-photo-5252971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2.jpeg.jpeg",
    title: "Мопс",
    description: "Another cute dog",
  },
  {
    img: "https://images.pexels.com/photos/5732302/pexels-photo-5732302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2.jpeg",
    title: "Такса",
    description: "Lovely puppy",
  },
];

function App() {
  return (
    <div className="app-container">
      <h3>Proj React Homework</h3>
      <div className="card-container">
        {data.map((item, index) => (
          <Card key={index} img={item.img} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
}

export default App;