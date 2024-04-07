//import dependencies 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import layouts
import PageLayout from './Layouts/PageLayout';


//import components 
import Home from './Components/Main/Home'
import  Men from './Components/Main/Men'
import Women from './Components/Main/Women'
import Accessory from './Components/Main/Accessory'
import Blog from './Components/Main/Blog'
import Pages from './Components/Main/Pages'
import Contact from './Components/Main/Contact'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
            <Route index element={ <Home />} />
            <Route element={<Men />} />
            <Route path="women" element={<Women />} />
            <Route path="accessory" element={<Accessory />} />
            <Route path="blog" element={<Blog />} />
            <Route path="pages" element={<Pages />} />
            <Route path="contact" element={<Contact />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
