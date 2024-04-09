import { useState } from "react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

const products = [
  { id: 1, name: "T-Shirt", price: 19.99, image: "https://example.com/tshirt.jpg" },
  { id: 2, name: "Jeans", price: 49.99, image: "https://example.com/jeans.jpg" },
  { id: 3, name: "Dress", price: 79.99, image: "https://example.com/dress.jpg" },
  // Add more products...
];

function App() {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Clothing Brand</a>
        </div>
        <div className="flex-none">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
          <div className="dropdown dropdown-end ml-4">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <FaShoppingCart className="text-2xl" />
                <span className="badge badge-sm indicator-item">{cart.length}</span>
              </div>
            </label>
            <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
              <div className="card-body">
                <span className="font-bold text-lg">{cart.length} Items</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">View cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img src={product.image} alt={product.name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p>${product.price}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
