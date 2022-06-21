
// import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { Dashboard_06,Work_06,Final_06,Menu_06,Register_06, Fine} from './pages';

function App_06() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="dashboard" element={<Dashboard_06/>}/>
    <Route path="work" element={<Work_06/>}/>
    <Route path="final" element={<Final_06/>}/>
    <Route path="/" element={<Menu_06/>}/>
    <Route path="register" element={<Register_06/>}/>
    {/* <Route path="chat" element={<Text_066/>}/> */}
    <Route path="fine" element={<Fine/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App_06;


