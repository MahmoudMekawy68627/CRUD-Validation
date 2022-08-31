import { Route, Routes } from 'react-router-dom';
import './App.css';
import Edit from './components/Edit';
import Home from './components/Home';
import Create from './components/Create';


function App() {
  return (
    <div className="App mt-3">
      <h1>CRUD Operations With Form Validation</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/edit' element={<Edit />} />
        <Route path='/create' element={<Create />} />

        <Route path='*' element={<Home />} />

      </Routes>
    </div>
  );
}

export default App;
