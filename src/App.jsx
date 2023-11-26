import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Farm from "./pages/Farm";
function App() {
  return (
    <>
      {/* <h1 className='bg-blue-700 font-bold'>Hello</h1> */}

      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/farm" element={<Farm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
