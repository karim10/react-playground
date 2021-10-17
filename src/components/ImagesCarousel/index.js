import React from "react";
import { Carousel } from "antd";

export function ImagesCarousel(props) {
  function onChange(a, b, c) {
    // console.log(a, b, c);
  }

  return (
    <Carousel
      afterChange={onChange}
      style={{
        width: "200px",
        margin: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      autoplay={true}
    >
      {props.house.images.map((src, index) => (
        <div key={index}>
          <img src={src} alt={props.house.id} width="100%" height="100%" />
        </div>
      ))}
    </Carousel>
  );
}
