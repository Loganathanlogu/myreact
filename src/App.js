import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Amplify } from "aws-amplify";
import WithAuth from "./component/withAuth";
import config from "./aws-exports";
import Table1 from "./component/UserPool";
Amplify.configure(config);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WithAuth />} />
        <Route path="/add" element={<Table1 />} />
      </Routes>
    </Router>
  );
}

export default App;
