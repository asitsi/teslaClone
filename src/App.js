import Header from "./components/Header";
import Home from "./components/Home";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/teslaClone" exact component={Home}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
