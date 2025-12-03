import { create } from "zustand";
//const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000"; 


export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),

/*___________________________ADDING A NEW PRODUCT__________________________*/
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return { success: false, message: "Please fill in all fields" };
    }
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });
      const data = await res.json();
      set((state) => ({ products: [...state.products, data.data] }));
      return { success: true, message: "Product created successfully" };
    } catch (error) {
      return { success: false, message: error.message || "Failed to create product" };
    }
  },
/*___________________________DELETING A NEW PRODUCT________________________*/
  deleteProduct: async (id) => {                      
    if (!id) {                                       
      return { success: false, message: "Product ID is required" };
    }

    try {
      const res = await fetch(`/api/products/${id}`, {   
        method: "DELETE",
      });

      if (!res.ok) {                                  
        throw new Error("Failed to delete product");     
      }

      set((state) => ({                                
        products: state.products.filter((p) => p._id !== id), 
      }));

      return { success: true, message: "Product deleted successfully" };
    } catch (error) {
      return {                                 
        success: false,
        message: error.message || "Error deleting product",
      };
    }
  },
/*___________________________UPDATING A NEW PRODUCT________________________*/
  updateProduct: async (id, updatedFields) => {                  
    if (!id) {                                                     
      return { success: false, message: "Product ID is required" };
    }

    try {
      const res = await fetch(`/api/products/${id}`, {             
        method: "PUT",                                            
        headers: { "Content-Type": "application/json" },           
        body: JSON.stringify(updatedFields),                       
      });

      if (!res.ok) {                                               
        throw new Error("Failed to update product");
      }

      const data = await res.json();                               

      set((state) => ({                                            
        products: state.products.map((p) =>                        
          p._id === id ? { ...p, ...data.data } : p                
        ),
      }));

      return { success: true, message: "Product updated successfully" };
    } catch (error) {
      return {                                                   
        message: error.message || "Error updating product",
      };
    }
  },

}));
