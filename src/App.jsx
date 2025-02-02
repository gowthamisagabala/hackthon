
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./assets/Signup/signup.jsx";
import Login from "./assets/Login/login.jsx";
import GitHubRepoSearch from "./GitHubRepoSearch.jsx";
// import Search from "./assets/search.jsx"


// import Home from "./assets/Home.jsx";



function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login/>}/>
      {/* <Route path="/search" element={<Search/>}/> */}
      <Route path="/githubreposearch" element={<GitHubRepoSearch/>}/>
      
      </Routes>

    </Router>
    
  );
}

export default App;


 
  


