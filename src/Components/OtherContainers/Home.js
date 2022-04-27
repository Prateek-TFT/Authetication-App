import React from "react";
import { Carousel } from "react-responsive-carousel";
import Data from "../../Assets/Data/Data";
import Hotels from "../Hotel/Hotels";
import Classes from "./Home.module.css";
export const Home = () => {
  return (
    <div className={Classes.div}>
      <Carousel axis="vertical">
      {Data.map((data, index) => {
        return (
          <Hotels
            key={index}
            name={data.fields.name}
            type={data.fields.type}
            src={data.fields.images[0].fields.file.url}
            description={data.fields.description}
            price={data.fields.price}
            capacity={data.fields.capacity}
            size={data.fields.size}
          />
        );
      })}
      </Carousel>
    </div>
  );
};
