import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
// import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Book from './Pages/Book';
import Formulir from './CRUD/Formulir';
import Table1 from './CRUD/Tabel';
import TabelB from './CRUD/TabelB';
import FormulirB from './CRUD/FormulirB';
// import './App.css'





const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/book' element={<Book/>}/>
        <Route path='/formulir' element={<Formulir/>}/>
        <Route path='/formulirb' element={<FormulirB/>}/>
        <Route path='/tabel' element={<Table1/>}/>
        <Route path='/tabelb' element={<TabelB/>}/>
      </Routes>
    </Router>
  )
}




export default App;
