import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ExclusiveProductList from './components/ExclusiveProductList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section>
          <h2 id="Peluches">Productos de MongoDB</h2>
          <ProductList />
        </section>
        <section>
          <h2 id="productos-exclusivos">Productos Exclusivos</h2>
          <ExclusiveProductList />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
