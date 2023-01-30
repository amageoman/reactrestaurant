import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Restaurantlist from './components/Restaurantlist';
import ViewRest from './components/ViewRest';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>

      <Routes>
{/* path setting forrestaurantlist */}

        <Route path='/' element={<Restaurantlist/>} />


{/* path setting for viewRest */}

        <Route path='/view-restaurant/:id' element={<ViewRest/>} />
          
          

      </Routes>

        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
