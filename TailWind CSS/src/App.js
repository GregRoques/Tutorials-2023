import React  from 'react';
import './App.css';
import Center from './Components/Center';

import 'tailwindcss/tailwind.css'
import SideBar from "./Components/SideBar";


function App() {
  return (
    <div className="absolute h-full w-full">
      <SideBar/>
      <Center/>
    </div>
  );
}

export default App;
