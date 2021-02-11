import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Artist from "./components/Fetch/Artist"
function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/detail/:id" component={Detail} />
    </Router>
  );
}

export default App;
