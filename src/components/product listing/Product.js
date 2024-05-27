import React, { useState, useEffect } from "react";
import NavBar from "../HomePage/NavBar";
import Footer from "../HomePage/Footer";
import { collection, addDoc, query, onSnapshot, getDocs, where, orderBy, limit } from "firebase/firestore";
import { database, auth } from "../../FireBaseConfig";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [marketplace, setMarketplace] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState(null);
  const [editingIndex, setEditingIndex] = useState(-1); 
  const [tempImage, setTempImage] = useState(null); 

  const productDataRef = collection(database, "products"); 

  useEffect(() => {
    const queryPosts = query(productDataRef,  where("userid", "==", auth.currentUser.uid), limit(3) );
    const unsubscribe = onSnapshot(queryPosts, (snapShot) => {
      let posts = [];
      snapShot.forEach((doc) => {
        console.log("pushing data...");
        posts.push({ ...doc.data(), id: doc.id });
        console.log(doc.data());
      });
      setProducts(posts);
    });
    return () => unsubscribe();
  }, []);

    /*
    const productsRef = collection(database, "Products");
    
    const postProduct = async (product) => {
          await addDoc(productsRef, product);
          console.log(`added product to database: ${product}`);
  }*/

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name: productName,
      price: price,
      market: marketplace,
      quantity: quantity,
      image: tempImage || (image ? URL.createObjectURL(image) : null)
    };

    if (editingIndex !== -1) {
      const updatedProducts = [...products];
      updatedProducts[editingIndex] = newProduct;
      setProducts(updatedProducts);
      setEditingIndex(-1); 
    } else {
      setProducts([...products, newProduct]);
    }

    setProductName("");
    setPrice("");
    setMarketplace("");
    setQuantity("");
    setImage(null);
    setTempImage(null); // Reset temporary image
  };

  const handleDelete = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  const handleEdit = (index) => {
    const productToEdit = products[index];
    setProductName(productToEdit.name);
    setPrice(productToEdit.price);
    setMarketplace(productToEdit.market);
    setQuantity(productToEdit.quantity);
    setTempImage(productToEdit.image);
    setEditingIndex(index);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setTempImage(URL.createObjectURL(file)); // Update temporary image when a new image is selected
  };

  return (
    <div>
      <NavBar />
      <div className="flex justify-center bg-green-500">
        <form onSubmit={handleSubmit} className="mt-8 bg-white w-1/2 h-3/4 p-6 m-8 rounded-lg">
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2">
              Product Name
            </label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2">
              Price
            </label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2">
              Location
            </label>
            <input
              type="text"
              value={marketplace}
              onChange={(e) => setMarketplace(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2">
              Quantity
            </label>
            <input
              type="text"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2">
              Product Image
            </label>
            <input
              type="file"
              onChange={handleImageChange}
              className="shadow appearance-none border w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {editingIndex !== -1 ? "Update Product" : "Add Product"}
          </button>
        </form>
        <div className="mt-8 w-full px-8">
          <h2 className="text-lg font-bold mb-4">Products</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product, index) => (
              <li key={index} className="border p-4 rounded-lg flex flex-col justify-between">
                <div>
                  {product.image && (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-32 object-cover mb-2"
                      onClick={() => handleEdit(index)}
                    />
                  )}
                  <div className="mb-2">{product.name} - {product.price} - {product.market} - {product.quantity}</div>
                </div>
                <div>
                  <button
                    onClick={() => handleEdit(index)}
                    className="mr-2 text-sm text-white"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-sm text-white"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Product;



