import React from "react";
import { Carousel } from "antd";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export function ImagesCarousel(props) {
  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  console.log(props);

  return (
    <Carousel afterChange={onChange} style={{ width: "200px", margin: "20px" }}>
      {props.house.images.map((src, index) => (
        <div key={index}>
          <img src={src} alt={props.house.id} width="100%" height="100%" />
        </div>
      ))}
    </Carousel>
  );
}
