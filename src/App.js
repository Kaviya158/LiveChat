import './App.css'; 
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Register from './Pages/Register';
import Login from './Pages/Login';
import Chat from './Pages/Chat';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/" element={<Chat/>}></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
