import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Article = ({ articles }) => {
  const { slug } = useParams();
  console.log(slug);

  if (!articles) {
    return <p>Article does not exists!</p>;
  }

  return (
    <>
      <h3>{articles.title}</h3>
    </>
  );
};
