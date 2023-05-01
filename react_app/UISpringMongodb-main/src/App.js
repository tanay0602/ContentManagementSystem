import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Feed, Dashboard, Create } from "./pages"

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CMS" >
          <Route path="/CMS/dashboard" element={<Dashboard />}/>
          <Route path="/CMS/create" element={<Create />}/>
          </Route>
          <Route path="/CMS/feed" element={<Feed />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
