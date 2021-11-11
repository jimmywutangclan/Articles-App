import logo from './logo.svg';
import './App.css';
import ArticleApp from './Components/ArticleApp';
import Nav from './Components/Nav';
import { ThemeContextConsumer, ThemeContextProvider } from './Components/ThemeContext';
import Footer from './Components/Footer';

const articles = [{title: "hello world", body: "heyo"}, {title: "hello world 2", body: "sampler"}];

function App() {
  return (
    <ThemeContextProvider>
      <ThemeContextConsumer>
        {
          (context) => (
            <div className={'app ' + context.theme}>
              <Nav blogName="The blog world" />
              <ArticleApp articles={articles}/>
              <Footer />
            </div>
          )
        }
      </ThemeContextConsumer>
    </ThemeContextProvider>
  );
}

export default App;
