import React from 'react';
import {Header} from "./modules/Module_Navigation/components/Header";
import './index.sass'
import {UIBar} from "./modules/Module_Navigation/components/UIBar";
import {Categories} from "./modules/Module_Navigation/components/Categories";

function App() {
  return (
    <div className="main">
            <Header/>
            <UIBar/>
            <Categories/>
    </div>
  );
}

export default App;
