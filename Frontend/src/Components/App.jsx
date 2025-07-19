import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './SignUp.jsx';
import Login from './Login.jsx';
import StyleMate from './StyleMate.jsx';

function App() {
  return(
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/StyleMate" element={<StyleMate />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
