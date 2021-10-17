import { ImagesCarousel } from "../ImagesCarousel";
import styled from "styled-components";
import { Card, Skeleton } from "antd";
import { HeartOutlined } from "@ant-design/icons";

export function HouseCard(props) {
  return (
    <Card
      style={{ width: 240, margin: 20 }}
      actions={[<HeartOutlined key="favorite" />, <span>45$</span>]}
      cover={<ImagesCarousel house={props.house} />}
      bodyStyle={{ display: "none" }}
    >
      {/* <Skeleton loading={false} avatar active></Skeleton> */}
    </Card>
  );
}
