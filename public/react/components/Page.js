import React from "react";
import { Article } from "./Article";

export const Page = (props) => {
  return (
    <>
      <h3>{props.page.title}</h3>
      <Article />
    </>
  );
};
