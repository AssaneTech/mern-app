import { useState } from "react";
import { useProductStore } from "../store/product";
import SuccessPopup from "../components/SuccessPopup";

function CreatePage() {
  const [newproduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { createProduct } = useProductStore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    try {
      // createProduct peut renvoyer plusieurs formats :
      // 1) { succes: true, message: "...", data: ... }
      // 2) { success: true, data: ... }
      // 3) axios response object (res) -> res.status / res.data
      const res = await createProduct(newproduct);
      console.log("createProduct raw response:", res);

      // Normaliser la réponse :
      // - si c'est un objet axios (qui contient .status et .data)
      // - si c'est directement { succes: true } ou { success: true }
      let succes = false;
      let message = "Product added";

      if (!res) {
        // cas improbable : store retourne undefined
        succes = false;
        message = "No response from createProduct";
      } else if (typeof res === "object" && "status" in res && res.data) {
        // axios-like: res.data peut contenir succes/success
        const d = res.data;
        succes = d.succes === true || d.success === true || res.status === 201;
        message = d.message || d.msg || "Product created";
      } else if (typeof res === "object") {
        // store returned a plain object
        succes = res.succes === true || res.success === true || res.status === 201;
        message = res.message || res.msg || "Product created";
      } else {
        // other types (string, boolean)
        succes = res === true;
      }

      console.log("normalized:", { succes, message });

      if (succes === true) {
        setSuccessMessage(message || "Product added successfully 🎉");
        setNewProduct({ name: "", price: "", image: "" });

        // auto hide (SuccessPopup also auto-hide), but double safety
        setTimeout(() => setSuccessMessage(""), 3500);
      } else {
        setErrorMessage(message || "Failed to add product");
      }
    } catch (err) {
      console.error("createProduct threw:", err);
      setErrorMessage(
        err?.response?.data?.message || err.message || "Server error"
      );
    }
  };

  return (
    <>
      {successMessage && (
        <SuccessPopup message={successMessage} onClose={() => setSuccessMessage("")} />
      )}

      <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
        <div className="card shadow-lg p-4" style={{ width: "100%", maxWidth: 540, borderRadius: "12px" }}>
          <h3 className="text-center mb-4">🛒 Create New Product</h3>

          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Product Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={newproduct.name}
                onChange={handleChange}
                placeholder="Enter product name"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Price</label>
              <input
                type="number"
                className="form-control"
                name="price"
                value={newproduct.price}
                onChange={handleChange}
                placeholder="Enter price"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Image URL</label>
              <input
                type="url"
                className="form-control"
                name="image"
                value={newproduct.image}
                onChange={handleChange}
                placeholder="Enter image URL"
                required
              />
            </div>

            <button type="submit" className="btn btn-dark w-100 mt-2" style={{ borderRadius: "8px" }}>
              Add Product
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreatePage;
