import React, { useEffect, useState } from 'react'
import './style.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import CategoriesView from './views/CategoriesView';
import ProductsView from './views/ProductsView';
import ProductDetailsView from './views/ProductDetailsView';
import ContactsView from './views/ContactsView';
import SearchView from './views/SearchView';
import CompareView from './views/CompareView';
import ShoppingCartView from './views/ShoppingCartView';
import WishListView from './views/WishListView';
import NotFoundView from './views/NotFoundView';
import { FeaturedProductsContext, ProductContext, SaleContext } from './contexts/contexts'

function App() {
  const [products, setProducts] = useState([])
  const [featured, setFeatured] = useState([])
  const [sale, setSale] = useState([])
   
  useEffect(() => {
    const fetchAllData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts(await result.json())
    }
    fetchAllData()

    const fetchFeaturedProducts = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setFeatured(await result.json())
    }
    fetchFeaturedProducts()

    const fetchSaleData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setSale(await result.json())
    }
    fetchSaleData()

  }, [setProducts, setFeatured, setSale])

  //   { id: 1, name : "modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/9558593/pexels-photo-9558593.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
  //   { id: 2, name : "modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/9558570/pexels-photo-9558570.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
  //   { id: 3, name : "modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/9558232/pexels-photo-9558232.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
  //   { id: 4, name : "modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/4109755/pexels-photo-4109755.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
  
  return (
    <BrowserRouter>
      <ProductContext.Provider value={products}>
        <FeaturedProductsContext.Provider value={featured}>
          <SaleContext.Provider value={sale}>
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route path="/categories" element={<CategoriesView />} />
              <Route path="/products" element={<ProductsView />} />
              <Route path="/products/:name" element={<ProductDetailsView />} />
              <Route path="/contacts" element={<ContactsView />} />
              <Route path="/search" element={<SearchView />} />
              <Route path="/compare" element={<CompareView />} />
              <Route path="/wishlist" element={<WishListView />} />
              <Route path="/shoppingcart" element={<ShoppingCartView />} />
              <Route path="*" element={<NotFoundView />} />
            </Routes>
          </SaleContext.Provider>
        </FeaturedProductsContext.Provider>
      </ProductContext.Provider>
    </BrowserRouter>
  );
}

export default App;
