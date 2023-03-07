import data from './data';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="/">Casitas Felices</a>
      </header>
      <main>
        <h1> Productos en venta</h1>
        <div className="products">
          {data.products.map((products) => (
            <div className="product" key={products.slug}>
              <a href={`/product/${products.slug}`}>
                <img src={products.image} alt={products.name} />
              </a>
              <div className="product-info"></div>
              <p>{products.name}</p>
              <p>
                <strong>${products.price}</strong>
              </p>
              <button>Agregar a carrito</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
