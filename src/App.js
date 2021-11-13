import logo from './logo.svg';
import './App.css';
import ArticleApp from './Components/ArticleApp';
import Nav from './Components/Nav';
import { ThemeContext } from './Components/ThemeContext';
import Footer from './Components/Footer';
import {BrowserRouter, Switch, Navigate, useNavigate, Link, Route, Routes, useParams } from 'react-router-dom';
import Article from './Components/Article';
import { useContext } from 'react';

const articles = [{title: "hello world", body: "heyo"}, {title: "hello world 2", body: "sampler"}];

function App() {
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <BrowserRouter>
      <div className={'app ' + theme}>
        <Nav blogName="The blog world" />
        <Routes>
          <Route path="/articles/:id" element={<Article articles={articles}/>}/>
          <Route path="/" element={<ArticleApp articles={articles} />} />
          <Route path="/*" element={<div class={'body ' + theme}>
            <h1>No element found here. Please go somewhere else</h1>
          </div>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
