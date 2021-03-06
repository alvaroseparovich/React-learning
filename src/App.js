import React from 'react';
import Header from "./components/header/index";
import "./style.css";
import Main from "./pages/main";

const App = () => (
  <div className="App">
    <Header/>
    <Main />
  </div>
);

export default App;