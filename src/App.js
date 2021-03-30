import "./styles/App.scss";
import Home from "./components/pages/Home";
import Navbar from "./components/elements/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
