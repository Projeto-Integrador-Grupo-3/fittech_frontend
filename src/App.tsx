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
import ListarExercicios from './components/exercicios/listarexercicios/ListarExercicios';
import FormTreinos from './components/treinos/formtreinos/FormTreinos';
import DeletarTreino from './components/treinos/deletartreinos/DeletarTreinos';


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
              <Route path="/cadastrartreino" element={<FormTreinos/>} />
              <Route path="/editartreino/:id" element={<FormTreinos/>} />
              <Route path="/deletartreino/:id" element={<DeletarTreino/>} />
              <Route path="/exercicios" element={<ListarExercicios/>} />
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