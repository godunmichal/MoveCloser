import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import RoomDetails from "./components/RoomDetails";
import { GlobalStyle } from "./globalStyles";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/roomdetails/:id" component={RoomDetails} />
        <Route path="/" component={Home} />
      </Switch>
      <GlobalStyle />
    </Router>
  );
}

export default App;
