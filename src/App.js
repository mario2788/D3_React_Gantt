import React from 'react';
import { Gantt } from './Gantt/Gantt';

import "./Gantt/style.css" ;

function App() {
  return (
    <div>
     <h1 align="center"> D3 on React</h1>
     <div id = "container">
        <div className = "svg">
          <Gantt />
        </div>
        <div id = "tag"></div>
        
    </div>
    </div>
  );
}

export default App;
