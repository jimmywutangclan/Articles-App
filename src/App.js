import logo from './logo.svg';
import './App.css';
import ArticleApp from './Components/ArticleApp';
import Nav from './Components/Nav';
import { ThemeContextConsumer, ThemeContextProvider } from './Components/ThemeContext';
import Footer from './Components/Footer';
import {BrowserRouter, Switch, Navigate, useNavigate, Link, Route, Routes, useParams } from 'react-router-dom';
import Article from './Components/Article';

const articles = [{title: "hello world", body: "heyo"}, {title: "hello world 2", body: "sampler"}];

function App() {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <ThemeContextConsumer>
          {
            (context) => (
              <div className={'app ' + context.theme}>
                <Nav blogName="The blog world" />
                <Routes>
                  <Route path="/articles/:id" element={<Article articles={articles}/>}/>
                  <Route path="/" element={<ArticleApp articles={articles} />} />
                  <Route path="/*" element={<div class={'body ' + context.theme}>
                    <h1>No element found here. Please go somewhere else</h1>
                  </div>} />
                </Routes>
                <Footer />
              </div>
            )
          }
        </ThemeContextConsumer>
      </ThemeContextProvider>
    </BrowserRouter>
  );
}

export default App;
