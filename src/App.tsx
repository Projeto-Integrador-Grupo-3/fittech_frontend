import './App.css';


import { AuthProvider } from './context/AuthContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Cadastro from './pages/cadastro/Cadastro';
import Sobre from './pages/sobre/Sobre';
import Home from './pages/home/Home';
import ListarTreinos from './components/treinos/listartreinos/ListarTreinos';


function App() {
  return (
    <>
    <AuthProvider>
        <BrowserRouter>
         <Navbar/>
         
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/treinos" element={<ListarTreinos />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastrar" element={<Cadastro />} />
              <Route path="/sobre" element={<Sobre />} />
            </Routes>
            
         <Footer/>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App