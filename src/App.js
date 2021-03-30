import "./styles/App.scss";
import Home from "./components/pages/Home";
import Navbar from "./components/elements/Navbar";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import AddPost from "./components/Posts/AddPost";
import Post from "./components/Posts/Post";
import UpdatePost from "./components/Posts/UpdatePost";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/addPost" component={AddPost} />
            <Route exact path="/post/:id" component={Post} />
            <Route exact path="/updatePost/:id" component={UpdatePost} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
