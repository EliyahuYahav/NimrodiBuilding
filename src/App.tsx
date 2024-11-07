import { Route, Routes } from "react-router-dom";
import Reception from "./pages/Reception/Reception";
import Floor from "./pages/Floor/Floor";
import PrivateRoute from "./utils/PrivateRoute";
import Layout from "./components/Layout/Layout";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout children={ < Reception />}/>}></Route>
        <Route path="/floor/:index" element={<PrivateRoute > <Floor/> </PrivateRoute>}/>
      </Routes>
    </div>
  );
}

export default App;
