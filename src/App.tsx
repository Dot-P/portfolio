import React from 'react';
import './App.css';
import Header from './components/header//Header'
import Footer from './components/footer/Footer'
import Main from './components/main/Main'

function App() {
  return (
    <>
    <div className="develop">
      <p>The mobile version is currently under development.</p>
    </div>
    <div className="Portfolio">
      <Header />
      <Main />
      <Footer />
    </div>
    </>
  );
}

export default App;
