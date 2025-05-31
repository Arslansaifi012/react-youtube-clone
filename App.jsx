import Navbar from "./Compnents/Navbar/Navbar";

import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home_Page/Home'
import Video from './Pages/video/Video'
import { useState } from "react";

const App = () =>{
  const [sidebar, setsidebar] = useState(true) ;

  const [inputValue, setinputValue] = useState('') ;


  return <div>
    <Navbar setsidebar = {setsidebar}  setinputValue={setinputValue}/>

    <Routes>
      <Route path="/" element={<Home sidebars = {sidebar} inputValue = {inputValue}/>}/>
      <Route path="/video/:categoryId/:videoId" element = {<Video/>}/>
    </Routes>
  </div>
}

export default App ;