import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";

import Home from "./pages/Home";
import Properties from "./pages/Properties";
import Post from "./pages/Post";
import NoPage from "./pages/NoPage";
import PostView from "./pages/PostView";
import PropertiesView from "./pages/PropertiesView";

/*import { NavBar } from "./NavBar";*/

export default function App(){
    return (<div>
        
    <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="Properties" element={<Properties/>} />
          <Route path="/Properties/:id" element={<PropertiesView />} />
          <Route path="Post" element={<Post/>} />
          <Route path="*" element={<NoPage />} />
          <Route path="/Post/:id" element={<PostView />} />

        </Routes>
    </BrowserRouter>
    
    </div>);

}
