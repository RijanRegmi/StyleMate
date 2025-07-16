import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './SignUp.jsx';
import Login from './Login.jsx';
import Yourphoto from './yourphoto.jsx';
import OvalFace from './ovalface.jsx';
import SquareFace from "./squareface.jsx";
import RectangaleFace from "./rectangelface.jsx";
// import UploadOrScan from './UploadOrScan.jsx';


function App() {
  return(
    <>
      <Router>
        <Routes>
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/yourphoto" element={<Yourphoto/>} />
          <Route path="/ovalface" element={<OvalFace/>} />
           <Route path="/squareface" element={<SquareFace/>} />
            <Route path="/rectangleface" element={<RectangaleFace/>} />
            {/* <Route path="/UploadOrScan" element={<UploadOrScan/>} /> */}
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Login />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
