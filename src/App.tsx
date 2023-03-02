import React from 'react';
import {Header} from "./modules/Module_Navigation/components/Header";
import './index.sass'
import {UIBar} from "./modules/Module_Navigation/components/UIBar";

function App() {
  return (
    <div className="main">
        <Header/>
        <UIBar/>
      <div>Hello world</div>
    </div>
  );
}

export default App;
