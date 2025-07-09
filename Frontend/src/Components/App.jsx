import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignUp from './SignUp.jsx';
import Login from './Login.jsx';
import Yourphoto from './yourphoto.jsx';


function App() {
  return(
    <>
      <Router>
        <Routes>
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/yourphoto" element={<Yourphoto/>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Login />} />

        </Routes>
      </Router>
    </>
  );
}

export default App
