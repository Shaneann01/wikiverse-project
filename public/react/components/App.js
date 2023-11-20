import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { PagesList } from "./PagesList";
import { Article } from "./Article";
import { CreateArticle } from "./CreateArticle";
import { DeleteArticle } from "./DeleteArticle";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [pages, setPages] = useState([]);
  const [articles, setArticles] = useState([]);
  //Page list
  useEffect(() => {
    async function fetchPages() {
      try {
        const response = await fetch(`${apiURL}/wiki`);
        const pagesData = await response.json();
        setPages(pagesData);
      } catch (err) {
        console.log("Oh no an error! ", err);
      }
    }
    fetchPages();
  }, []);

  //Article detail!
  useEffect(() => {
    async function fetchArticle() {
      try {
        const response = await fetch(`${apiURL}/wiki`);
        const articleData = await response.json();
        setArticles(articleData);
      } catch (err) {
        console.log("Oh no an error! ", err);
      }
    }
    fetchArticle();
  }, []);

  return (
    <>
      <Router>
        <h1>WikiVerse</h1>
        <h2>An interesting 📚</h2>
        <Routes>
          <Route path="/" element={<PagesList pages={pages} />} />
          <Route
            path="/Article/:slug"
            element={<Article articles={articles} />}
          />
          <Route path="/Create" element={<CreateArticle />} />
          <Route path="/Delete" element={<DeleteArticle />} />
        </Routes>
      </Router>
    </>
  );
};
