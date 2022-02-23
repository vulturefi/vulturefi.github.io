import React from "react";

import './App.css'
import Header from "./header/header";
import Teaser from "./teaser/teaser"

const App = () => {
   return (
   <div className="App">
      <div className="App-container Screen">
         <Header />
         <Teaser />
      </div>
   </div>
   );
};

export default App;
