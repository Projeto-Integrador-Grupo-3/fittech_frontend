import { useState } from 'react';
import './App.css';

import CardTreino from './components/treinos/cardtreinos/CardTreinos';

import Home from './pages/home/Home';
import Navbar from './pages/navbar/Navbar';
import Footer from './pages/footer/Footer';
import Sobre from './pages/sobre/Sobre';
import ListaTreinos from './components/treinos/listartreinos/ListarTreinos';
import ListarTreinos from './components/treinos/listartreinos/ListarTreinos';
import FormTreinos from './components/treinos/formtreinos/FormTreinos';
import Carrossel from './components/carrosel/Carrossel';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/* <FormTreinos /> */}
      <Carrossel />
      {/* <CardTreino />
      <ListarTreinos /> */}
      {/* <Sobre /> */}
      <Footer />
      {/* <DeletarTreino /> */}
    </>
  );
}

export default App;
