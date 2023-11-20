import React, { useEffect, useState } from "react";
import { Article } from "./Article";
import { Link } from "react-router-dom";

export const Page = (props) => {
  return (
    <>
      <h3>{props.page.title}</h3>
      <Article />
    </>
  );
};
