import logo from './logo.svg';
import './App.css';
import ArticleApp from './Components/ArticleApp';
import Nav from './Components/Nav';
import { ThemeContext } from './Components/ThemeContext';
import Footer from './Components/Footer';
import {BrowserRouter, Switch, Navigate, useNavigate, Link, Route, Routes, useParams } from 'react-router-dom';
import Article from './Components/Article';
import { useContext, useEffect, useReducer } from 'react';
import UsersList from './Components/UsersList';
import Author from './Components/Author';

const articles = [{title: "hello world", body: "heyo"}, {title: "hello world 2", body: "sampler"}];

// reducer function, processes states, transitions states, and updates the data if a payload exists
const reducer = (state, action) => {
  switch(action.type) {
      // call right before sending request, just change loading of state
      case 'POSTS_REQUEST':
          return {...state, loading: true};
      case 'POSTS_SUCCESS':
          // Have to delete error in case of success, since error overrides the other rendering in our return html
          return {...state, articles: action.payload, loading: false, error: ''};
      case 'POSTS_FAIL':
          return {...state, loading: false, error: action.payload};
      case 'USERS_REQUEST':
        return {...state, usersLoading: true};
      case 'USERS_SUCCESS':
        return {...state, users: action.payload, usersLoading: false, usersError: ''};
      case 'USERS_FAIL':
        return {...state, usersLoading: false, usersError: action.payload}
      default:
          return state;
  }
};

function App() {
  // reducer for data
  const [state, dispatch] = useReducer(reducer, {loading: false, articles: [], error: '', usersLoading: false, users: [], usersError: ''});

  // dispatch sends an action to the reducer function, data from the response sent to state within useReducer, real time update
  // upon component mount, dispatch a request, then if successful or error detected, dispatch success or fail
  // async is important, let this update in real time
  const loadArticles = async () => {
    dispatch({type: 'POSTS_REQUEST'});
    try { 
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      dispatch({type: 'POSTS_SUCCESS', payload: data});
    } catch(err) {
      dispatch({type: 'POSTS_FAIL', payload: err.message});
    }
  }

  const loadUsers = async () => {
    dispatch({type: 'USERS_REQUEST'});
    try { 
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      dispatch({type: 'USERS_SUCCESS', payload: data});
    } catch(err) {
      dispatch({type: 'USERS_FAIL', payload: err.message});
    }
  }

  // refresh on function loading
  useEffect(() => {
    loadArticles();
    loadUsers();
  }, []);

  // context for theme
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <BrowserRouter>
      <div className={'app ' + theme}>
        <Nav blogName="The blog world" />
        <Routes>
          <Route path="/articles/:id" element={state.loading ? <div class="body"><h1>Loading article...</h1></div> : 
            state.error ? <div class="body"><h1>state.error</h1></div> : <Article articles={state.articles}/>}/>
          <Route path="/authors/:id" element={state.usersLoading ? <div class="body"><h1>Loading author info...</h1></div> : 
            state.usersError ? <div class="body"><h1>state.usersError</h1></div> : <Author authors={state.users}/>}/>
          <Route path="/" element={
            <div class="contents">
              <div class="body">
                {state.loading ? <div><h1>Loading articles...</h1></div> : 
                state.error ? <div><h1>{state.error}</h1></div> : <ArticleApp articles={state.articles} />}
              </div>
              <div className="sidebar">
                  {state.usersLoading ? <div><h1>Loading users</h1></div> :
                  state.usersError ? <div><h1>{state.usersError}</h1></div> : <ul><UsersList users={state.users}/></ul>}
              </div>
            </div>} />
          <Route path="/*" element={<div class={'body'}>
            <h1>No element found here. Please go somewhere else</h1>
          </div>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
