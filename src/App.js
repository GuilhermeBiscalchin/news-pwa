import GlobalStyle from "./global/resetCSS";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./containers/Home";
import Post from "./containers/Post";

function App() {
  return (
    <main>
      <GlobalStyle />
      <section>
        <Router>
          <Switch>
            <Route path="/:subject/:id">
              <Post />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </section>
    </main>
  );
}

export default App;
