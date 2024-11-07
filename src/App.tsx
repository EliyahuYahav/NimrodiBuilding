import { Route, Routes } from "react-router-dom";
import Reception from "./pages/Reception/Reception";
import Floor from "./pages/Floor/Floor";
import PrivateRoute from "./utils/PrivateRoute";
import Layout from "./components/Layout/Layout";
import Forbidden from "./pages/Forbidden/Forbidden";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout children={ < Reception />}/>}></Route>
        <Route path="/floor/:index" element={<Layout children={<PrivateRoute > <Floor/> </PrivateRoute>}/>}/>
        <Route path="/Forbidden" element={<Layout children={<Forbidden/>}/>}/>
      </Routes>
    </div>
  );
}

export default App;
