import React from "react";
import { Article } from "./Article";
import { Link } from "react-router-dom";

export const Page = (props) => {
  return (
    <>
      <h3>{props.page.title}</h3>
      <Link to="/Article">{props.page.title}</Link>
    </>
  );
};
