import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Setting from "./pages/settings/Settings";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
 import Single from "./pages/single/Single";
 import Write from "./pages/write/Write";
import SinglePost from "./components/singlePost/SinglePost";


// 전체적인 웹의 구조
function App() {
  const user = true;
  return (
  <Router>
    <TopBar/>
     <Routes>
       {/* exact keyword = "/" 일 때 해당 페이지만 표시 */}
       <Route exact path = "/" element = {<Home/>}/> 

       {/* already have regisgered -> Home instead */}
       <Route path = "/singlepost" element = {<SinglePost/>}/>
       <Route path = "/register" element = {user ? <Home/> :<Register/>}/>
       <Route path = "/login" element = {user ? <Home/> : <Login/>}/>
       <Route path = "/write" element = {user ? <Write/> : <Register/>}/>
       <Route path = "/setting" element = {user ? <Setting/> : <Register/>}/>
       <Route path = "/post/:postId" element = {<Single/>}/>
       
     </Routes>
  </Router>
  );
}

export default App;
