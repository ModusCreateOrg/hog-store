// @ts-nocheck
import React from 'react';
import Menu from './components/Menu';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import Products from './components/Products';
import BoringContent from './components/BoringContent';
import Footer from './components/Footer';
import './App.css';

const App = () => (
  <>
    <Menu />
    <Sidebar />
    <div id="main">
      <Hero />
      <main>
        <Products />
        <BoringContent />
      </main>
    </div>
    <Footer />
  </>
);

export default App;
