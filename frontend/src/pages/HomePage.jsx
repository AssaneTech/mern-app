import { useEffect, useState } from "react";
import { useProductStore } from "../store/product";
const API_URL = import.meta.env.VITE_API_URL;


function HomePage() {
  const { products, setProducts, deleteProduct, updateProduct } = useProductStore();
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({ name: "", price: "", image: "" });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${API_URL}/api/products`);
        const data = await res.json();
        setProducts(data.data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [setProducts]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const { success, message } = await updateProduct(editingProduct._id, formData);
    console.log("Update:", success, message);
    setEditingProduct(null);
    setFormData({ name: "", price: "", image: "" });
  };

  const startEdit = (product) => {
    setEditingProduct(product);
    setFormData({ name: product.name, price: product.price, image: product.image });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    const { success, message } = await deleteProduct(id);
    console.log("Delete:", success, message);
  };

  return (
    <div className="container mt-4 mb-5">
      
      {/* Update Form */}
      {editingProduct && (
        <div 
          className="card shadow-lg p-4 mb-5"
          style={{ borderRadius: "14px", maxWidth: "600px", margin: "0 auto" }}
        >
          <h3 className="text-center mb-3">✏️ Update Product</h3>

          <form onSubmit={handleUpdate}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Product Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter product name"
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Price</label>
              <input
                type="number"
                className="form-control"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                placeholder="Enter product price"
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Image URL</label>
              <input
                type="url"
                className="form-control"
                name="image"
                value={formData.image}
                onChange={handleChange}
                required
                placeholder="Enter image URL"
              />
            </div>

            <button className="btn btn-dark w-100 mt-2" style={{ borderRadius: "10px" }}>
              Update Product
            </button>
          </form>
        </div>
      )}

      <h2 className="mb-4 fw-bold text-center">🛍️ Our Products</h2>

      {/* Products Grid */}
      <div className="row g-4">
        {products.length === 0 ? (
          <p className="text-center text-muted">No products available.</p>
        ) : (
          products.map((p) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={p._id}>
              <div
                className="card shadow-sm border-0 h-100"
                style={{
                  borderRadius: "14px",
                  transition: "0.3s",
                }}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="card-img-top"
                  style={{
                    objectFit: "cover",
                    height: "200px",
                    borderTopLeftRadius: "14px",
                    borderTopRightRadius: "14px",
                  }}
                />

                <div className="card-body text-center">
                  <h5 className="card-title fw-semibold">{p.name}</h5>
                  <p className="card-text text-muted mb-2">${p.price}</p>

                  <button
                    className="btn btn-outline-dark btn-sm me-2"
                    style={{ borderRadius: "8px" }}
                    onClick={() => startEdit(p)}
                  >
                    ✏️ Edit
                  </button>

                  <button
                    className="btn btn-dark btn-sm"
                    style={{ borderRadius: "8px" }}
                    onClick={() => handleDelete(p._id)}
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Extra styling */}
      <style>
        {`
          .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.15);
          }
        `}
      </style>

    </div>
  );
}

export default HomePage;
