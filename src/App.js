import './App.css';
import {Routes,Route} from "react-router-dom"
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Navbar from './Pages/Navbar';
import Registeration from "./Pages/Registeration"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Registeration></Registeration>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
