
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Login from './components/Login';
import Products from './components/Products';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Use "element" prop */}
        <Route path="/products" element={<Products />} /> {/* Use "element" prop */}
      </Routes>
    </Router>
  );
}

export default App;
